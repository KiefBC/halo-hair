<script lang="ts">
	import BookingButton from "$lib/components/booking/BookingButton.svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-sand/70 bg-[radial-gradient(circle_at_18%_18%,rgba(255,253,249,0.9),transparent_28%),linear-gradient(135deg,#556b4e,#6f4e45)] p-8 text-cream shadow-2xl shadow-rosewood/15 md:p-12">
		<div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
			<div>
				<p class="text-xs font-semibold uppercase tracking-[0.28em] text-sand">Booking</p>
				<h2 class="mt-3 font-display text-5xl font-semibold leading-none md:text-6xl">Ready for a refresh?</h2>
				<p class="mt-5 max-w-2xl text-lg leading-8 text-cream/78">Book through Vagaro or start with a consultation.</p>
			</div>
			<div class="flex flex-col gap-3 sm:flex-row md:flex-col">
				<BookingButton label="Book Appointment" class="[&>button]:bg-cream [&>button]:text-rosewood [&>button]:hover:bg-sand" />
				<Button href="/services" variant="outline" size="lg" class="rounded-full border-cream/45 bg-transparent text-cream hover:bg-cream/10">
					View Services
				</Button>
			</div>
		</div>
	</div>
</section>
