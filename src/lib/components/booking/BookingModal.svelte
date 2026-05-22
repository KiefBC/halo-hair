<script lang="ts">
	import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
	import VagaroWidget from "$lib/components/booking/VagaroWidget.svelte";
	import { buttonVariants, type ButtonSize } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog";
	import { cn } from "$lib/utils";

	let {
		triggerLabel = "Book Appointment",
		size = "lg",
		class: className = ""
	}: {
		triggerLabel?: string;
		size?: ButtonSize;
		class?: string;
	} = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger
		class={cn(
			buttonVariants({ size }),
			"rounded-full bg-moss px-5 text-cream shadow-sm hover:bg-rosewood focus-visible:ring-moss/40",
			className
		)}
	>
		<CalendarDaysIcon class="size-4" aria-hidden="true" />
		{triggerLabel}
	</Dialog.Trigger>
	<Dialog.Content class="max-h-[90vh] overflow-y-auto rounded-3xl border-sand/70 bg-background p-0 sm:max-w-3xl">
		<div class="space-y-6 p-4 sm:p-6">
			<Dialog.Header>
				<Dialog.Title class="font-display text-3xl font-semibold text-foreground md:text-4xl">
					Book through Vagaro
				</Dialog.Title>
				<Dialog.Description class="text-sm leading-6 text-muted-foreground">
					Choose your service through Vagaro. If you are unsure what to book, start with a consultation.
				</Dialog.Description>
			</Dialog.Header>
			<VagaroWidget />
		</div>
	</Dialog.Content>
</Dialog.Root>
