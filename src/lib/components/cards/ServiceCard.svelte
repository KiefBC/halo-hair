<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import * as Card from "$lib/components/ui/card";
	import type { Service } from "$lib/types/service";

	let { service }: { service: Service } = $props();

	const rotationBySlug: Record<string, string> = {
		colouring: "-2.25deg",
		"grey-transformations": "1.5deg",
		"keratin-smoothing-treatment": "-1deg"
	};

	const tapeBySlug: Record<string, string> = {
		colouring: "left: 1.6rem; rotate: -5deg;",
		"grey-transformations": "left: 50%; translate: -50% 0; rotate: 2deg;",
		"keratin-smoothing-treatment": "right: 1.6rem; rotate: 5deg;"
	};

	const labelBySlug: Record<string, string> = {
		colouring: "Colour",
		"grey-transformations": "Grey",
		"keratin-smoothing-treatment": "Smooth"
	};

	const rotation = $derived(rotationBySlug[service.slug] ?? "-1deg");
	const tapeStyle = $derived(tapeBySlug[service.slug] ?? "left: 1.6rem; rotate: -4deg;");
	const photoLabel = $derived(labelBySlug[service.slug] ?? service.title);
</script>

<Card.Root
	style={`--service-visual: ${service.visual}; --polaroid-rotate: ${rotation};`}
	class="service-card group relative overflow-visible rounded-none bg-transparent p-0 shadow-none ring-0"
>
	<div class="polaroid-card relative bg-white p-3 pb-6 shadow-xl shadow-rosewood/10 transition duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:shadow-rosewood/15 focus-within:-translate-y-2 focus-within:rotate-0 focus-within:shadow-2xl focus-within:shadow-rosewood/15 md:pb-7">
		<div class="polaroid-tape" style={tapeStyle} aria-hidden="true"></div>
		<div
			role="img"
			aria-label={service.imageAlt}
			class="polaroid-photo relative h-52 overflow-hidden bg-sand/40 md:h-56 lg:h-60"
		>
			<div class="polaroid-photo-grid" aria-hidden="true"></div>
			<span class="polaroid-photo-label">{photoLabel}</span>
		</div>
		<Card.Header class="px-2 pt-5 text-center md:pt-6">
			<Card.Title class="font-display text-2xl font-semibold text-foreground md:text-3xl">{service.title}</Card.Title>
			<Card.Description class="mt-2 font-display text-xl leading-none text-clay md:text-2xl">
				{service.description}
			</Card.Description>
		</Card.Header>
		<Card.Content class="px-2 pt-2 text-center">
			<a
				href="/services"
				class="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-moss underline-offset-4 transition hover:text-rosewood hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-white"
			>
				More details
				<ArrowRightIcon class="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
			</a>
		</Card.Content>
	</div>
</Card.Root>

<style>
	:global(.service-card) {
		filter: drop-shadow(0 1.2rem 1.8rem rgba(70, 56, 46, 0.12));
	}

	.polaroid-card {
		position: relative;
		isolation: isolate;
		transform: rotate(var(--polaroid-rotate));
		clip-path: polygon(0 0, 100% 0, 100% 96%, 97% 100%, 0 100%);
	}

	.polaroid-card::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		background: #fff;
	}

	.polaroid-tape {
		position: absolute;
		top: -0.85rem;
		z-index: 5;
		height: 1.6rem;
		width: 5.75rem;
		border: 1px solid rgba(170, 180, 157, 0.78);
		background: rgba(216, 211, 194, 0.74);
		box-shadow: 0 0.45rem 1rem rgba(70, 56, 46, 0.08);
		backdrop-filter: blur(4px);
	}

	.polaroid-photo {
		display: grid;
		place-items: center;
		background: var(--service-visual);
	}

	.polaroid-photo::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(125deg, rgba(216, 211, 194, 0.38), transparent 36%);
	}

	.polaroid-photo-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(216, 211, 194, 0.16) 1px, transparent 1px),
			linear-gradient(90deg, rgba(216, 211, 194, 0.16) 1px, transparent 1px);
		background-size: 2.1rem 2.1rem;
		mix-blend-mode: soft-light;
		opacity: 0.7;
	}

	.polaroid-photo-label {
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

	@media (prefers-reduced-motion: reduce) {
		.polaroid-card {
			transform: none;
			transition: none;
		}
	}
</style>
