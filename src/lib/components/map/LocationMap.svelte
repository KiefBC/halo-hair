<script lang="ts">
	import { onMount } from "svelte";
	import "maplibre-gl/dist/maplibre-gl.css";
	import { location } from "$lib/data/location";

	let mapContainer: HTMLDivElement | undefined;

	const neutralMapStyle = {
		version: 8 as const,
		sources: {
			cartoVoyager: {
				type: "raster" as const,
				tiles: ["https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"],
				tileSize: 256,
				attribution: "© OpenStreetMap contributors © CARTO"
			}
		},
		layers: [
			{
				id: "carto-voyager",
				type: "raster" as const,
				source: "cartoVoyager"
			}
		]
	};

	onMount(() => {
		let map: import("maplibre-gl").Map | undefined;
		let destroyed = false;

		void import("maplibre-gl").then(({ default: maplibregl }) => {
			if (destroyed || !mapContainer) return;

			map = new maplibregl.Map({
				container: mapContainer,
				style: neutralMapStyle,
				center: [location.coordinates.lng, location.coordinates.lat],
				zoom: 13,
				attributionControl: false
			});

			map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
			map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");

			const marker = document.createElement("div");
			marker.className = "rounded-full border-4 border-cream bg-moss shadow-lg";
			marker.style.width = "22px";
			marker.style.height = "22px";

			const popup = new maplibregl.Popup({ offset: 24 }).setHTML(`
				<strong>${location.title}</strong>
				<p>${location.address}</p>
			`);

			new maplibregl.Marker({ element: marker })
				.setLngLat([location.coordinates.lng, location.coordinates.lat])
				.setPopup(popup)
				.addTo(map);
		});

		return () => {
			destroyed = true;
			map?.remove();
		};
	});
</script>

<div
	bind:this={mapContainer}
	class="h-[360px] overflow-hidden rounded-3xl border border-sand/70 bg-sage/10 shadow-sm md:h-[440px]"
	aria-label={`Map showing ${location.address}`}
></div>
