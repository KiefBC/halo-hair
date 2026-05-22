<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { marked } from "marked";
	import { Button } from "$lib/components/ui/button";
	import salonUpdatesMarkdown from "$lib/content/salon-updates.md?raw";

	const newSalonSpaceMarker = "## NEW SALON SPACE";
	const [awardMarkdown, newSalonSpaceMarkdown = ""] = salonUpdatesMarkdown.split(newSalonSpaceMarker);
	const awardUpdatesHtml = marked.parse(awardMarkdown.trim(), { async: false }) as string;
	const newSalonSpaceHtml = marked.parse(`${newSalonSpaceMarker}${newSalonSpaceMarkdown}`.trim(), {
		async: false
	}) as string;

	const salonPolaroids = [
		{
			title: "Best Hair Salon",
			subtitle: "2024 + 2025",
			alt: "Best of the WestShore award graphic",
			image:
				"https://static.wixstatic.com/media/61506a_14ecad05834b4b23a281862fef9e8eee~mv2.png/v1/fill/w_276,h_276,al_c,q_85,enc_avif,quality_auto/Untitled%20design%20(32)_edited.png",
			style: "--x: 4%; --y: 3%; --r: -7deg; --z: 2;",
			contain: true
		},
		{
			title: "NEW SALON SPACE",
			subtitle: "newly renovated",
			alt: "Newly renovated Halo Hair Studio salon space",
			image:
				"https://static.wixstatic.com/media/61506a_ec493429f6b4410ba58f799f0e5f1513~mv2.jpeg/v1/fit/w_602,h_848,q_90,enc_avif,quality_auto/61506a_ec493429f6b4410ba58f799f0e5f1513~mv2.jpeg",
			style: "--x: 43%; --y: 0%; --r: 5deg; --z: 3;",
			contain: false
		},
		{
			title: "Halo Hair Studio",
			subtitle: "sleek and modern",
			alt: "Sleek and modern salon interior",
			image:
				"https://static.wixstatic.com/media/61506a_ea08505285094dc3975eac757016dde3~mv2.jpeg/v1/fit/w_604,h_848,q_90,enc_avif,quality_auto/61506a_ea08505285094dc3975eac757016dde3~mv2.jpeg",
			style: "--x: 13%; --y: 39%; --r: 4deg; --z: 4;",
			contain: false
		},
		{
			title: "Natural wood details",
			subtitle: "warm salon moments",
			alt: "Salon space with natural wood details",
			image:
				"https://static.wixstatic.com/media/61506a_772b86324c7d4d1a87e318a7a89ac1ee~mv2.jpg/v1/fit/w_604,h_903,q_90,enc_avif,quality_auto/61506a_772b86324c7d4d1a87e318a7a89ac1ee~mv2.jpg",
			style: "--x: 55%; --y: 44%; --r: -4deg; --z: 5;",
			contain: false
		}
	];
</script>

<section class="relative overflow-hidden bg-background py-16 md:py-24">
	<div class="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_0%_35%,rgba(138,154,123,0.18),transparent_42%)]"></div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
			<div class="polaroid-pile" aria-label="Salon award and new salon space photos">
				{#each salonPolaroids as polaroid}
					<button
						type="button"
						aria-label={`Enlarge ${polaroid.alt}`}
						class="salon-polaroid cursor-zoom-in border-0 bg-surface p-3 pb-5 text-left shadow-xl shadow-rosewood/15 outline-none transition duration-300 hover:shadow-2xl hover:shadow-rosewood/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
						style={polaroid.style}
					>
						<div class="overflow-hidden bg-cream">
							<img
								src={polaroid.image}
								alt={polaroid.alt}
								class={polaroid.contain ? "h-full w-full object-contain p-6" : "h-full w-full object-cover"}
							/>
						</div>
						<div class="pt-4 text-center">
							<p class="font-display text-2xl font-semibold leading-none text-rosewood">{polaroid.title}</p>
							<p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-clay">{polaroid.subtitle}</p>
						</div>
					</button>
				{/each}
			</div>

			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">From the salon</p>
				<div class="salon-updates mt-3 text-muted-foreground">
					{@html awardUpdatesHtml}
				</div>
			</div>
		</div>

		<div class="mt-10 rounded-3xl border border-sand/70 bg-cream p-6 md:p-8">
			<div class="salon-updates new-salon-space-copy text-muted-foreground">
				{@html newSalonSpaceHtml}
			</div>
			<Button href="/about" variant="outline" size="lg" class="mt-6 rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
				About the salon
				<ArrowRightIcon class="size-4" aria-hidden="true" />
			</Button>
		</div>
	</div>
</section>

<style>
	.polaroid-pile {
		position: relative;
		min-height: 34rem;
	}

	.salon-polaroid {
		position: absolute;
		left: var(--x);
		top: var(--y);
		z-index: var(--z);
		width: clamp(9.5rem, 38vw, 16.25rem);
		transform: rotate(var(--r));
		transform-origin: center;
	}

	.salon-polaroid > div:first-child {
		aspect-ratio: 4 / 5;
	}

	.salon-polaroid::before {
		content: "";
		position: absolute;
		top: -0.75rem;
		left: 50%;
		height: 1.35rem;
		width: 5.25rem;
		translate: -50% 0;
		rotate: -2deg;
		border: 1px solid rgba(216, 195, 170, 0.62);
		background: rgba(251, 248, 243, 0.68);
		box-shadow: 0 0.45rem 1rem rgba(111, 78, 69, 0.08);
		backdrop-filter: blur(4px);
	}

	.salon-polaroid:hover,
	.salon-polaroid:focus-visible {
		z-index: 20;
		transform: translateY(-1rem) scale(1.1) rotate(0deg);
	}

	.salon-updates :global(h2) {
		margin-top: 1.75rem;
		font-family: var(--font-display);
		font-size: clamp(2.5rem, 5vw, 3.75rem);
		font-weight: 600;
		line-height: 0.98;
		color: var(--foreground);
	}

	.salon-updates :global(h2:first-child) {
		margin-top: 0;
	}

	.salon-updates :global(p) {
		margin-top: 1.25rem;
		font-size: 1rem;
		line-height: 1.8;
	}

	.salon-updates :global(a) {
		font-weight: 700;
		color: var(--salon-moss);
		text-underline-offset: 0.25rem;
	}

	.salon-updates :global(a:hover) {
		color: var(--salon-rosewood);
		text-decoration: underline;
	}

	@media (max-width: 640px) {
		.polaroid-pile {
			min-height: 27rem;
		}

		.salon-polaroid {
			width: clamp(8.75rem, 42vw, 11.5rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.salon-polaroid {
			transition: none;
		}

		.salon-polaroid:hover,
		.salon-polaroid:focus-visible {
			transform: rotate(var(--r));
		}
	}
</style>
