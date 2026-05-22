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

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Services</p>
			<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">Services</h1>
			<div class="markdown-copy mt-5 text-lg leading-8 text-muted-foreground">
				{@html pageIntroHtml}
			</div>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each services as service}
				<ServiceCard {service} />
			{/each}
		</div>

	</div>
</section>

<style>
	.markdown-copy :global(p) {
		margin: 0;
	}
</style>
