<script lang="ts">
	import BookingButton from "$lib/components/booking/BookingButton.svelte";
	import { Button } from "$lib/components/ui/button";
	import aboutMarkdown from "$lib/content/about.md?raw";
	import { markdownSectionHtml } from "$lib/content/markdown";

	const aboutJackyHtml = markdownSectionHtml(aboutMarkdown, "About Jacky");
	const aboutJackyExtraHtml = markdownSectionHtml(aboutMarkdown, "About Jacky Extra");
	const aboutSalonHtml = markdownSectionHtml(aboutMarkdown, "About the Salon");
	const aboutExperienceHtml = markdownSectionHtml(aboutMarkdown, "About my Experience");
	const aboutContactHtml = markdownSectionHtml(aboutMarkdown, "Get in Touch");

	const aboutPolaroids = {
		jacky: {
			title: "Lorem ipsum",
			subtitle: "Dolor sit",
			marker: "Lorem",
			alt: "Placeholder portrait for Jacky",
			visual:
				"radial-gradient(circle at 24% 22%, rgba(216, 211, 194, 0.58), transparent 26%), linear-gradient(145deg, #46382e, #7f634a 45%, #556f59)"
		},
		salon: {
			title: "Dolor sit amet",
			subtitle: "Consectetur",
			marker: "Ipsum",
			alt: "Placeholder for the Halo Hair Studio salon space",
			visual:
				"radial-gradient(circle at 72% 18%, rgba(216, 211, 194, 0.56), transparent 28%), linear-gradient(135deg, #b5ad94, #7f634a 48%, #2f4738)"
		},
		experience: {
			title: "Consectetur",
			subtitle: "Adipiscing",
			marker: "Amet",
			alt: "Placeholder for Jacky's hair experience",
			visual:
				"radial-gradient(circle at 50% 28%, rgba(210, 173, 99, 0.24), transparent 30%), linear-gradient(145deg, #2f4738, #556f59 52%, #b5ad94)"
		}
	};

	type AboutPolaroid = (typeof aboutPolaroids)[keyof typeof aboutPolaroids];

	let activeAboutPolaroid = $state<AboutPolaroid | null>(null);

	function openAboutPolaroid(polaroid: AboutPolaroid) {
		activeAboutPolaroid = polaroid;
	}

	function closeAboutPolaroid() {
		activeAboutPolaroid = null;
	}

	function handleAboutPolaroidKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			closeAboutPolaroid();
		}
	}
</script>

<svelte:window onkeydown={handleAboutPolaroidKeydown} />

<svelte:head>
	<title>About | Halo Hair Studio</title>
	<meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
</svelte:head>

<section class="bg-background px-4 py-14 sm:px-6 md:py-16 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-8 lg:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
		<div>
			<h1 class="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">About Jacky</h1>
			<div class="about-copy mt-5 text-base leading-7 text-muted-foreground">
				{@html aboutJackyHtml}
			</div>
		</div>

		<button
			type="button"
			aria-label={`Enlarge ${aboutPolaroids.jacky.alt}`}
			onclick={() => openAboutPolaroid(aboutPolaroids.jacky)}
			class="about-polaroid block cursor-zoom-in rotate-2 border-0 bg-white p-4 pb-7 text-left shadow-2xl shadow-rosewood/15 outline-none transition duration-300 hover:shadow-2xl hover:shadow-rosewood/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
			style={`--about-placeholder-visual: ${aboutPolaroids.jacky.visual};`}
		>
			<div class="about-placeholder relative overflow-hidden" role="img" aria-label={aboutPolaroids.jacky.alt}>
				<div class="about-placeholder-grid" aria-hidden="true"></div>
				<span class="about-placeholder-label">{aboutPolaroids.jacky.marker}</span>
			</div>
			<div class="pt-4 text-center">
				<p class="font-display text-2xl font-semibold leading-none text-rosewood">{aboutPolaroids.jacky.title}</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">{aboutPolaroids.jacky.subtitle}</p>
			</div>
		</button>
	</div>

	<div class="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
		<div class="rounded-3xl border border-sand/70 bg-cream p-6 md:p-7">
			<div class="about-copy text-base leading-7 text-muted-foreground">
				{@html aboutJackyExtraHtml}
			</div>
		</div>
	</div>
