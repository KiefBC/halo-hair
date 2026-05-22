<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import BookingButton from "$lib/components/booking/BookingButton.svelte";
	import { Button } from "$lib/components/ui/button";
	import homeMarkdown from "$lib/content/home.md?raw";
	import { markdownSectionHtml } from "$lib/content/markdown";

	const heroHtml = markdownSectionHtml(homeMarkdown, "Hero");
</script>

<section class="relative isolate overflow-hidden bg-background">
	<div class="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_18%_18%,rgba(47,71,56,0.28),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(210,173,99,0.18),transparent_30%),linear-gradient(180deg,rgba(216,211,194,0.72),rgba(203,211,192,0))]"></div>
	<div class="hero-aura-field pointer-events-none absolute inset-0 z-0" aria-hidden="true">
		<span class="hero-aura-ring"></span>
		<span class="hero-aura-orb hero-aura-orb-one"></span>
		<span class="hero-aura-orb hero-aura-orb-two"></span>
		<span class="hero-aura-orb hero-aura-orb-three"></span>
	</div>
	<div class="hero-aura-fade pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16" aria-hidden="true"></div>
	<div class="relative z-10 mx-auto max-w-5xl px-4 pb-12 pt-16 text-center sm:px-6 md:pb-16 md:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
		<h1 class="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-6xl">
			Halo Hair Studio
		</h1>
		<div class="hero-copy mx-auto mt-5 max-w-xl font-display text-2xl font-medium leading-tight text-rosewood md:text-3xl">
			{@html heroHtml}
		</div>
		<div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
				<BookingButton label="Book through Vagaro" mobileLabel="Book through Vagaro" />
				<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-cream text-moss hover:bg-sage/10">
					Explore Services
					<ArrowRightIcon class="size-4" aria-hidden="true" />
				</Button>
		</div>
	</div>
</section>

<style>
	.hero-aura-field {
		opacity: 0.76;
		filter: blur(0.2px);
		mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 74%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 74%, transparent 100%);
	}

	.hero-aura-fade {
		background: linear-gradient(180deg, rgba(203, 211, 192, 0), var(--salon-cream));
		opacity: 0.72;
	}

	.hero-aura-ring {
		position: absolute;
		left: 50%;
		top: 46%;
		width: min(74vw, 44rem);
		aspect-ratio: 1;
		border-radius: 9999px;
		background:
			radial-gradient(circle, transparent 0 44%, rgba(210, 173, 99, 0.26) 46% 49%, transparent 57%),
			radial-gradient(circle, rgba(216, 211, 194, 0.2), transparent 60%);
		transform: translate(-50%, -50%);
		animation: hero-aura-breathe 14s ease-in-out infinite;
	}

	.hero-aura-orb {
		position: absolute;
		width: var(--aura-size);
		aspect-ratio: 1;
		border-radius: 9999px;
		background: radial-gradient(circle, rgba(231, 224, 205, 0.48), rgba(210, 173, 99, 0.2) 38%, transparent 72%);
		mix-blend-mode: screen;
		transform: translate3d(0, 0, 0);
		animation: hero-aura-drift var(--aura-duration) ease-in-out infinite alternate;
	}

	.hero-aura-orb-one {
		--aura-size: 13rem;
		--aura-duration: 18s;
		left: 18%;
		top: 18%;
	}

	.hero-aura-orb-two {
		--aura-size: 9rem;
		--aura-duration: 22s;
		right: 20%;
		top: 28%;
		animation-delay: -7s;
	}

	.hero-aura-orb-three {
		--aura-size: 11rem;
		--aura-duration: 20s;
		bottom: 18%;
		left: 44%;
		animation-delay: -11s;
	}

	@keyframes hero-aura-drift {
		from {
			opacity: 0.34;
			transform: translate3d(-0.75rem, 0.5rem, 0) scale(0.96);
		}
		to {
			opacity: 0.68;
			transform: translate3d(0.85rem, -0.75rem, 0) scale(1.08);
		}
	}

	@keyframes hero-aura-breathe {
		0%,
		100% {
			opacity: 0.48;
			transform: translate(-50%, -50%) scale(0.98) rotate(-1deg);
		}
		50% {
			opacity: 0.72;
			transform: translate(-50%, -50%) scale(1.04) rotate(1deg);
		}
	}

	.hero-copy :global(p) {
		margin: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-aura-ring,
		.hero-aura-orb {
			animation: none;
		}
	}
</style>
