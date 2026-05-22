<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Button } from "$lib/components/ui/button";
	import { location as salonLocation } from "$lib/data/location";
	import { site } from "$lib/data/site";
</script>

<svelte:head>
	<title>Contact | Halo Hair Studio</title>
	<meta name="description" content="Contact Halo Hair Studio in Langford, BC." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
		<div>
			<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Contact</p>
			<h1 class="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">Questions before you book?</h1>
			<p class="mt-6 text-lg leading-8 text-muted-foreground">
				Reach out before booking, or come find the salon in Langford when it is time for your appointment.
			</p>
		</div>

		<div class="rounded-3xl border border-sand/70 bg-cream p-6 md:p-8">
			<div class="space-y-5 text-lg leading-8 text-muted-foreground">
				<p>
					<span class="block text-sm font-semibold uppercase tracking-[0.2em] text-clay">Email</span>
					<a class="font-semibold text-moss underline-offset-4 hover:text-rosewood hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
				</p>
				<p>
					<span class="block text-sm font-semibold uppercase tracking-[0.2em] text-clay">Phone</span>
					<a class="font-semibold text-moss underline-offset-4 hover:text-rosewood hover:underline" href={`tel:${site.phone}`}>{site.phone}</a>
				</p>
				<p>
					<span class="block text-sm font-semibold uppercase tracking-[0.2em] text-clay">Address</span>
					{salonLocation.address}
				</p>
			</div>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<Button href="/book" class="rounded-full bg-moss text-cream hover:bg-rosewood">
					Book online
					<ArrowRightIcon class="size-4" aria-hidden="true" />
				</Button>
				<Button href={salonLocation.directionsUrl} target="_blank" rel="noreferrer" variant="outline" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
					Get directions
				</Button>
			</div>
		</div>
	</div>
</section>
