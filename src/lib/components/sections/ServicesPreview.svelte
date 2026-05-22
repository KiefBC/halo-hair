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
		<div class="mt-10 text-center">
			<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
				View all services
			</Button>
		</div>
	</div>
</section>