</section>

<section class="bg-cream px-4 py-14 sm:px-6 md:py-16 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-8 lg:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
		<button
			type="button"
			aria-label={`Enlarge ${aboutPolaroids.salon.alt}`}
			onclick={() => openAboutPolaroid(aboutPolaroids.salon)}
			class="about-polaroid block cursor-zoom-in -rotate-2 border-0 bg-white p-4 pb-7 text-left shadow-2xl shadow-rosewood/15 outline-none transition duration-300 hover:shadow-2xl hover:shadow-rosewood/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
			style={`--about-placeholder-visual: ${aboutPolaroids.salon.visual};`}
		>
			<div class="about-placeholder relative overflow-hidden" role="img" aria-label={aboutPolaroids.salon.alt}>
				<div class="about-placeholder-grid" aria-hidden="true"></div>
				<span class="about-placeholder-label">{aboutPolaroids.salon.marker}</span>
			</div>
			<div class="pt-4 text-center">
				<p class="font-display text-2xl font-semibold leading-none text-rosewood">{aboutPolaroids.salon.title}</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">{aboutPolaroids.salon.subtitle}</p>
			</div>
		</button>

		<div>
			<h2 class="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">About the Salon</h2>
			<div class="about-copy mt-5 text-base leading-7 text-muted-foreground">
				{@html aboutSalonHtml}
			</div>
		</div>
	</div>
</section>

<section class="bg-background px-4 py-14 sm:px-6 md:py-16 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-8 lg:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
		<div>
			<h2 class="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">About my Experience</h2>
			<div class="about-copy mt-5 text-base leading-7 text-muted-foreground">
				{@html aboutExperienceHtml}
			</div>
		</div>

		<button
			type="button"
			aria-label={`Enlarge ${aboutPolaroids.experience.alt}`}
			onclick={() => openAboutPolaroid(aboutPolaroids.experience)}
			class="about-polaroid block cursor-zoom-in rotate-1 border-0 bg-white p-4 pb-7 text-left shadow-2xl shadow-rosewood/15 outline-none transition duration-300 hover:shadow-2xl hover:shadow-rosewood/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
			style={`--about-placeholder-visual: ${aboutPolaroids.experience.visual};`}
		>
			<div class="about-placeholder relative overflow-hidden" role="img" aria-label={aboutPolaroids.experience.alt}>
				<div class="about-placeholder-grid" aria-hidden="true"></div>
				<span class="about-placeholder-label">{aboutPolaroids.experience.marker}</span>
			</div>
			<div class="pt-4 text-center">
				<p class="font-display text-2xl font-semibold leading-none text-rosewood">{aboutPolaroids.experience.title}</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">{aboutPolaroids.experience.subtitle}</p>
			</div>
		</button>
	</div>
</section>

<section class="bg-background px-4 pb-14 sm:px-6 md:pb-16 lg:px-8">
	<div class="about-contact-card mx-auto max-w-4xl rounded-[2rem] border border-sand/70 bg-cream p-6 text-center shadow-xl shadow-rosewood/10 md:p-8">
		<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Say hello</p>
		<h2 class="mt-3 font-display text-4xl font-semibold leading-tight text-foreground">Get in Touch</h2>
		<div class="about-contact-copy mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
			{@html aboutContactHtml}
		</div>
		<div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<BookingButton label="Book through Vagaro" mobileLabel="Book through Vagaro" />
			<Button href="/#contact" variant="outline" size="lg" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
				Get in touch
			</Button>
		</div>
	</div>
</section>

