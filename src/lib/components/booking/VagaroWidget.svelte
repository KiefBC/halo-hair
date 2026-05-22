<script lang="ts">
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
	import { Button } from "$lib/components/ui/button";
	import { site } from "$lib/data/site";
</script>

<div class="overflow-hidden rounded-3xl border border-sand/70 bg-surface shadow-sm">
	<div class="border-b border-sand/60 bg-cream px-6 py-5">
		<p class="text-xs font-semibold uppercase tracking-[0.24em] text-clay">Vagaro booking</p>
		<h2 class="mt-2 font-display text-3xl font-semibold text-foreground">Choose your appointment</h2>
	</div>
	<div class="space-y-5 p-6">
		<!-- Real Vagaro embed code should be added here when approved. -->
		<div class="grid min-h-[18rem] place-items-center rounded-3xl border border-dashed border-sage/50 bg-sage/10 p-8 text-center">
			<div class="max-w-md space-y-4">
				<p class="font-display text-3xl font-semibold text-moss">Vagaro embed placeholder</p>
				<p class="text-sm leading-6 text-muted-foreground">
					This mockup keeps booking centralized here. The production embed or approved Vagaro script can replace this placeholder without touching other pages.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-sm text-muted-foreground">If the embedded booking view is unavailable, use the direct Vagaro link.</p>
			<Button href={site.bookingUrl} target="_blank" rel="noreferrer" class="bg-moss text-cream hover:bg-rosewood">
				Open Vagaro
				<ExternalLinkIcon class="size-4" aria-hidden="true" />
			</Button>
		</div>
	</div>
</div>
