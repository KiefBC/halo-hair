<script lang="ts">
	import ExperienceCard from "$lib/components/cards/ExperienceCard.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { experience } from "$lib/data/experience";
</script>

<section class="relative overflow-hidden bg-background py-16 md:py-24">
	<div class="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_0%_35%,rgba(138,154,123,0.2),transparent_42%)]"></div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
			<SectionHeading
				align="left"
				eyebrow="Experience"
				title="A quieter kind of salon visit"
				description="The appointment experience is calm, personal, and grounded in honest conversation about your hair goals."
			/>
			<div class="rounded-[2rem] border border-sand/70 bg-surface/80 p-6 shadow-sm">
				<p class="font-display text-3xl font-semibold leading-tight text-rosewood md:text-4xl">
					Thoughtfully planned colour and styling in a welcoming space where the pace feels easier.
				</p>
			</div>
		</div>
		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each experience as item}
				<ExperienceCard title={item.title} description={item.description} />
			{/each}
		</div>
	</div>
</section>
