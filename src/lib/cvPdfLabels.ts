import type { Locale } from "../types/portfolio";

export interface CvPdfLabels {
	releaseNote: string;
	releaseDate: string;
	about: string;
	experience: string;
	projects: string;
	dependencies: string;
	contact: string;
	added: string;
	exportError: string;
	filenamePrefix: string;
}

const labels: Record<Locale, CvPdfLabels> = {
	es: {
		releaseNote: "RELEASE NOTE",
		releaseDate: "Fecha de release",
		about: "Descripción del release",
		experience: "Historial de releases",
		projects: "Changelog",
		dependencies: "Dependencias",
		contact: "Contacto",
		added: "+ added",
		exportError: "No se pudo generar el PDF. Intenta de nuevo.",
		filenamePrefix: "cv-release-note",
	},
	en: {
		releaseNote: "RELEASE NOTE",
		releaseDate: "Release date",
		about: "Release description",
		experience: "Release history",
		projects: "Changelog",
		dependencies: "Dependencies",
		contact: "Contact",
		added: "+ added",
		exportError: "Could not generate the PDF. Please try again.",
		filenamePrefix: "cv-release-note",
	},
};

export function getCvPdfLabels(locale: Locale): CvPdfLabels {
	return labels[locale];
}
