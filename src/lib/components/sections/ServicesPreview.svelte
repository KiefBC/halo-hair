<script lang="ts">
	import ServiceCard from "$lib/components/cards/ServiceCard.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { Button } from "$lib/components/ui/button";
	import homeMarkdown from "$lib/content/home.md?raw";
	import { markdownSectionHtml } from "$lib/content/markdown";
	import { services } from "$lib/data/services";

	const servicesPreviewHtml = markdownSectionHtml(homeMarkdown, "Services Preview");
</script>

<section class="bg-cream py-14 md:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading
			title="Services"
		/>
		<div class="services-polaroid-carousel -mx-4 mt-10 grid auto-cols-[78vw] grid-flow-col gap-5 overflow-x-auto scroll-px-4 snap-x snap-mandatory px-4 pb-7 pt-4 sm:-mx-6 sm:auto-cols-[20rem] sm:scroll-px-6 sm:px-6 md:mx-0 md:mt-12 md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-0" aria-label="Services carousel">
			{#each services as service}
				<div class="services-polaroid-slide snap-start">
					<ServiceCard {service} />
				</div>
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
