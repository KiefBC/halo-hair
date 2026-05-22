import type { Service } from "$lib/types/service";

export const services: Service[] = [
	{
		title: "Colouring",
		slug: "colouring",
		description: "Lorem ipsum",
		highlights: ["Balayage", "Foilyage", "Highlights"],
		image: "/images/placeholders/colouring.jpg",
		imageAlt: "Placeholder for rich hair colour service",
		visual:
			"radial-gradient(circle at 24% 22%, rgba(216,211,194,0.58), transparent 26%), linear-gradient(145deg, #46382e, #7f634a 45%, #556f59)"
	},
	{
		title: "Grey Transformations",
		slug: "grey-transformations",
		description: "Dolor sit",
		highlights: ["Grey transitions", "Colour planning", "Natural grow-out"],
		image: "/images/placeholders/grey-transformations.jpg",
		imageAlt: "Placeholder for grey transformation salon result",
		visual:
			"radial-gradient(circle at 50% 28%, rgba(210,173,99,0.24), transparent 30%), linear-gradient(145deg, #2f4738, #556f59 52%, #b5ad94)"
	},
	{
		title: "Keratin Smoothing Treatment",
		slug: "keratin-smoothing-treatment",
		description: "Amet lorem",
		highlights: ["Cezanne Classic", "Smoothing", "Frizz control"],
		image: "/images/placeholders/keratin-smoothing-treatment.jpg",
		imageAlt: "Placeholder for keratin smoothing treatment result",
		visual:
			"radial-gradient(circle at 72% 18%, rgba(216,211,194,0.56), transparent 28%), linear-gradient(135deg, #b5ad94, #7f634a 48%, #2f4738)"
	}
];
