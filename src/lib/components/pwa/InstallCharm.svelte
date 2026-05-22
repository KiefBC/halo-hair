<script lang="ts">
	import { browser, dev } from "$app/environment";
	import ScissorsIcon from "@lucide/svelte/icons/scissors";
	import XIcon from "@lucide/svelte/icons/x";
	import { onMount } from "svelte";

	type InstallChoice = {
		outcome: "accepted" | "dismissed";
		platform: string;
	};

	type BeforeInstallPromptEvent = Event & {
		prompt: () => Promise<void>;
		userChoice: Promise<InstallChoice>;
	};

	const collapsedKey = "halo-install-charm-collapsed";
	const installedKey = "halo-install-charm-installed";

	let mode = $state<"hidden" | "expanded" | "collapsed">("hidden");
	let instructionsOpen = $state(false);
	let isIosDevice = $state(false);
	let deferredPrompt = $state<BeforeInstallPromptEvent | null>(null);
	let revealTimer: ReturnType<typeof setTimeout> | undefined;

	function isStandalone() {
		if (!browser) return true;

		return window.matchMedia("(display-mode: standalone)").matches || Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
	}

	function shouldStayHidden() {
		return localStorage.getItem(installedKey) === "true" || isStandalone();
	}

	function revealSoon() {
		if (shouldStayHidden()) return;

		clearTimeout(revealTimer);
		revealTimer = setTimeout(() => {
			mode = localStorage.getItem(collapsedKey) === "true" ? "collapsed" : "expanded";
		}, 1800);
	}

	function dismiss() {
		localStorage.setItem(collapsedKey, "true");
		mode = "collapsed";
		instructionsOpen = false;
	}

	function showPrompt() {
		localStorage.removeItem(collapsedKey);
		mode = "expanded";
		instructionsOpen = false;
	}

	async function saveToPhone() {
		if (deferredPrompt) {
			const prompt = deferredPrompt;
			deferredPrompt = null;
			await prompt.prompt();
			const choice = await prompt.userChoice;

			if (choice.outcome === "accepted") {
				localStorage.setItem(installedKey, "true");
				mode = "hidden";
			}

			return;
		}

		instructionsOpen = true;
	}

	onMount(() => {
		isIosDevice = /iphone|ipad|ipod/i.test(navigator.userAgent);

		if (!dev && "serviceWorker" in navigator) {
			navigator.serviceWorker.register("/service-worker.js").catch(() => {
				// The install charm can still show iOS instructions if service worker registration fails.
			});
		}

		function handleBeforeInstallPrompt(event: Event) {
			event.preventDefault();
			deferredPrompt = event as BeforeInstallPromptEvent;
			revealSoon();
		}

		function handleAppInstalled() {
			localStorage.setItem(installedKey, "true");
			mode = "hidden";
		}

		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
		window.addEventListener("appinstalled", handleAppInstalled);

		if (isIosDevice) {
			revealSoon();
		}

		return () => {
			clearTimeout(revealTimer);
			window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
			window.removeEventListener("appinstalled", handleAppInstalled);
		};
	});
</script>

{#if mode === "expanded"}
	<div class="salon-install fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 z-50 max-w-[calc(100vw-1.5rem)] sm:right-5">
		<div class="flex flex-row-reverse items-end gap-2">
			<button
				type="button"
				class="salon-install-button grid size-12 shrink-0 place-items-center rounded-full bg-moss text-cream shadow-xl shadow-rosewood/25 transition hover:-translate-y-0.5 hover:bg-rosewood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
				aria-label="Save Halo Hair Studio to your phone"
				onclick={saveToPhone}
			>
				<ScissorsIcon class="size-5" aria-hidden="true" />
			</button>

			<div class="salon-install-bubble relative w-64 rounded-3xl border border-sand/80 bg-white p-4 pr-10 text-left shadow-2xl shadow-rosewood/20">
				<button
					type="button"
					class="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition hover:bg-sage/10 hover:text-rosewood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					aria-label="Hide save to phone prompt"
					onclick={dismiss}
				>
					<XIcon class="size-4" aria-hidden="true" />
				</button>

				<p class="font-display text-2xl font-semibold leading-none text-rosewood">Keep Halo close</p>
				<p class="mt-2 text-sm leading-5 text-muted-foreground">Add us to your home screen for easy booking.</p>

				{#if instructionsOpen}
					<div class="mt-3 rounded-2xl bg-cream/70 p-3 text-xs leading-5 text-moss">
						{#if isIosDevice}
							Tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>.
						{:else}
							Open your browser menu, then choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.
						{/if}
					</div>
				{/if}

				<button
					type="button"
					class="mt-4 inline-flex rounded-full bg-moss px-4 py-2 text-sm font-semibold text-cream transition hover:bg-rosewood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-white"
					onclick={saveToPhone}
				>
					Save to phone
				</button>
			</div>
		</div>
	</div>
{:else if mode === "collapsed"}
	<button
		type="button"
		class="salon-install-peek fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] -right-7 z-50 grid size-14 place-items-center rounded-full bg-moss text-cream shadow-xl shadow-rosewood/25 transition hover:-translate-x-3 hover:bg-rosewood focus-visible:-translate-x-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
		aria-label="Show save Halo to phone prompt"
		onclick={showPrompt}
	>
		<ScissorsIcon class="size-5 -translate-x-2" aria-hidden="true" />
	</button>
{/if}

<style>
	.salon-install {
		animation: salon-install-float-in 420ms ease both;
	}

	.salon-install-bubble::after {
		content: "";
		position: absolute;
		bottom: 1.2rem;
		right: -0.45rem;
		width: 1rem;
		height: 1rem;
		rotate: 45deg;
		border-bottom: 1px solid rgba(181, 173, 148, 0.8);
		border-right: 1px solid rgba(181, 173, 148, 0.8);
		background: white;
	}

	.salon-install-button {
		animation: salon-install-bob 3.8s ease-in-out infinite;
	}

	.salon-install-peek {
		animation: salon-install-peek-in 300ms ease both;
	}

	@keyframes salon-install-float-in {
		from {
			opacity: 0;
			transform: translateY(0.75rem) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes salon-install-bob {
		0%,
		100% {
			transform: translateY(0) rotate(-3deg);
		}
		50% {
			transform: translateY(-0.2rem) rotate(4deg);
		}
	}

	@keyframes salon-install-peek-in {
		from {
			opacity: 0;
			transform: translateX(1rem);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.salon-install,
		.salon-install-button,
		.salon-install-peek {
			animation: none;
		}
	}
</style>
