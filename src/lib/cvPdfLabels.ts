import type { Locale } from "../types/portfolio";

export interface CvPdfLabels {
	profile: string;
	experience: string;
	projects: string;
	skills: string;
	contact: string;
	exportError: string;
	filenamePrefix: string;
}

const labels: Record<Locale, CvPdfLabels> = {
	es: {
		profile: "Perfil profesional",
		experience: "Experiencia",
		projects: "Proyectos destacados",
		skills: "Habilidades técnicas",
		contact: "Contacto",
		exportError: "No se pudo generar el PDF. Intenta de nuevo.",
		filenamePrefix: "cv",
	},
	en: {
		profile: "Professional profile",
		experience: "Experience",
		projects: "Selected projects",
		skills: "Technical skills",
		contact: "Contact",
		exportError: "Could not generate the PDF. Please try again.",
		filenamePrefix: "cv",
	},
};

export function getCvPdfLabels(locale: Locale): CvPdfLabels {
	return labels[locale];
}
