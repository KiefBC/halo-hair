<script lang="ts">
	import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
	import { Button } from "$lib/components/ui/button";
	import { site } from "$lib/data/site";

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-sand/60 bg-rosewood text-cream">
	<div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
			<div>
				<p class="font-display text-4xl font-semibold">{site.name}</p>
				<p class="mt-2 text-sm uppercase tracking-[0.22em] text-cream/65">Langford, BC</p>
			</div>
			<Button href="/book" class="w-fit rounded-full bg-cream text-rosewood hover:bg-sand">
				<CalendarDaysIcon class="size-4" aria-hidden="true" />
				Book appointment
			</Button>
		</div>

		<div class="flex flex-col gap-4 border-t border-cream/15 pt-6 text-sm text-cream/65 sm:flex-row sm:items-center sm:justify-between">
			<p>Copyright {year} {site.name}. Mockup website prototype.</p>
			<div class="flex flex-wrap gap-x-5 gap-y-2">
				<a class="transition hover:text-cream" href={site.socials.instagram}>Instagram</a>
				<a class="transition hover:text-cream" href={site.socials.facebook}>Facebook</a>
				<a class="inline-flex items-center gap-1 transition hover:text-cream" href={site.socials.vagaro} target="_blank" rel="noreferrer">
					Vagaro
					<ExternalLinkIcon class="size-3.5" aria-hidden="true" />
				</a>
			</div>
		</div>
	</div>
</footer>
