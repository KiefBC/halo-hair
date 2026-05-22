<script lang="ts">
	import ServiceCard from "$lib/components/cards/ServiceCard.svelte";
	import BookingCTA from "$lib/components/sections/BookingCTA.svelte";
	import { services } from "$lib/data/services";
</script>

<svelte:head>
	<title>Services | Halo Hair Studio</title>
	<meta name="description" content="Explore colouring, grey transformations, and keratin smoothing treatments at Halo Hair Studio." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Services</p>
			<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">Thoughtfully planned hair services</h1>
			<p class="mt-5 text-lg leading-8 text-muted-foreground">
				This MVP keeps services simple and price-free. Exact service timing, pricing, and suitability can be confirmed through Vagaro or during consultation.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each services as service}
				<ServiceCard {service} />
			{/each}
		</div>

	</div>
</section>

<BookingCTA />
