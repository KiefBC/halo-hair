import type { SalonLocation } from "$lib/types/location";

export const location: SalonLocation = {
	title: "A salon space in Langford",
	description: "Appointments are hosted in a calm salon setting in Langford, BC.",
	address: "Langford, BC",
	coordinates: {
		lng: -123.495,
		lat: 48.447
	},
	directionsUrl: "https://www.google.com/maps/search/?api=1&query=Langford%2C%20BC",
	notes: [
		"By appointment only",
		"Exact address and arrival details can be confirmed when booking",
		"Easy directions available through Google Maps"
	]
};
