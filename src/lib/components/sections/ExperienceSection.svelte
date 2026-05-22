<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "$lib/components/ui/button";
	import salonUpdatesMarkdown from "$lib/content/salon-updates.md?raw";
	import { markdownToHtml } from "$lib/content/markdown";

	const newSalonSpaceMarker = "## Lorem Ipsum Salon Space";
	const [awardMarkdown, newSalonSpaceMarkdown = ""] = salonUpdatesMarkdown.split(newSalonSpaceMarker);
	const awardUpdatesHtml = markdownToHtml(awardMarkdown);
	const newSalonSpaceHtml = markdownToHtml(`${newSalonSpaceMarker}${newSalonSpaceMarkdown}`);

	const salonPolaroids = [
		{
			title: "Lorem Ipsum",
			subtitle: "dolor sit",
			alt: "Lorem ipsum placeholder graphic",
			visual:
				"radial-gradient(circle at 50% 28%, rgba(241,236,223,0.82), transparent 30%), linear-gradient(145deg, #43533a, #6f7f5f 52%, #c8c5ad)",
			style: "--x: 4%; --y: 3%; --r: -7deg; --z: 2;",
			marker: "Award"
		},
		{
			title: "Dolor Sit Amet",
			subtitle: "consectetur",
			alt: "Dolor sit amet placeholder graphic",
			visual:
				"radial-gradient(circle at 72% 18%, rgba(241,236,223,0.72), transparent 28%), linear-gradient(135deg, #c8c5ad, #9f7258 48%, #43533a)",
			style: "--x: 43%; --y: 0%; --r: 5deg; --z: 3;",
			marker: "Salon"
		},
		{
			title: "Consectetur",
			subtitle: "adipiscing elit",
			alt: "Consectetur placeholder graphic",
			visual:
				"radial-gradient(circle at 24% 22%, rgba(241,236,223,0.66), transparent 26%), linear-gradient(145deg, #5a4237, #9f7258 45%, #6f7f5f)",
			style: "--x: 13%; --y: 39%; --r: 4deg; --z: 4;",
			marker: "Space"
		},
		{
			title: "Adipiscing Elit",
			subtitle: "lorem ipsum",
			alt: "Adipiscing elit placeholder graphic",
			visual:
				"radial-gradient(circle at 76% 24%, rgba(235,229,214,0.74), transparent 30%), linear-gradient(135deg, #43533a, #c8c5ad 48%, #5a4237)",
			style: "--x: 55%; --y: 44%; --r: -4deg; --z: 5;",
			marker: "Detail"
		}
	];

	type SalonPolaroid = (typeof salonPolaroids)[number];

	let activePolaroid = $state<SalonPolaroid | null>(null);

	function openPolaroid(polaroid: SalonPolaroid) {
		activePolaroid = polaroid;
	}

	function closePolaroid() {
		activePolaroid = null;
	}

	function handlePolaroidKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			closePolaroid();
		}
	}
</script>

<svelte:window onkeydown={handlePolaroidKeydown} />

<section class="relative overflow-hidden bg-cream py-16 md:py-24">
	<div class="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_0%_35%,rgba(111,127,95,0.18),transparent_42%)]"></div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
			<div class="polaroid-pile" aria-label="Salon award and new salon space placeholders">
				{#each salonPolaroids as polaroid}
					<button
						type="button"
						aria-label={`Enlarge ${polaroid.alt}`}
						onclick={() => openPolaroid(polaroid)}
						class="salon-polaroid cursor-zoom-in border-0 bg-white p-3 pb-5 text-left shadow-xl shadow-rosewood/15 outline-none transition duration-300 hover:shadow-2xl hover:shadow-rosewood/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
						style={`${polaroid.style} --placeholder-visual: ${polaroid.visual};`}
					>
						<div class="placeholder-photo relative overflow-hidden bg-cream" role="img" aria-label={polaroid.alt}>
							<div class="placeholder-photo-grid" aria-hidden="true"></div>
							<span class="placeholder-photo-label">{polaroid.marker}</span>
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

		<div class="mt-20 rounded-3xl border border-sand/70 bg-background p-6 md:p-8 lg:mt-24">
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

{#if activePolaroid}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
		<button
			type="button"
			aria-label="Close enlarged polaroid"
			class="absolute inset-0 cursor-zoom-out bg-foreground/70 backdrop-blur-sm"
			onclick={closePolaroid}
		></button>
		<div
			role="dialog"
			aria-modal="true"
			aria-label={activePolaroid.alt}
			tabindex="-1"
			class="expanded-polaroid relative z-10 bg-white p-4 pb-7 text-left shadow-2xl shadow-foreground/35 outline-none"
			style={`--placeholder-visual: ${activePolaroid.visual};`}
		>
			<button
				type="button"
				aria-label="Close enlarged polaroid"
				class="absolute right-3 top-3 z-20 rounded-full border border-cream/40 bg-foreground/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur transition hover:bg-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
				onclick={closePolaroid}
			>
				Close
			</button>
			<div class="placeholder-photo expanded-polaroid-photo relative overflow-hidden bg-cream" role="img" aria-label={activePolaroid.alt}>
				<div class="placeholder-photo-grid" aria-hidden="true"></div>
				<span class="placeholder-photo-label">{activePolaroid.marker}</span>
			</div>
			<div class="pt-5 text-center">
				<p class="font-display text-4xl font-semibold leading-none text-rosewood">{activePolaroid.title}</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">{activePolaroid.subtitle}</p>
			</div>
		</div>
	</div>
{/if}

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

	.placeholder-photo {
		display: grid;
		place-items: center;
		background: var(--placeholder-visual);
	}

	.placeholder-photo::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(125deg, rgba(241, 236, 223, 0.42), transparent 36%);
	}

	.placeholder-photo-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(241, 236, 223, 0.18) 1px, transparent 1px),
			linear-gradient(90deg, rgba(241, 236, 223, 0.18) 1px, transparent 1px);
		background-size: 2.1rem 2.1rem;
		mix-blend-mode: soft-light;
		opacity: 0.7;
	}

	.placeholder-photo-label {
		position: relative;
		z-index: 1;
		border: 1px solid rgba(241, 236, 223, 0.46);
		background: rgba(37, 41, 31, 0.24);
		padding: 0.45rem 0.9rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--salon-cream);
		backdrop-filter: blur(6px);
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

	.expanded-polaroid {
		width: min(92vw, 38rem);
		max-height: calc(100vh - 2rem);
		overflow: auto;
		animation: polaroid-lightbox-in 180ms ease-out;
	}

	.expanded-polaroid-photo {
		aspect-ratio: 4 / 5;
		width: min(100%, 57.6vh, 33.6rem);
		margin-inline: auto;
		max-height: min(72vh, 42rem);
	}

	@keyframes polaroid-lightbox-in {
		from {
			opacity: 0;
			transform: translateY(1rem) scale(0.94) rotate(var(--r, -2deg));
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1) rotate(0deg);
		}
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
