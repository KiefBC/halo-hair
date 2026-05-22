import type { Service } from "$lib/types/service";

export const services: Service[] = [
	{
		title: "Colouring",
		slug: "colouring",
		description: "Rich Colours",
		highlights: ["Balayage", "Foilyage", "Highlights"],
		image: "/images/placeholders/colouring.jpg",
		imageAlt: "Placeholder for rich hair colour service",
		visual:
			"radial-gradient(circle at 28% 20%, rgba(255,253,249,0.86), transparent 28%), linear-gradient(135deg, #6f4e45, #b98263 48%, #d8c3aa)"
	},
	{
		title: "Grey Transformations",
		slug: "grey-transformations",
		description: "Jacky's speciality",
		highlights: ["Grey transitions", "Colour planning", "Natural grow-out"],
		image: "/images/placeholders/grey-transformations.jpg",
		imageAlt: "Placeholder for grey transformation salon result",
		visual:
			"radial-gradient(circle at 70% 18%, rgba(251,248,243,0.9), transparent 32%), linear-gradient(135deg, #efe4d8, #8a9a7b 52%, #556b4e)"
	},
	{
		title: "Keratin Smoothing Treatment",
		slug: "keratin-smoothing-treatment",
		description: "A new service!",
		highlights: ["Cezanne Classic", "Smoothing", "Frizz control"],
		image: "/images/placeholders/keratin-smoothing-treatment.jpg",
		imageAlt: "Placeholder for keratin smoothing treatment result",
		visual:
			"radial-gradient(circle at 76% 24%, rgba(251,248,243,0.9), transparent 30%), linear-gradient(135deg, #d8c3aa, #b98263 44%, #556b4e)"
	}
];
