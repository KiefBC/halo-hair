<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "$lib/components/ui/button";
	import placeholderMarkdown from "$lib/content/placeholder.md?raw";
	import { markdownSectionHtml } from "$lib/content/markdown";

	const introHtml = markdownSectionHtml(placeholderMarkdown, "Intro");
</script>

<svelte:head>
	<title>Coming Soon | Halo Hair Studio</title>
	<meta name="description" content="A placeholder page for upcoming Halo Hair Studio website content." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Coming soon</p>
		<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">Lorem ipsum</h1>
		<div class="placeholder-copy mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
			{@html introHtml}
		</div>
		<Button href="/" class="mt-8 rounded-full bg-moss text-cream hover:bg-rosewood">
			Back home
			<ArrowRightIcon class="size-4" aria-hidden="true" />
		</Button>
	</div>
</section>

<style>
	.placeholder-copy :global(p) {
		margin: 0;
	}
</style>
