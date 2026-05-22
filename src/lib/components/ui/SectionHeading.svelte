<script lang="ts">
	let {
		eyebrow,
		title,
		description,
		align = "center"
	}: {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: "left" | "center";
	} = $props();
</script>

<div class={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
	{#if eyebrow}
		<p class="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-clay">{eyebrow}</p>
	{/if}
	<h2 class="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
		{title}
	</h2>
	{#if description}
		<p class="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
	{/if}
</div>
