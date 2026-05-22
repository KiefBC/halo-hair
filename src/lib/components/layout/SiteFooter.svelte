<script lang="ts">
	import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
	import CameraIcon from "@lucide/svelte/icons/camera";
	import MailIcon from "@lucide/svelte/icons/mail";
	import MapPinIcon from "@lucide/svelte/icons/map-pin";
	import PhoneIcon from "@lucide/svelte/icons/phone";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import { navigation } from "$lib/data/navigation";
	import { site } from "$lib/data/site";

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-sand/60 bg-rosewood text-cream">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
			<div class="max-w-md space-y-5">
				<p class="font-display text-4xl font-semibold">{site.name}</p>
				<p class="leading-7 text-cream/75">{site.tagline}</p>
				<Button href="/book" class="rounded-full bg-cream text-rosewood hover:bg-sand">
					<CalendarDaysIcon class="size-4" aria-hidden="true" />
					Book appointment
				</Button>
			</div>

			<div>
				<h2 class="text-sm font-semibold uppercase tracking-[0.24em] text-sand">Explore</h2>
				<nav class="mt-5 grid gap-3" aria-label="Footer navigation">
					{#each navigation as item}
						<a class="text-sm text-cream/75 transition hover:text-cream" href={item.href}>{item.label}</a>
					{/each}
				</nav>
			</div>

			<div>
				<h2 class="text-sm font-semibold uppercase tracking-[0.24em] text-sand">Contact</h2>
				<div class="mt-5 grid gap-3 text-sm text-cream/75">
					<a class="inline-flex items-center gap-2 transition hover:text-cream" href={`mailto:${site.email}`}>
						<MailIcon class="size-4" aria-hidden="true" />
						{site.email}
					</a>
					<a class="inline-flex items-center gap-2 transition hover:text-cream" href={`tel:${site.phone}`}>
						<PhoneIcon class="size-4" aria-hidden="true" />
						{site.phone}
					</a>
					<span class="inline-flex items-center gap-2">
						<MapPinIcon class="size-4" aria-hidden="true" />
						{site.location}
					</span>
					<a class="inline-flex items-center gap-2 transition hover:text-cream" href={site.socials.instagram}>
						<CameraIcon class="size-4" aria-hidden="true" />
						Instagram
					</a>
					<a class="inline-flex items-center gap-2 transition hover:text-cream" href={site.socials.facebook}>
						<ExternalLinkIcon class="size-4" aria-hidden="true" />
						Facebook
					</a>
				</div>
			</div>
		</div>

		<Separator class="my-8 bg-cream/15" />

		<div class="flex flex-col gap-4 text-sm text-cream/65 sm:flex-row sm:items-center sm:justify-between">
			<p>Copyright {year} {site.name}. Mockup website prototype.</p>
			<a class="inline-flex items-center gap-2 transition hover:text-cream" href={site.socials.vagaro} target="_blank" rel="noreferrer">
				Vagaro profile
				<ExternalLinkIcon class="size-4" aria-hidden="true" />
			</a>
		</div>
	</div>
</footer>
