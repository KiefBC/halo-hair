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
			"radial-gradient(circle at 24% 22%, rgba(241,236,223,0.66), transparent 26%), linear-gradient(145deg, #5a4237, #9f7258 45%, #6f7f5f)"
	},
	{
		title: "Grey Transformations",
		slug: "grey-transformations",
		description: "Dolor sit",
		highlights: ["Grey transitions", "Colour planning", "Natural grow-out"],
		image: "/images/placeholders/grey-transformations.jpg",
		imageAlt: "Placeholder for grey transformation salon result",
		visual:
			"radial-gradient(circle at 50% 28%, rgba(241,236,223,0.82), transparent 30%), linear-gradient(145deg, #43533a, #6f7f5f 52%, #c8c5ad)"
	},
	{
		title: "Keratin Smoothing Treatment",
		slug: "keratin-smoothing-treatment",
		description: "Amet lorem",
		highlights: ["Cezanne Classic", "Smoothing", "Frizz control"],
		image: "/images/placeholders/keratin-smoothing-treatment.jpg",
		imageAlt: "Placeholder for keratin smoothing treatment result",
		visual:
			"radial-gradient(circle at 72% 18%, rgba(241,236,223,0.72), transparent 28%), linear-gradient(135deg, #c8c5ad, #9f7258 48%, #43533a)"
	}
];
