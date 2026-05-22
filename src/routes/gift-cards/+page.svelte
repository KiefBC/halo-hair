<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "$lib/components/ui/button";
	import { site } from "$lib/data/site";
</script>

<svelte:head>
	<title>Gift Cards | Halo Hair Studio</title>
	<meta name="description" content="Gift card information for Halo Hair Studio in Langford, BC." />
</svelte:head>

<section class="bg-cream px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Gift Cards</p>
		<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">A little salon time for someone you love</h1>
		<p class="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
			Gift card details can be added here once the approved purchase link, values, and redemption notes are ready.
		</p>
		<div class="mt-8 rounded-3xl border border-sand/70 bg-background p-6 md:p-8">
			<p class="text-lg leading-8 text-muted-foreground">
				Until then, use the booking link or contact the salon to ask about the best way to give a hair day.
			</p>
			<Button href={site.bookingUrl} target="_blank" rel="noreferrer" class="mt-6 rounded-full bg-moss text-cream hover:bg-rosewood">
				Open Vagaro
				<ArrowRightIcon class="size-4" aria-hidden="true" />
			</Button>
		</div>
	</div>
</section>
