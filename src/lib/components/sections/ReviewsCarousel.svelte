<script lang="ts">
	import ReviewCard from "$lib/components/cards/ReviewCard.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { Button } from "$lib/components/ui/button";
	import homeMarkdown from "$lib/content/home.md?raw";
	import { markdownSectionText } from "$lib/content/markdown";
	import { reviews } from "$lib/data/reviews";
	import { site } from "$lib/data/site";

	const marqueeReviews = [...reviews, ...reviews];
	const mobileCarouselReviews = [...reviews, ...reviews.slice(0, 1)];
	const reviewsDescription = markdownSectionText(homeMarkdown, "Reviews");
</script>

<section class="overflow-hidden bg-background py-16 md:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<SectionHeading align="left" eyebrow="Reviews" title="Kind words from clients" description={reviewsDescription} />
			<Button href={site.socials.vagaro} target="_blank" rel="noreferrer" variant="outline" size="lg" class="w-fit rounded-full border-sage/50 bg-cream text-moss hover:bg-sage/10">
				Read more on Vagaro
			</Button>
		</div>

		<div class="mobile-review-carousel mt-10 md:hidden" aria-label="Client reviews carousel">
			<div class="mobile-review-track py-4">
				{#each mobileCarouselReviews as review, index (index)}
					<div class="mobile-review-slide" aria-hidden={index >= reviews.length} inert={index >= reviews.length ? true : undefined}>
						<ReviewCard {review} />
					</div>
				{/each}
			</div>
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

<style>
	.mobile-review-carousel {
		overflow: hidden;
		max-width: min(100%, 24rem);
		margin-inline: auto;
	}

	.mobile-review-track {
		display: flex;
		animation: mobile-review-rotate-left 20s ease-in-out infinite;
	}

	.mobile-review-slide {
		display: grid;
		min-width: 100%;
		place-items: center;
		padding-inline: 0.25rem;
	}

	.mobile-review-carousel:hover .mobile-review-track,
	.mobile-review-carousel:focus-within .mobile-review-track {
		animation-play-state: paused;
	}

	@keyframes mobile-review-rotate-left {
		0%,
		16% {
			transform: translateX(0);
		}
		21%,
		37% {
			transform: translateX(-100%);
		}
		42%,
		58% {
			transform: translateX(-200%);
		}
		63%,
		79% {
			transform: translateX(-300%);
		}
		84%,
		100% {
			transform: translateX(-400%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.mobile-review-carousel {
			overflow-x: auto;
			scroll-snap-type: x mandatory;
		}

		.mobile-review-track {
			animation: none;
		}

		.mobile-review-slide {
			scroll-snap-align: center;
		}

		.mobile-review-slide[aria-hidden="true"] {
			display: none;
		}
	}
</style>
