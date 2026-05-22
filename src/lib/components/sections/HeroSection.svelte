<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import BookingButton from "$lib/components/booking/BookingButton.svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<section class="relative isolate overflow-hidden bg-background">
	<div class="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_28%_10%,rgba(185,130,99,0.22),transparent_34%),radial-gradient(circle_at_80%_12%,rgba(138,154,123,0.24),transparent_32%)]"></div>
	<div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
		<div class="max-w-3xl">
			<h1 class="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
				Halo Hair Studio
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
				Colouring, grey transformations, and keratin smoothing treatments in Langford.
			</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<BookingButton label="Book through Vagaro" mobileLabel="Book through Vagaro" />
				<Button href="/services" variant="outline" size="lg" class="rounded-full border-sage/50 bg-cream text-moss hover:bg-sage/10">
					Explore Services
					<ArrowRightIcon class="size-4" aria-hidden="true" />
				</Button>
			</div>
		</div>

		<div class="relative">
			<div class="absolute -left-4 -top-4 h-40 w-40 rounded-full bg-clay/20 blur-3xl"></div>
			<div class="absolute -bottom-8 right-8 h-52 w-52 rounded-full bg-sage/25 blur-3xl"></div>
			<div class="relative overflow-hidden rounded-[2rem] border border-sand/70 bg-surface p-3 shadow-2xl shadow-rosewood/10">
				<div
					role="img"
					aria-label="Placeholder portrait photo for Halo Hair Studio"
					class="min-h-[28rem] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_18%,rgba(255,253,249,0.9),transparent_26%),linear-gradient(145deg,#d8c3aa,#b98263_45%,#556b4e)]"
				>
					<div class="flex h-full min-h-[28rem] items-end p-6">
						<div class="inline-flex items-center gap-3 rounded-full border border-cream/50 bg-cream/85 px-4 py-2 shadow-lg backdrop-blur">
							<span class="size-2 rounded-full bg-clay"></span>
							<span class="font-display text-xl font-semibold text-rosewood">Halo Hair Studio</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
