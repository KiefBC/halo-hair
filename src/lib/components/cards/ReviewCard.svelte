<script lang="ts">
	import StarIcon from "@lucide/svelte/icons/star";
	import * as Card from "$lib/components/ui/card";
	import type { Review } from "$lib/types/review";

	let { review }: { review: Review } = $props();
</script>

<Card.Root
	tabindex={0}
	class="h-full w-[min(88vw,23rem)] shrink-0 rounded-3xl border-sand/60 bg-surface/95 shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:w-[24rem]"
>
	<Card.Content class="flex h-full flex-col gap-5 p-6">
		<div class="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
			{#each Array(review.rating) as _, index (index)}
				<StarIcon class="size-4 fill-clay text-clay" aria-hidden="true" />
			{/each}
		</div>
		<p class="text-base leading-7 text-foreground">“{review.text}”</p>
		<div class="mt-auto flex items-center justify-between gap-4 text-sm">
			<span class="font-semibold text-foreground">{review.name}</span>
			<span class="rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-moss">
				{review.source}
			</span>
		</div>
	</Card.Content>
</Card.Root>
