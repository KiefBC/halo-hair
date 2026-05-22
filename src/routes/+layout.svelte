<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import { site } from '$lib/data/site';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content={site.description} />
	<meta property="og:site_name" content={site.name} />
	<meta name="theme-color" content="#F7F1EA" />
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<SiteHeader />
	<main>
		{@render children()}
	</main>
	<SiteFooter />
</div>
