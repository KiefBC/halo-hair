import type { Service } from "$lib/types/service";

export const services: Service[] = [
	{
		title: "Colouring",
		slug: "colouring",
		description: "Lorem ipsum",
		price: "Consultation based",
		duration: "2-4+ hours",
		detail:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vitae viverra facilisis, lectus sem fermentum purus, vitae lacinia mi arcu non turpis.",
		highlights: ["Balayage", "Foilyage", "Highlights"],
		includes: ["Custom colour plan", "Gloss or toner guidance", "Home-care notes"],
		image: "/images/placeholders/colouring.jpg",
		imageAlt: "Placeholder for rich hair colour service",
		visual:
			"radial-gradient(circle at 24% 22%, rgba(216,211,194,0.58), transparent 26%), linear-gradient(145deg, #46382e, #7f634a 45%, #556f59)"
	},
	{
		title: "Grey Transformations",
		slug: "grey-transformations",
		description: "Dolor sit",
		price: "Consultation required",
		duration: "Multi-session plan",
		detail:
			"Dolor sit amet, consectetur adipiscing elit. Praesent suscipit, magna at faucibus mollis, sapien velit aliquam lorem, sed posuere ipsum neque vitae justo.",
		highlights: ["Grey transitions", "Colour planning", "Natural grow-out"],
		includes: ["Transition planning", "Tone and grow-out guidance", "Maintenance rhythm"],
		image: "/images/placeholders/grey-transformations.jpg",
		imageAlt: "Placeholder for grey transformation salon result",
		visual:
			"radial-gradient(circle at 50% 28%, rgba(210,173,99,0.24), transparent 30%), linear-gradient(145deg, #2f4738, #556f59 52%, #b5ad94)"
	},
	{
		title: "Keratin Smoothing Treatment",
		slug: "keratin-smoothing-treatment",
		description: "Amet lorem",
		price: "Consultation based",
		duration: "2-3 hours",
		detail:
			"Amet lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit lorem at eros dictum, vitae facilisis sem laoreet.",
		highlights: ["Cezanne Classic", "Smoothing", "Frizz control"],
		includes: ["Smoothness consultation", "Cezanne Classic treatment", "Aftercare guidance"],
		image: "/images/placeholders/keratin-smoothing-treatment.jpg",
		imageAlt: "Placeholder for keratin smoothing treatment result",
		visual:
			"radial-gradient(circle at 72% 18%, rgba(216,211,194,0.56), transparent 28%), linear-gradient(135deg, #b5ad94, #7f634a 48%, #2f4738)"
	}
];
