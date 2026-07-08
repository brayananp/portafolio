import {
	PDFDocument,
	type PDFFont,
	type PDFPage,
	rgb,
	StandardFonts,
} from "pdf-lib";
import type { PortfolioData } from "../types/portfolio";
import type { CvPdfLabels } from "./cvPdfLabels";
import { drawContactIcon, type ContactIconType } from "./cvPdfIcons";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 52;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const MIN_Y = MARGIN + 48;
const ICON_SIZE = 10;
const ICON_GAP = 6;

const spacing = {
	afterHeader: 20,
	afterSectionTitle: 10,
	afterParagraph: 8,
	afterEntry: 14,
	beforeSection: 22,
	lineHeight: 1.5,
};

const colors = {
	heading: rgb(23 / 255, 25 / 255, 28 / 255),
	body: rgb(55 / 255, 58 / 255, 64 / 255),
	muted: rgb(110 / 255, 114 / 255, 122 / 255),
	accent: rgb(45 / 255, 55 / 255, 72 / 255),
	rule: rgb(210 / 255, 213 / 255, 218 / 255),
};

interface PdfContext {
	pdfDoc: PDFDocument;
	page: PDFPage;
	fontRegular: PDFFont;
	fontBold: PDFFont;
	y: number;
}

function sanitizeText(text: string): string {
	return text
		.replace(/[\u2013\u2014]/g, "-")
		.replace(/[\u2018\u2019]/g, "'")
		.replace(/[\u201C\u201D]/g, '"');
}

function wrapText(
	text: string,
	maxWidth: number,
	font: PDFFont,
	size: number,
): string[] {
	const safeText = sanitizeText(text);
	const words = safeText.split(/\s+/).filter(Boolean);
	const lines: string[] = [];
	let currentLine = "";

	for (const word of words) {
		const candidate = currentLine ? `${currentLine} ${word}` : word;
		const width = font.widthOfTextAtSize(candidate, size);

		if (width <= maxWidth) {
			currentLine = candidate;
			continue;
		}

		if (currentLine) {
			lines.push(currentLine);
		}
		currentLine = word;
	}

	if (currentLine) {
		lines.push(currentLine);
	}

	return lines.length > 0 ? lines : [""];
}

function ensureSpace(ctx: PdfContext, requiredHeight: number): PdfContext {
	if (ctx.y - requiredHeight >= MIN_Y) {
		return ctx;
	}

	const page = ctx.pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
	return { ...ctx, page, y: PAGE_HEIGHT - MARGIN };
}

function drawTextLine(
	ctx: PdfContext,
	text: string,
	options: {
		x?: number;
		size: number;
		font?: PDFFont;
		color?: ReturnType<typeof rgb>;
		lineHeight?: number;
	},
): PdfContext {
	const font = options.font ?? ctx.fontRegular;
	const color = options.color ?? colors.body;
	const lineHeight = options.lineHeight ?? options.size * spacing.lineHeight;
	const x = options.x ?? MARGIN;

	const next = ensureSpace(ctx, lineHeight);

	next.page.drawText(text, {
		x,
		y: next.y,
		size: options.size,
		font,
		color,
	});

	return { ...next, y: next.y - lineHeight };
}

function drawLines(
	ctx: PdfContext,
	lines: string[],
	options: {
		size: number;
		font?: PDFFont;
		color?: ReturnType<typeof rgb>;
		lineHeight?: number;
		x?: number;
	},
): PdfContext {
	let next = ctx;

	for (const line of lines) {
		next = drawTextLine(next, line, options);
	}

	return next;
}

function drawParagraph(
	ctx: PdfContext,
	text: string,
	options?: {
		size?: number;
		color?: ReturnType<typeof rgb>;
	},
): PdfContext {
	const size = options?.size ?? 10;
	const lines = wrapText(text, CONTENT_WIDTH, ctx.fontRegular, size);
	const next = drawLines(ctx, lines, {
		size,
		color: options?.color ?? colors.body,
	});
	return { ...next, y: next.y - spacing.afterParagraph };
}

function drawRule(ctx: PdfContext): PdfContext {
	const next = ensureSpace(ctx, 12);
	const y = next.y;

	next.page.drawLine({
		start: { x: MARGIN, y },
		end: { x: PAGE_WIDTH - MARGIN, y },
		thickness: 0.75,
		color: colors.rule,
	});

	return { ...next, y: y - spacing.afterHeader };
}

