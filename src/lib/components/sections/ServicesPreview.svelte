<script lang="ts">
	import ServiceCard from "$lib/components/cards/ServiceCard.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { Button } from "$lib/components/ui/button";
	import homeMarkdown from "$lib/content/home.md?raw";
	import { markdownSectionHtml } from "$lib/content/markdown";
	import { services } from "$lib/data/services";

	const servicesPreviewHtml = markdownSectionHtml(homeMarkdown, "Services Preview");
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
			<div class="services-preview-copy mb-5 text-sm leading-6 text-muted-foreground">
				{@html servicesPreviewHtml}
			</div>
			<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
				View Services
			</Button>
		</div>
	</div>
</section>

<style>
	.services-preview-copy :global(p) {
		margin: 0;
	}
</style>
