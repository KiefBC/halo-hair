import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { services } from "$lib/data/services";

export const load: PageLoad = ({ params }) => {
	const service = services.find((item) => item.slug === params.slug);

	if (!service) {
		throw error(404, "Service not found");
	}

	return { service };
};