function drawSectionTitle(ctx: PdfContext, title: string): PdfContext {
	let next = ensureSpace(ctx, spacing.beforeSection + 24);
	next = { ...next, y: next.y - spacing.beforeSection };

	next.page.drawRectangle({
		x: MARGIN,
		y: next.y - 2,
		width: 3,
		height: 12,
		color: colors.accent,
	});

	next = drawTextLine(next, title, {
		x: MARGIN + 10,
		size: 11,
		font: next.fontBold,
		color: colors.heading,
		lineHeight: 16,
	});

	return { ...next, y: next.y - spacing.afterSectionTitle };
}

function drawExperienceEntry(
	ctx: PdfContext,
	title: string,
	period: string,
	description: string,
): PdfContext {
	const titleSize = 10.5;
	const periodSize = 9;
	const periodWidth = ctx.fontRegular.widthOfTextAtSize(period, periodSize);
	const titleMaxWidth = CONTENT_WIDTH - periodWidth - 16;
	const titleLines = wrapText(title, titleMaxWidth, ctx.fontBold, titleSize);

	let next = ensureSpace(ctx, titleLines.length * 16 + 40);

	for (let index = 0; index < titleLines.length; index++) {
		const line = titleLines[index];

		if (index === 0) {
			next.page.drawText(line, {
				x: MARGIN,
				y: next.y,
				size: titleSize,
				font: next.fontBold,
				color: colors.heading,
			});

			next.page.drawText(period, {
				x: PAGE_WIDTH - MARGIN - periodWidth,
				y: next.y,
				size: periodSize,
				font: next.fontRegular,
				color: colors.muted,
			});

			next = { ...next, y: next.y - titleSize * spacing.lineHeight };
			continue;
		}

		next = drawTextLine(next, line, {
			size: titleSize,
			font: next.fontBold,
			color: colors.heading,
		});
	}

	next = drawParagraph(next, description, { size: 9.5 });
	return { ...next, y: next.y - spacing.afterEntry };
}

function drawProjectEntry(
	ctx: PdfContext,
	name: string,
	summary: string,
	tags: string[],
): PdfContext {
	let next = drawTextLine(ctx, name, {
		size: 10.5,
		font: ctx.fontBold,
		color: colors.heading,
		lineHeight: 15,
	});

	next = drawParagraph(next, summary, { size: 9.5 });

	if (tags.length > 0) {
		next = drawTextLine(next, tags.join(" · "), {
			size: 8.5,
			color: colors.muted,
			lineHeight: 13,
		});
	}

	return { ...next, y: next.y - spacing.afterEntry };
}

function extractContactValue(url: string): string {
	return url.replace(/^mailto:/, "");
}

