import { PDFDocument, type PDFFont, type PDFPage, rgb, StandardFonts } from "pdf-lib";
import type { PortfolioData } from "../types/portfolio";
import type { CvPdfLabels } from "./cvPdfLabels";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const colors = {
	primary: rgb(30 / 255, 33 / 255, 39 / 255),
	secondary: rgb(90 / 255, 95 / 255, 104 / 255),
	muted: rgb(138 / 255, 143 / 255, 152 / 255),
	amber: rgb(156 / 255, 116 / 255, 35 / 255),
	green: rgb(43 / 255, 122 / 255, 68 / 255),
	border: rgb(220 / 255, 222 / 255, 226 / 255),
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

function drawLines(
	ctx: PdfContext,
	lines: string[],
	options: {
		size: number;
		font?: PDFFont;
		color?: ReturnType<typeof rgb>;
		lineHeight?: number;
	},
): PdfContext {
	const font = options.font ?? ctx.fontRegular;
	const color = options.color ?? colors.secondary;
	const lineHeight = options.lineHeight ?? options.size * 1.45;
	let { page, y, pdfDoc } = ctx;

	for (const line of lines) {
		if (y < MARGIN + 40) {
			page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
			y = PAGE_HEIGHT - MARGIN;
		}

		page.drawText(line, {
			x: MARGIN,
			y,
			size: options.size,
			font,
			color,
		});
		y -= lineHeight;
	}

	return { ...ctx, pdfDoc, page, y };
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
	return drawLines(ctx, lines, {
		size,
		color: options?.color ?? colors.secondary,
	});
}

function drawSectionTitle(ctx: PdfContext, title: string): PdfContext {
	let next = ctx;

	if (next.y < MARGIN + 80) {
		const page = next.pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
		next = { ...next, page, y: PAGE_HEIGHT - MARGIN };
	} else {
		next = { ...next, y: next.y - 12 };
	}

	next.page.drawLine({
		start: { x: MARGIN, y: next.y + 8 },
		end: { x: PAGE_WIDTH - MARGIN, y: next.y + 8 },
		thickness: 0.5,
		color: colors.border,
	});

	next = drawLines(next, [title.toUpperCase()], {
		size: 9,
		font: next.fontBold,
		color: colors.muted,
		lineHeight: 14,
	});

	return { ...next, y: next.y - 4 };
}

function formatReleaseDate(date: string, locale: string): string {
	return new Date(date).toLocaleDateString(locale, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

function extractContactValue(url: string): string {
	return url.replace(/^mailto:/, "");
}

function buildFilename(portfolio: PortfolioData, labels: CvPdfLabels): string {
	const slug = portfolio.displayName
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");

	return `${labels.filenamePrefix}-${slug}-${portfolio.hero.version}.pdf`;
}

export async function generateCvPdf(
	portfolio: PortfolioData,
	labels: CvPdfLabels,
	locale: string,
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

	ctx = drawLines(ctx, [labels.releaseNote], {
		size: 9,
		font: fontBold,
		color: colors.muted,
		lineHeight: 12,
	});

	ctx = drawLines(ctx, [portfolio.displayName], {
		size: 22,
		font: fontBold,
		color: colors.primary,
		lineHeight: 28,
	});

	ctx = drawLines(
		ctx,
		[`${portfolio.hero.version}  ·  ${portfolio.hero.role}`],
		{
			size: 11,
			font: fontBold,
			color: colors.amber,
			lineHeight: 18,
		},
	);

	ctx = drawParagraph(ctx, portfolio.hero.tagline, { size: 10 });
	ctx = { ...ctx, y: ctx.y - 6 };

	ctx = drawLines(
		ctx,
		[
			`${labels.releaseDate}: ${formatReleaseDate(portfolio.hero.releaseDate, locale)}`,
		],
		{
			size: 9,
			font: fontRegular,
			color: colors.muted,
			lineHeight: 14,
		},
	);

	ctx = drawSectionTitle(ctx, labels.about);
	ctx = drawParagraph(ctx, portfolio.about.content);

	ctx = drawSectionTitle(ctx, labels.experience);
	for (const entry of portfolio.career) {
		ctx = drawLines(
			ctx,
			[`${entry.version}  ·  ${entry.period}`],
			{
				size: 9,
				font: fontBold,
				color: colors.amber,
				lineHeight: 14,
			},
		);
		ctx = drawLines(ctx, [entry.title], {
			size: 11,
			font: fontBold,
			color: colors.primary,
			lineHeight: 16,
		});
		ctx = drawParagraph(ctx, entry.description, { size: 9 });
		ctx = { ...ctx, y: ctx.y - 8 };
	}

	ctx = drawSectionTitle(ctx, labels.projects);
	for (const project of portfolio.projects) {
		ctx = drawLines(
			ctx,
			[`${labels.added}  ${project.version}  ${project.name}`],
			{
				size: 10,
				font: fontBold,
				color: colors.green,
				lineHeight: 15,
			},
		);
		ctx = drawParagraph(ctx, project.summary, { size: 9 });
		ctx = { ...ctx, y: ctx.y - 6 };
	}

	ctx = drawSectionTitle(ctx, labels.dependencies);
	for (const category of portfolio.stack) {
		const items = category.items.join(", ");
		ctx = drawLines(ctx, [`${category.label}: ${items}`], {
			size: 9,
			font: fontRegular,
			color: colors.secondary,
			lineHeight: 14,
		});
	}

	ctx = drawSectionTitle(ctx, labels.contact);
	const contactLines = [
		`Email: ${extractContactValue(portfolio.contact.email)}`,
		`GitHub: ${portfolio.contact.github}`,
		`LinkedIn: ${portfolio.contact.linkedin}`,
		`WhatsApp: ${portfolio.contact.whatsapp}`,
	];

	ctx = drawLines(ctx, contactLines, {
		size: 9,
		font: fontRegular,
		color: colors.secondary,
		lineHeight: 14,
	});

	const bytes = await pdfDoc.save();

	return {
		bytes,
		filename: buildFilename(portfolio, labels),
	};
}

export function downloadPdf(bytes: Uint8Array, filename: string): void {
	const blob = new Blob([bytes], { type: "application/pdf" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
