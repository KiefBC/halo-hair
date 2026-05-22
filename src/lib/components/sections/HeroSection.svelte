<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import BookingButton from "$lib/components/booking/BookingButton.svelte";
	import { Button } from "$lib/components/ui/button";
	import homeMarkdown from "$lib/content/home.md?raw";
	import { markdownSectionHtml } from "$lib/content/markdown";

	const heroHtml = markdownSectionHtml(homeMarkdown, "Hero");
</script>

<section class="relative isolate overflow-hidden bg-background">
	<div class="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_18%_18%,rgba(185,130,99,0.18),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(138,154,123,0.2),transparent_34%),linear-gradient(180deg,rgba(251,248,243,0.82),rgba(247,241,234,0))]"></div>
	<div class="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
		<h1 class="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
			Halo Hair Studio
		</h1>
		<div class="hero-copy mx-auto mt-6 max-w-xl font-display text-3xl font-medium leading-tight text-rosewood">
			{@html heroHtml}
		</div>
		<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
				<BookingButton label="Book through Vagaro" mobileLabel="Book through Vagaro" />
				<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-cream text-moss hover:bg-sage/10">
					Explore Services
					<ArrowRightIcon class="size-4" aria-hidden="true" />
				</Button>
		</div>
	</div>
</section>

<style>
	.hero-copy :global(p) {
		margin: 0;
	}
</style>
