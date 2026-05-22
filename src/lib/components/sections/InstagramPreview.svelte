<script lang="ts">
	import InstagramCard from "$lib/components/cards/InstagramCard.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { Button } from "$lib/components/ui/button";
	import { instagramPreview } from "$lib/data/instagram";
	import { site } from "$lib/data/site";
</script>

<section class="bg-cream py-16 md:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
			<SectionHeading
				align="left"
				eyebrow="Recent work"
				title="Recent work from the chair"
				description="Follow along on Instagram for recent colour work, transformations, and salon updates."
			/>
			<div class="lg:text-right">
				<Button href={site.socials.instagram} variant="outline" size="lg" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
					View Instagram
				</Button>
			</div>
		</div>
		<div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
			{#each instagramPreview as post}
				<InstagramCard {post} />
			{/each}
		</div>
	</div>
</section>
