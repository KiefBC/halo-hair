<script lang="ts">
	import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
	import MapPinnedIcon from "@lucide/svelte/icons/map-pinned";
	import LocationMap from "$lib/components/map/LocationMap.svelte";
	import SectionHeading from "$lib/components/ui/SectionHeading.svelte";
	import { Button } from "$lib/components/ui/button";
	import { location as salonLocation } from "$lib/data/location";
</script>

<section class="bg-cream py-16 md:py-24">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8">
		<div>
			<SectionHeading
				align="left"
				eyebrow="Location"
				title="Visit the salon in Langford"
				description={salonLocation.description}
			/>
			<div class="mt-8 rounded-3xl border border-sand/70 bg-surface p-6 shadow-sm">
				<p class="text-sm font-semibold uppercase tracking-[0.22em] text-clay">Address</p>
				<p class="mt-2 font-display text-3xl font-semibold text-foreground">{salonLocation.address}</p>
				<ul class="mt-6 grid gap-3 text-sm leading-6 text-muted-foreground">
					{#each salonLocation.notes as note}
						<li class="flex gap-3">
							<span class="mt-2 size-1.5 shrink-0 rounded-full bg-clay"></span>
							<span>{note}</span>
						</li>
					{/each}
				</ul>
				<div class="mt-7 flex flex-col gap-3 sm:flex-row">
					<Button href={salonLocation.directionsUrl} target="_blank" rel="noreferrer" class="rounded-full bg-moss text-cream hover:bg-rosewood">
						<MapPinnedIcon class="size-4" aria-hidden="true" />
						Get Directions
					</Button>
					<Button href="/book" variant="outline" class="rounded-full border-sage/50 bg-cream text-moss hover:bg-sage/10">
						<CalendarDaysIcon class="size-4" aria-hidden="true" />
						Book Appointment
					</Button>
				</div>
			</div>
		</div>
		<LocationMap />
	</div>
</section>
