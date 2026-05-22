import type { SalonLocation } from "$lib/types/location";

export const location: SalonLocation = {
	title: "A salon space in Langford",
	description: "Appointments are hosted in a calm, newly renovated salon space in Langford, BC.",
	address: "956 Shaw Avenue, Langford, BC",
	coordinates: {
		lng: -123.495,
		lat: 48.447
	},
	directionsUrl: "https://www.google.com/maps/search/?api=1&query=956%20Shaw%20Avenue%2C%20Langford%2C%20BC",
	notes: [
		"By appointment only",
		"New address: 956 Shaw Avenue",
		"Easy directions available through Google Maps"
	]
};
