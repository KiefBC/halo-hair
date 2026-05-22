<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "$lib/components/ui/button";
	import { site } from "$lib/data/site";
</script>

<svelte:head>
	<title>Products | Halo Hair Studio</title>
	<meta name="description" content="Products and take-home hair care at Halo Hair Studio in Langford, BC." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Products</p>
		<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">Take-home care from the chair</h1>
		<p class="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
			Product details can be added here once the salon has approved the exact lines, photos, and recommendations for the site.
		</p>
		<div class="mt-8 rounded-3xl border border-sand/70 bg-cream p-6 md:p-8">
			<p class="text-lg leading-8 text-muted-foreground">
				For now, this page keeps a warm place for favourite shampoos, conditioners, styling products, and hair care notes.
			</p>
			<Button href={site.bookingUrl} target="_blank" rel="noreferrer" class="mt-6 rounded-full bg-moss text-cream hover:bg-rosewood">
				Ask at your appointment
				<ArrowRightIcon class="size-4" aria-hidden="true" />
			</Button>
		</div>
	</div>
</section>
