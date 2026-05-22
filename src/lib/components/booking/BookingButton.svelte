<script lang="ts">
	import BookingModal from "$lib/components/booking/BookingModal.svelte";
	import { Button, type ButtonSize } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	let {
		label = "Book Appointment",
		mobileLabel = label,
		size = "lg",
		class: className = ""
	}: {
		label?: string;
		mobileLabel?: string;
		size?: ButtonSize;
		class?: string;
	} = $props();
</script>

<div class={cn("hidden md:block", className)}>
	<BookingModal triggerLabel={label} {size} />
</div>

<Button href="/book" {size} class={cn("rounded-full bg-moss px-5 text-cream shadow-sm hover:bg-rosewood md:hidden", className)}>
	{mobileLabel}
</Button>