function shortenUrl(url: string): string {
	return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function formatWhatsApp(url: string): string {
	const match = url.match(/wa\.me\/(\d+)/);
	if (!match) return shortenUrl(url);
	const digits = match[1];
	return `+${digits}`;
}

interface ContactLink {
	type: ContactIconType;
	label: string;
}

function drawContactLine(
	ctx: PdfContext,
	item: ContactLink,
	options: {
		textSize: number;
		color: ReturnType<typeof rgb>;
		x?: number;
		maxTextWidth?: number;
	},
): PdfContext {
	const textSize = options.textSize;
	const color = options.color;
	const iconX = options.x ?? MARGIN;
	const textX = iconX + ICON_SIZE + ICON_GAP;
	const maxTextWidth =
		options.maxTextWidth ?? CONTENT_WIDTH - (ICON_SIZE + ICON_GAP);
	const lines = wrapText(item.label, maxTextWidth, ctx.fontRegular, textSize);
	const lineHeight = textSize * 1.55;
	let next = ensureSpace(ctx, lines.length * lineHeight + 2);
	const startY = next.y;
	const anchorBaseline =
		lines.length === 1
			? startY
			: startY - ((lines.length - 1) * lineHeight) / 2;

	drawContactIcon(
		next.page,
		item.type,
		iconX,
		anchorBaseline,
		ICON_SIZE,
		next.fontRegular,
		textSize,
		color,
	);

	for (const line of lines) {
		next.page.drawText(line, {
			x: textX,
			y: next.y,
			size: textSize,
			font: next.fontRegular,
			color,
		});
		next = { ...next, y: next.y - lineHeight };
	}

	return { ...next, y: next.y - 4 };
}

function drawContactEntry(ctx: PdfContext, item: ContactLink): PdfContext {
	return drawContactLine(ctx, item, {
		textSize: 9,
		color: colors.body,
	});
}

function buildFilename(portfolio: PortfolioData, labels: CvPdfLabels): string {
	const slug = portfolio.authorName
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

	return `${labels.filenamePrefix}-${slug}.pdf`;
}

function drawHeader(ctx: PdfContext, portfolio: PortfolioData): PdfContext {
	const nameLines = wrapText(
		portfolio.authorName,
		CONTENT_WIDTH,
		ctx.fontBold,
		22,
	);

	let next = drawLines(ctx, nameLines, {
		size: 22,
		font: ctx.fontBold,
		color: colors.heading,
		lineHeight: 28,
	});

	next = drawTextLine(next, portfolio.hero.role, {
		size: 12,
		font: ctx.fontBold,
		color: colors.accent,
		lineHeight: 18,
	});

	next = { ...next, y: next.y - 4 };
	next = drawParagraph(next, portfolio.hero.tagline, {
		size: 10,
		color: colors.body,
	});

	const contactItems: ContactLink[] = [
		{
			type: "email",
			label: extractContactValue(portfolio.contact.email),
		},
		{
			type: "linkedin",
			label: shortenUrl(portfolio.contact.linkedin),
		},
		{
			type: "github",
			label: shortenUrl(portfolio.contact.github),
		},
	];

	next = { ...next, y: next.y - 4 };
	for (const item of contactItems) {
		next = drawContactLine(next, item, {
			textSize: 8.5,
			color: colors.muted,
		});
	}
	next = { ...next, y: next.y - 4 };

	return drawRule(next);
}

export async function generateCvPdf(
	portfolio: PortfolioData,
	labels: CvPdfLabels,
	_locale: string,
): Promise<{ bytes: Uint8Array; filename: string }> {
	const pdfDoc = await PDFDocument.create();
	const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
	const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
	const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

	let ctx: PdfContext = {
		pdfDoc,
		page,
		fontRegular,
		fontBold,
		y: PAGE_HEIGHT - MARGIN,
	};

	ctx = drawHeader(ctx, portfolio);

	ctx = drawSectionTitle(ctx, labels.profile);
	ctx = drawParagraph(ctx, portfolio.about.content);

	ctx = drawSectionTitle(ctx, labels.experience);
	for (const entry of portfolio.career) {
		ctx = drawExperienceEntry(
			ctx,
			entry.title,
			entry.period,
			entry.description,
		);
	}

	ctx = drawSectionTitle(ctx, labels.projects);
	for (const project of portfolio.projects) {
		ctx = drawProjectEntry(ctx, project.name, project.summary, project.tags);
	}

	ctx = drawSectionTitle(ctx, labels.skills);
	for (const category of portfolio.stack) {
		const items = category.items.join(", ");
		ctx = drawTextLine(ctx, `${category.label}: ${items}`, {
			size: 9.5,
			color: colors.body,
			lineHeight: 15,
		});
	}

	ctx = { ...ctx, y: ctx.y - 4 };
	ctx = drawSectionTitle(ctx, labels.contact);

	const contactEntries: ContactLink[] = [
		{
			type: "email",
			label: extractContactValue(portfolio.contact.email),
		},
		{
			type: "linkedin",
			label: portfolio.contact.linkedin,
		},
		{
			type: "github",
			label: portfolio.contact.github,
		},
		{
			type: "whatsapp",
			label: formatWhatsApp(portfolio.contact.whatsapp),
		},
	];

	for (const entry of contactEntries) {
		ctx = drawContactEntry(ctx, entry);
	}

	const bytes = await pdfDoc.save();

	return {
		bytes,
		filename: buildFilename(portfolio, labels),
	};
}

export function downloadPdf(bytes: Uint8Array, filename: string): void {
	const blob = new Blob([Uint8Array.from(bytes)], { type: "application/pdf" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
