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

	const rotation = $derived(rotationBySlug[service.slug] ?? "-1deg");
	const tapeStyle = $derived(tapeBySlug[service.slug] ?? "left: 1.6rem; rotate: -4deg;");
</script>

<Card.Root
	style={`--service-visual: ${service.visual}; --polaroid-rotate: ${rotation};`}
	class="service-card group relative overflow-visible rounded-none bg-transparent p-0 shadow-none ring-0"
>
	<div class="polaroid-card relative bg-surface p-3 pb-7 shadow-xl shadow-rosewood/10 transition duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:shadow-rosewood/15 focus-within:-translate-y-2 focus-within:rotate-0 focus-within:shadow-2xl focus-within:shadow-rosewood/15">
		<div class="polaroid-tape" style={tapeStyle} aria-hidden="true"></div>
		<div
			role="img"
			aria-label={service.imageAlt}
			class="polaroid-photo relative h-64 overflow-hidden bg-sand/40"
		>
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.48),transparent_28%),linear-gradient(to_top,rgba(43,37,32,0.18),transparent_58%)]"></div>
			<div class="absolute bottom-4 left-4 rounded-full bg-cream/80 px-3 py-1 text-xs font-medium text-rosewood backdrop-blur">
				Captured moment
			</div>
		</div>
		<Card.Header class="px-2 pt-6 text-center">
			<Card.Title class="font-display text-3xl font-semibold text-foreground">{service.title}</Card.Title>
			<Card.Description class="mt-2 font-display text-2xl leading-none text-clay">
				{service.description}
			</Card.Description>
		</Card.Header>
		<Card.Content class="px-2 pt-2 text-center">
			<a
				href="/services"
				class="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-moss underline-offset-4 transition hover:text-rosewood hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
			>
				More details
				<ArrowRightIcon class="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
			</a>
		</Card.Content>
	</div>
</Card.Root>

<style>
	:global(.service-card) {
		filter: drop-shadow(0 1.2rem 1.8rem rgba(111, 78, 69, 0.1));
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
		background:
			linear-gradient(110deg, rgba(255, 255, 255, 0.5), transparent 36%),
			linear-gradient(#fffdf9, #fbf8f3);
	}

	.polaroid-tape {
		position: absolute;
		top: -0.85rem;
		z-index: 5;
		height: 1.6rem;
		width: 5.75rem;
		border: 1px solid rgba(216, 195, 170, 0.62);
		background: rgba(251, 248, 243, 0.68);
		box-shadow: 0 0.45rem 1rem rgba(111, 78, 69, 0.08);
		backdrop-filter: blur(4px);
	}

	.polaroid-photo {
		background: var(--service-visual);
	}

	@media (prefers-reduced-motion: reduce) {
		.polaroid-card {
			transform: none;
			transition: none;
		}
	}
</style>
