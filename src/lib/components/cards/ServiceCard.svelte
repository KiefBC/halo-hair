<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import { Badge } from "$lib/components/ui/badge";
	import * as Card from "$lib/components/ui/card";
	import type { Service } from "$lib/types/service";

	let { service }: { service: Service } = $props();
</script>

<Card.Root
	class="group overflow-hidden rounded-3xl border-sand/60 bg-surface/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rosewood/10"
>
	<div
		role="img"
		aria-label={service.imageAlt}
		class="relative h-52 overflow-hidden border-b border-sand/50"
		style={`background: ${service.visual};`}
	>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.52),transparent_28%),linear-gradient(to_top,rgba(43,37,32,0.28),transparent_54%)]"></div>
		<div class="absolute bottom-4 left-4 rounded-full border border-cream/50 bg-cream/80 px-3 py-1 text-xs font-medium text-rosewood shadow-sm backdrop-blur">
			Placeholder image
		</div>
	</div>
	<Card.Header>
		<Card.Title class="font-display text-3xl font-semibold text-foreground">{service.title}</Card.Title>
		<Card.Description class="text-sm leading-6 text-muted-foreground">
			{service.description}
		</Card.Description>
	</Card.Header>
	<Card.Content class="space-y-5">
		<div class="flex flex-wrap gap-2">
			{#each service.highlights as highlight}
				<Badge variant="outline" class="border-sage/35 bg-sage/10 text-moss">{highlight}</Badge>
			{/each}
		</div>
		<a
			href="/services"
			class="inline-flex items-center gap-2 text-sm font-semibold text-moss underline-offset-4 transition hover:text-rosewood hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
		>
			Explore services
			<ArrowRightIcon class="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
		</a>
	</Card.Content>
</Card.Root>
