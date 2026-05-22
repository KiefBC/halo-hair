<script lang="ts">
	import ReviewCard from "$lib/components/cards/ReviewCard.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { Button } from "$lib/components/ui/button";
	import { reviews } from "$lib/data/reviews";
	import { site } from "$lib/data/site";

	const marqueeReviews = [...reviews, ...reviews];
</script>

<section class="overflow-hidden bg-background py-16 md:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<SectionHeading align="left" eyebrow="Reviews" title="Kind words from clients" description="A few client experiences from Vagaro." />
			<Button href={site.socials.vagaro} target="_blank" rel="noreferrer" variant="outline" size="lg" class="w-fit rounded-full border-sage/50 bg-cream text-moss hover:bg-sage/10">
				Read more on Vagaro
			</Button>
		</div>

		<div class="mt-10 grid gap-4 md:hidden">
			{#each reviews as review, index (index)}
				<ReviewCard {review} />
			{/each}
		</div>

		<div class="review-marquee-viewport mt-10 hidden md:block" aria-label="Client reviews carousel">
			<div class="review-marquee-track gap-5 py-4">
				{#each marqueeReviews as review, index (index)}
					<div class={index >= reviews.length ? "review-duplicate" : ""} aria-hidden={index >= reviews.length}>
						<ReviewCard {review} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