{#if activeAboutPolaroid}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
		<button
			type="button"
			aria-label="Close enlarged polaroid"
			class="absolute inset-0 cursor-zoom-out bg-foreground/70 backdrop-blur-sm"
			onclick={closeAboutPolaroid}
		></button>
		<div
			role="dialog"
			aria-modal="true"
			aria-label={activeAboutPolaroid.alt}
			tabindex="-1"
			class="expanded-about-polaroid relative z-10 bg-white p-4 pb-7 text-left shadow-2xl shadow-foreground/35 outline-none"
			style={`--about-placeholder-visual: ${activeAboutPolaroid.visual};`}
		>
			<button
				type="button"
				aria-label="Close enlarged polaroid"
				class="absolute right-3 top-3 z-20 rounded-full border border-cream/40 bg-foreground/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur transition hover:bg-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-white"
				onclick={closeAboutPolaroid}
			>
				Close
			</button>
			<div class="about-placeholder expanded-about-polaroid-photo relative overflow-hidden" role="img" aria-label={activeAboutPolaroid.alt}>
				<div class="about-placeholder-grid" aria-hidden="true"></div>
				<span class="about-placeholder-label">{activeAboutPolaroid.marker}</span>
			</div>
			<div class="pt-5 text-center">
				<p class="font-display text-4xl font-semibold leading-none text-rosewood">{activeAboutPolaroid.title}</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">{activeAboutPolaroid.subtitle}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.about-copy :global(p + p),
	.about-copy :global(p + blockquote),
	.about-copy :global(blockquote + p) {
		margin-top: 1rem;
	}

	.about-contact-copy :global(p) {
		margin: 0;
	}

	.about-copy :global(strong) {
		font-weight: 700;
		color: var(--salon-moss);
	}

	.about-copy :global(blockquote) {
		border-left: 4px solid color-mix(in srgb, var(--salon-sage) 60%, transparent);
		padding-left: 1rem;
		font-family: var(--font-display);
		font-size: 1.5rem;
		line-height: 1.1;
		color: var(--salon-rosewood);
	}

	.about-polaroid {
		position: relative;
		isolation: isolate;
		width: min(82vw, 20rem);
		margin-inline: auto;
		transform-origin: center;
	}

	.about-polaroid:hover,
	.about-polaroid:focus-visible {
		transform: translateY(-1rem) scale(1.06) rotate(0deg);
	}

	.about-polaroid::before {
		content: "";
		position: absolute;
		top: -0.8rem;
		left: 50%;
		z-index: 2;
		height: 1.2rem;
		width: 4.75rem;
		translate: -50% 0;
		rotate: -2deg;
		border: 1px solid rgba(170, 180, 157, 0.78);
		background: rgba(216, 211, 194, 0.74);
		box-shadow: 0 0.45rem 1rem rgba(90, 66, 55, 0.08);
		backdrop-filter: blur(4px);
	}

	.about-placeholder {
		display: grid;
		aspect-ratio: 4 / 5;
		place-items: center;
		background: var(--about-placeholder-visual);
	}

	.about-placeholder::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(125deg, rgba(216, 211, 194, 0.38), transparent 36%);
	}

	.about-placeholder-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(216, 211, 194, 0.16) 1px, transparent 1px),
			linear-gradient(90deg, rgba(216, 211, 194, 0.16) 1px, transparent 1px);
		background-size: 2.1rem 2.1rem;
		mix-blend-mode: soft-light;
		opacity: 0.7;
	}

	.about-placeholder-label {
		position: relative;
		z-index: 1;
		border: 1px solid rgba(216, 211, 194, 0.46);
		background: rgba(37, 41, 31, 0.24);
		padding: 0.45rem 0.9rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--salon-cream);
		backdrop-filter: blur(6px);
	}

	.expanded-about-polaroid {
		width: min(92vw, 38rem);
		max-height: calc(100vh - 2rem);
		overflow: auto;
		animation: about-polaroid-lightbox-in 180ms ease-out;
	}

	.expanded-about-polaroid-photo {
		width: min(100%, 57.6vh, 33.6rem);
		margin-inline: auto;
		max-height: min(72vh, 42rem);
	}

	@media (min-width: 768px) {
		.about-polaroid {
			width: min(100%, 19rem);
		}

		.about-polaroid::before {
			height: 1.15rem;
			width: 4.75rem;
		}
	}

	@keyframes about-polaroid-lightbox-in {
		from {
			opacity: 0;
			transform: translateY(1rem) scale(0.94) rotate(-2deg);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1) rotate(0deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.about-polaroid {
			transition: none;
		}

		.about-polaroid:hover,
		.about-polaroid:focus-visible {
			transform: none;
		}
	}
</style>
