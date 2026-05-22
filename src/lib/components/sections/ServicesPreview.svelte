<script lang="ts">
	import ServiceCard from "$lib/components/cards/ServiceCard.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { Button } from "$lib/components/ui/button";
	import { services } from "$lib/data/services";
</script>

<section class="bg-cream py-16 md:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Services"
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each services as service}
				<ServiceCard {service} />
			{/each}
		</div>
		<div class="mx-auto mt-10 max-w-xl text-center">
			<p class="mb-5 text-sm leading-6 text-muted-foreground">
				More information about each appointment is available in the full Services section.
			</p>
			<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
				View Services
			</Button>
		</div>
	</div>
</section>
