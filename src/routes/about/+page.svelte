<script lang="ts">
	import ExperienceCard from "$lib/components/cards/ExperienceCard.svelte";
	import BookingCTA from "$lib/components/sections/BookingCTA.svelte";
	import { experience } from "$lib/data/experience";
</script>

<svelte:head>
	<title>About | Halo Hair Studio</title>
	<meta name="description" content="Learn about the calm salon experience behind Halo Hair Studio in Langford, BC." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">About</p>
			<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">A salon experience with room to slow down</h1>
			<p class="mt-5 text-lg leading-8 text-muted-foreground">
				Placeholder about copy for the mockup. This page should eventually be replaced with Jacky's approved story, voice, and details about the salon space.
			</p>
		</div>

		<div class="rounded-[2rem] border border-sand/70 bg-surface p-6 shadow-sm md:p-8">
			<p class="font-display text-4xl font-semibold leading-tight text-rosewood">
				The focus is simple: one-on-one care, thoughtful consultation, and hair decisions that fit real life.
			</p>
			<p class="mt-5 leading-7 text-muted-foreground">
				No certifications, awards, or personal biography details are invented here. The mockup keeps the tone warm and flexible until real owner-approved content is available.
			</p>
		</div>
	</div>
</section>

<section class="bg-cream px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="max-w-3xl">
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">The visit</p>
			<h2 class="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">What the appointment should feel like</h2>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each experience as item}
				<ExperienceCard title={item.title} description={item.description} />
			{/each}
		</div>
	</div>
</section>

<BookingCTA />
