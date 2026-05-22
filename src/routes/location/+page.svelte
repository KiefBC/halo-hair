<script lang="ts">
	import LocationMap from "$lib/components/map/LocationMap.svelte";
	import { Button } from "$lib/components/ui/button";
	import { location as salonLocation } from "$lib/data/location";
</script>

<svelte:head>
	<title>Location | Halo Hair Studio</title>
	<meta name="description" content="Find the Halo Hair Studio salon location placeholder in Langford, BC, with directions and appointment notes." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Location</p>
			<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">{salonLocation.title}</h1>
			<p class="mt-5 text-lg leading-8 text-muted-foreground">{salonLocation.description}</p>
			<div class="mt-8 rounded-3xl border border-sand/70 bg-cream p-6">
				<p class="text-sm font-semibold uppercase tracking-[0.22em] text-clay">Appointment notes</p>
				<ul class="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
					{#each salonLocation.notes as note}
						<li class="flex gap-3">
							<span class="mt-2 size-1.5 shrink-0 rounded-full bg-clay"></span>
							<span>{note}</span>
						</li>
					{/each}
				</ul>
				<div class="mt-7 flex flex-col gap-3 sm:flex-row">
					<Button href={salonLocation.directionsUrl} target="_blank" rel="noreferrer" class="rounded-full bg-moss text-cream hover:bg-rosewood">
						Get directions
					</Button>
					<Button href="/book" variant="outline" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
						Book appointment
					</Button>
				</div>
			</div>
		</div>

		<LocationMap />
	</div>
</section>
