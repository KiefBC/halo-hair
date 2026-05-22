<script lang="ts">
	import BookingButton from "$lib/components/booking/BookingButton.svelte";
	import MobileNav from "$lib/components/layout/MobileNav.svelte";
	import { navigation } from "$lib/data/navigation";
	import { site } from "$lib/data/site";

	const mainNavigation = navigation.filter((item) => item.label !== "Book");
</script>

<header class="sticky top-0 z-40 border-b border-sand/60 bg-cream/90 backdrop-blur-xl">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
		<a
			href="/"
			class="header-logo-halo group relative isolate inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
		>
			<span class="relative z-10 grid size-11 place-items-center rounded-full bg-moss font-display text-xl font-semibold text-cream shadow-sm transition group-hover:bg-rosewood">
				JP
			</span>
			<span class="relative z-10 leading-tight">
				<span class="block font-display text-2xl font-semibold text-foreground">{site.name}</span>
				<span class="hidden text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground sm:block">Langford, BC</span>
			</span>
		</a>

		<nav class="hidden items-center gap-1 rounded-full border border-sand/60 bg-surface/70 p-1 lg:flex" aria-label="Main navigation">
			{#each mainNavigation as item}
				<a
					href={item.href}
					class="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-sage/10 hover:text-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<BookingButton label="Book now" mobileLabel="Book" size="sm" />
			<MobileNav />
		</div>
	</div>
</header>

<style>
	.header-logo-halo::after {
		content: "";
		position: absolute;
		left: 1.375rem;
		top: 50%;
		z-index: 0;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 9999px;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--salon-sun) 36%, transparent) 0 38%,
			color-mix(in srgb, var(--salon-sage) 28%, transparent) 39% 55%,
			transparent 68%
		);
		opacity: 0;
		pointer-events: none;
		transform: translate(-50%, -50%) scale(0.55);
		will-change: opacity, transform;
	}

	.header-logo-halo:hover::after,
	.header-logo-halo:focus-visible::after {
		animation: header-logo-halo-wave 900ms ease-out;
	}

	@keyframes header-logo-halo-wave {
		0% {
			opacity: 0.5;
			transform: translate(-50%, -50%) scale(0.65);
		}
		70% {
			opacity: 0.22;
		}
		100% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(3.2);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.header-logo-halo:hover::after,
		.header-logo-halo:focus-visible::after {
			animation: none;
			opacity: 0.32;
			transform: translate(-50%, -50%) scale(1.35);
		}
	}
</style>
