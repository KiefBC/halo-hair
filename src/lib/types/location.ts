export type SalonLocation = {
	title: string;
	description: string;
	address: string;
	coordinates: {
		lng: number;
		lat: number;
	};
	directionsUrl: string;
	notes: string[];
};
