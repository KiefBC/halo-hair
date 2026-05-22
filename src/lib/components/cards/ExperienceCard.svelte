<script lang="ts">
	import LeafIcon from "@lucide/svelte/icons/leaf";
	import * as Card from "$lib/components/ui/card";

	let { title, description }: { title: string; description: string } = $props();
</script>

<Card.Root class="rounded-3xl border-sand/60 bg-cream/80 p-2 shadow-sm">
	<Card.Content class="space-y-5 p-6">
		<div class="flex size-11 items-center justify-center rounded-full bg-sage/15 text-moss">
			<LeafIcon class="size-5" aria-hidden="true" />
		</div>
		<div>
			<h3 class="font-display text-2xl font-semibold text-foreground">{title}</h3>
			<p class="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
		</div>
	</Card.Content>
</Card.Root>
