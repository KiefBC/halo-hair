<script lang="ts">
	import VagaroWidget from "$lib/components/booking/VagaroWidget.svelte";
	import { Button } from "$lib/components/ui/button";
	import { site } from "$lib/data/site";
</script>

<svelte:head>
	<title>Book Your Appointment | Halo Hair Studio</title>
	<meta name="description" content="Book your Halo Hair Studio appointment through Vagaro or start with a consultation." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div class="mb-10 max-w-3xl">
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Booking</p>
			<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">Book your appointment</h1>
			<p class="mt-5 text-lg leading-8 text-muted-foreground">
				Choose your service through Vagaro. If you are unsure what to book, start with a consultation.
			</p>
		</div>
		<VagaroWidget />
		<div class="mt-8 flex flex-col gap-3 sm:flex-row">
			<Button href={site.bookingUrl} target="_blank" rel="noreferrer" size="lg" class="rounded-full bg-moss text-cream hover:bg-rosewood">
				Open Vagaro directly
			</Button>
			<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-cream text-moss hover:bg-sage/10">
				View services first
			</Button>
		</div>
	</div>
</section>
