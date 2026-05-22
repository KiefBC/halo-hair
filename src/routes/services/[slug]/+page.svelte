<script lang="ts">
	import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import BookingButton from "$lib/components/booking/BookingButton.svelte";
	import { Button } from "$lib/components/ui/button";

	let { data } = $props();

	const service = $derived(data.service);
</script>

<svelte:head>
	<title>{service.title} | Halo Hair Studio</title>
	<meta name="description" content={`${service.title} details, pricing, and appointment notes at Halo Hair Studio.`} />
</svelte:head>

<section class="bg-background px-4 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-10 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<a
			href="/services"
			class="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-moss underline-offset-4 transition hover:text-rosewood hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
		>
			<ArrowLeftIcon class="size-4" aria-hidden="true" />
			Back to services
		</a>

		<div class="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
			<div class="service-detail-polaroid bg-white p-4 pb-7 shadow-2xl shadow-rosewood/15" style={`--service-visual: ${service.visual};`}>
				<div class="service-detail-photo relative overflow-hidden bg-sand/40" role="img" aria-label={service.imageAlt}>
					<div class="service-detail-photo-grid" aria-hidden="true"></div>
					<span class="service-detail-photo-label">{service.title}</span>
				</div>
			</div>

			<div class="rounded-3xl border border-sand/70 bg-surface/70 p-6 shadow-xl shadow-rosewood/10 md:p-8">
				<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Service Details</p>
				<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">{service.title}</h1>
				<p class="mt-5 text-lg leading-8 text-muted-foreground">{service.detail}</p>

				<div class="mt-8 grid gap-4 sm:grid-cols-2">
					<div class="rounded-2xl border border-sage/30 bg-background/70 p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.22em] text-clay">Price</p>
						<p class="mt-2 font-display text-3xl font-semibold text-rosewood">{service.price}</p>
					</div>
					<div class="rounded-2xl border border-sage/30 bg-background/70 p-5">
						<p class="text-xs font-semibold uppercase tracking-[0.22em] text-clay">Timing</p>
						<p class="mt-2 font-display text-3xl font-semibold text-rosewood">{service.duration}</p>
					</div>
				</div>

				<div class="mt-8 grid gap-6 md:grid-cols-2">
					<div>
						<h2 class="font-display text-3xl font-semibold text-foreground">Good for</h2>
						<div class="mt-4 flex flex-wrap gap-2">
							{#each service.highlights as highlight}
								<span class="rounded-full border border-sage/35 bg-background/60 px-3 py-1 text-sm font-semibold text-moss">{highlight}</span>
							{/each}
						</div>
					</div>
					<div>
						<h2 class="font-display text-3xl font-semibold text-foreground">Includes</h2>
						<ul class="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
							{#each service.includes as item}
								<li class="flex gap-3">
									<span class="mt-2 size-1.5 shrink-0 rounded-full bg-clay" aria-hidden="true"></span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
					<BookingButton label={`Book ${service.title}`} mobileLabel="Book Appointment" />
					<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-background text-moss hover:bg-sage/10">
						All services
						<ArrowRightIcon class="size-4" aria-hidden="true" />
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.service-detail-polaroid {
		position: relative;
		rotate: -1.5deg;
	}

	.service-detail-polaroid::before {
		content: "";
		position: absolute;
		top: -0.8rem;
		left: 50%;
		height: 1.5rem;
		width: 6rem;
		translate: -50% 0;
		rotate: 3deg;
		border: 1px solid rgba(170, 180, 157, 0.78);
		background: rgba(216, 211, 194, 0.74);
		box-shadow: 0 0.45rem 1rem rgba(70, 56, 46, 0.08);
		backdrop-filter: blur(4px);
	}

	.service-detail-photo {
		display: grid;
		min-height: clamp(22rem, 56vw, 40rem);
		place-items: center;
		background: var(--service-visual);
	}

	.service-detail-photo::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(125deg, rgba(216, 211, 194, 0.38), transparent 36%);
	}

	.service-detail-photo-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(216, 211, 194, 0.16) 1px, transparent 1px),
			linear-gradient(90deg, rgba(216, 211, 194, 0.16) 1px, transparent 1px);
		background-size: 2.1rem 2.1rem;
		mix-blend-mode: soft-light;
		opacity: 0.7;
	}

	.service-detail-photo-label {
		position: relative;
		z-index: 1;
		max-width: 80%;
		border: 1px solid rgba(216, 211, 194, 0.46);
		background: rgba(37, 41, 31, 0.24);
		padding: 0.65rem 1rem;
		text-align: center;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--salon-cream);
		backdrop-filter: blur(6px);
	}

	@media (prefers-reduced-motion: reduce) {
		.service-detail-polaroid {
			rotate: none;
		}
	}
</style>
