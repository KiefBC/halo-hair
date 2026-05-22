<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import InstallCharm from '$lib/components/pwa/InstallCharm.svelte';
	import { site } from '$lib/data/site';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve(undefined);
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="manifest" href="/manifest.webmanifest" />
	<link rel="apple-touch-icon" href="/icons/halo-scissors.svg" />
	<meta name="description" content={site.description} />
	<meta property="og:site_name" content={site.name} />
	<meta name="theme-color" content="#2f4738" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="Halo" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<SiteHeader />
	<main>
		{@render children()}
	</main>
	<SiteFooter />
	<InstallCharm />
</div>
