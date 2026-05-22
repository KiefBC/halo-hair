<script lang="ts">
	import MailIcon from "@lucide/svelte/icons/mail";
	import MapPinnedIcon from "@lucide/svelte/icons/map-pinned";
	import { Button } from "$lib/components/ui/button";
	import LocationMap from "$lib/components/map/LocationMap.svelte";
	import { location as salonLocation } from "$lib/data/location";
	import { site } from "$lib/data/site";
</script>

<section id="contact" class="scroll-mt-24 bg-cream pb-14 pt-3 md:scroll-mt-28 md:pb-20 md:pt-4">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
			<div>
				<h2 class="text-center font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">Get in Touch</h2>

				<div class="mt-8 rounded-3xl border border-sand/70 bg-background p-6 text-center">
					<p class="text-sm font-semibold uppercase tracking-[0.22em] text-clay">Find the salon</p>
					<p class="mt-2 overflow-hidden whitespace-nowrap font-display font-semibold leading-tight text-foreground text-[clamp(1.6rem,5.3vw,3rem)] md:text-[clamp(1.75rem,3.4vw,3rem)]">
						{salonLocation.address}
					</p>
					<div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
						<Button href={salonLocation.directionsUrl} target="_blank" rel="noreferrer" class="rounded-full bg-moss text-cream hover:bg-rosewood">
							<MapPinnedIcon class="size-4" aria-hidden="true" />
							Get directions
						</Button>
						<Button href={`mailto:${site.email}`} variant="outline" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
							<MailIcon class="size-4" aria-hidden="true" />
							Email Jacky
						</Button>
					</div>
				</div>
			</div>

			<form
				action={`mailto:${site.email}`}
				method="post"
				enctype="text/plain"
				class="rounded-[2rem] border border-sand/70 bg-background p-6 shadow-sm md:p-8"
			>
				<div class="grid gap-5">
					<label class="grid gap-2 text-sm font-semibold text-foreground">
						Name
						<input
							name="name"
							autocomplete="name"
							class="rounded-2xl border border-sand/70 bg-cream px-4 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-sage focus:ring-2 focus:ring-sage/25"
							placeholder="Your name"
						/>
					</label>
					<label class="grid gap-2 text-sm font-semibold text-foreground">
						Email
						<input
							name="email"
							type="email"
							autocomplete="email"
							class="rounded-2xl border border-sand/70 bg-cream px-4 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-sage focus:ring-2 focus:ring-sage/25"
							placeholder="you@example.com"
						/>
					</label>
				</div>
				<label class="mt-5 grid gap-2 text-sm font-semibold text-foreground">
					Message
					<textarea
						name="message"
						rows="6"
						class="resize-none rounded-2xl border border-sand/70 bg-cream px-4 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-sage focus:ring-2 focus:ring-sage/25"
						placeholder="Tell us a little about your hair, timing, or what you’re hoping for."
					></textarea>
				</label>
				<div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
					<Button type="submit" class="rounded-full bg-moss text-cream hover:bg-rosewood">
						Send a note
					</Button>
				</div>
			</form>
		</div>

		<div class="mt-10">
			<LocationMap />
		</div>
	</div>
</section>
