<script lang="ts">
	import ServiceCard from "$lib/components/cards/ServiceCard.svelte";
	import servicesMarkdown from "$lib/content/services.md?raw";
	import { markdownSectionHtml } from "$lib/content/markdown";
	import { services } from "$lib/data/services";

	const pageIntroHtml = markdownSectionHtml(servicesMarkdown, "Page Intro");
</script>

<svelte:head>
	<title>Services | Halo Hair Studio</title>
	<meta name="description" content="Explore colouring, grey transformations, and keratin smoothing treatments at Halo Hair Studio." />
</svelte:head>

<section class="bg-background px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">Services</h1>
			<div class="markdown-copy mt-5 text-lg leading-8 text-muted-foreground">
				{@html pageIntroHtml}
			</div>
		</div>

		<div class="services-polaroid-carousel -mx-4 mt-10 grid auto-cols-[78vw] grid-flow-col gap-5 overflow-x-auto scroll-px-4 snap-x snap-mandatory px-4 pb-7 pt-4 sm:-mx-6 sm:auto-cols-[20rem] sm:scroll-px-6 sm:px-6 md:mx-0 md:mt-12 md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-0" aria-label="Services carousel">
			{#each services as service}
				<div class="services-polaroid-slide snap-start">
					<ServiceCard {service} />
				</div>
			{/each}
		</div>

	</div>
</section>

<style>
	.markdown-copy :global(p) {
		margin: 0;
	}
</style>
