<script lang="ts">
	import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
	import MenuIcon from "@lucide/svelte/icons/menu";
	import { Button, buttonVariants } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import { navigation } from "$lib/data/navigation";
	import { site } from "$lib/data/site";
	import { cn } from "$lib/utils";

	let open = $state(false);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger
		aria-label="Open navigation"
		class={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "rounded-full text-foreground md:hidden")}
	>
		<MenuIcon class="size-5" aria-hidden="true" />
	</Sheet.Trigger>
	<Sheet.Content side="right" class="w-[88vw] border-sand/70 bg-cream p-6 sm:max-w-sm">
		<Sheet.Header class="text-left">
			<Sheet.Title class="font-display text-3xl font-semibold text-foreground">{site.name}</Sheet.Title>
			<Sheet.Description class="leading-6 text-muted-foreground">{site.tagline}</Sheet.Description>
		</Sheet.Header>
		<nav class="mt-8 grid gap-2" aria-label="Mobile navigation">
			{#each navigation as item}
				<a
					href={item.href}
					onclick={() => (open = false)}
					class="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-sage/10 hover:text-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				>
					{item.label}
				</a>
			{/each}
		</nav>
		<div class="mt-8 space-y-3 rounded-3xl border border-sand/60 bg-surface p-4">
			<p class="text-sm leading-6 text-muted-foreground">Ready to book? Use the mobile-friendly booking page or open Vagaro directly.</p>
			<Button href="/book" onclick={() => (open = false)} class="w-full rounded-full bg-moss text-cream hover:bg-rosewood">
				<CalendarDaysIcon class="size-4" aria-hidden="true" />
				Book appointment
			</Button>
		</div>
	</Sheet.Content>
</Sheet.Root>
