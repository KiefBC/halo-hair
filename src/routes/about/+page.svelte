<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import BookingCTA from "$lib/components/sections/BookingCTA.svelte";
	import { Button } from "$lib/components/ui/button";
	import { site } from "$lib/data/site";
</script>

<svelte:head>
	<title>About | Halo Hair Studio</title>
	<meta name="description" content="Meet Jacky and learn about Halo Hair Studio in Langford, BC." />
</svelte:head>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
		<div>
			<h1 class="font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">About Jacky</h1>
			<div class="about-copy mt-7 space-y-5 text-lg leading-8 text-muted-foreground">
				<p>
					Born and raised in the Black Forest of Germany, my passion for travel led me around the world, finally settling in Canada after meeting my wonderful husband, Kyle.
				</p>
				<p>
					After falling in love with Kyle, and the breathtaking beauty of Vancouver Island, I decided to grow my roots permanently in the beautiful suburbs of Langford, BC.
				</p>
				<p>
					My passion for both hair and meeting new people guides me to find purpose in giving people more confidence in their own skin by tailoring my client's hair to a unique style that works for them. I’m always grateful for being able to meet so many amazing people and connect on a personal level with each and every one. Being able to learn more about each and every person in such an intimate setting helps when it comes to the hair side of things and makes for the best service that is personalized to the wants and needs of my clientele.
				</p>
			</div>
		</div>

		<div class="about-polaroid rotate-2 bg-white p-4 pb-7 shadow-2xl shadow-rosewood/15">
			<div class="about-placeholder about-placeholder-jacky relative overflow-hidden" role="img" aria-label="Placeholder portrait for Jacky">
				<div class="about-placeholder-grid" aria-hidden="true"></div>
				<span class="about-placeholder-label">Jacky</span>
			</div>
			<div class="pt-5 text-center">
				<p class="font-display text-4xl font-semibold leading-none text-rosewood">Halo Hair Studio</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">Langford, BC</p>
			</div>
		</div>
	</div>

	<div class="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
		<div class="rounded-3xl border border-sand/70 bg-cream p-6 md:p-8">
			<div class="about-copy space-y-5 text-lg leading-8 text-muted-foreground">
				<p>
					I’m a proud small business owner that loves to work hard and play hard! When I’m not busy transforming my client's hair, you’ll find me hiking in our beautiful mountains, globe-trotting, or breaking a sweat at CrossFit.
				</p>
				<p>
					Now that you’ve got to know a little bit about me, I’d love to meet you and provide an outstanding hair experience that will leave you feeling more uniquely beautiful than an ocean pearl. So what are you waiting for, reach out to me for a consultation today!
				</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-cream px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
		<div class="about-polaroid -rotate-2 bg-white p-4 pb-7 shadow-2xl shadow-rosewood/15">
			<div class="about-placeholder about-placeholder-salon relative overflow-hidden" role="img" aria-label="Placeholder for the Halo Hair Studio salon space">
				<div class="about-placeholder-grid" aria-hidden="true"></div>
				<span class="about-placeholder-label">Salon</span>
			</div>
			<div class="pt-5 text-center">
				<p class="font-display text-4xl font-semibold leading-none text-rosewood">956 Shaw Avenue</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">New address</p>
			</div>
		</div>

		<div>
			<h2 class="font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">About the Salon</h2>
			<div class="about-copy mt-7 space-y-5 text-lg leading-8 text-muted-foreground">
				<p>
					Since Jacky is the sole stylist in the space, you’re able to fully relax and enjoy the experience without the hustle and bustle of a regular busy salon. Jacky is able to give you her full attention and the distractions of a busy salon are noticeably absent during your appointment. This allows for a relaxing ambience, free of stress.
				</p>
				<p class="font-semibold text-moss">NEW ADDRESS: 956 Shaw Avenue</p>
				<p>
					The new space is located in a separate space in Jacky and Kyle's new home in Langford, BC. Finding a home that could accommodate the salon was their first priority during the home-buying process. After a big move from Sooke, Jacky has completed the renovations on the new Langford location. The new salon is sleek and modern, tastefully accented with natural wood elements.
				</p>
				<blockquote class="border-l-4 border-sage/60 pl-5 font-display text-3xl leading-tight text-rosewood">
					“The commercial salon environment was never my thing, and I always wanted to be my own boss so 3 years ago I decided to make my own dreams come true and open up my own home salon” - Jacky Pohl
				</blockquote>
			</div>
		</div>
	</div>
</section>

<section class="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
	<div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
		<div>
			<h2 class="font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">About my Experience</h2>
			<div class="about-copy mt-7 space-y-5 text-lg leading-8 text-muted-foreground">
				<p>
					Jacky is a professionally trained hair technician who is passionate about all thing’s hair. Her training started with a three-year apprenticeship in Europe, at the salon Udo Waltz when she was just 15 years old. Now, with over 16 years of experience, Jacky is considered a master stylist.
				</p>
				<p>
					Her passion for hair, tied with her passion for travel, has given her many opportunities over the years. Including her favourite opportunity: Working as a stylist in five continents while travelling and living in places like Australia and New Zealand.
				</p>
				<p>
					Because beauty trends come and go, there is always more to learn in the hair world. Jacky regularly attends classes in both Vancouver and the lower Vancouver Island area, learning new techniques from other professionals in the field. This constant continuation of learning allows her to never stop growing as a stylist and ensures she is able to achieve whatever look you’re after.
				</p>
			</div>
		</div>

		<div class="about-polaroid rotate-1 bg-white p-4 pb-7 shadow-2xl shadow-rosewood/15">
			<div class="about-placeholder about-placeholder-experience relative overflow-hidden" role="img" aria-label="Placeholder for Jacky's hair experience">
				<div class="about-placeholder-grid" aria-hidden="true"></div>
				<span class="about-placeholder-label">Experience</span>
			</div>
			<div class="pt-5 text-center">
				<p class="font-display text-4xl font-semibold leading-none text-rosewood">16+ years</p>
				<p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-clay">Five continents</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-cream px-4 py-16 sm:px-6 md:py-20 lg:px-8">
	<div class="mx-auto max-w-5xl rounded-3xl border border-sand/70 bg-background p-6 text-center md:p-8">
		<p class="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Get in Touch</p>
		<h2 class="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">EMAIL | HAIRBYJACKYPOHL@GMAIL.COM</h2>
		<p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
			Reach out for a consultation, or use Vagaro when you’re ready to book.
		</p>
		<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
			<Button href={`mailto:${site.email}`} variant="outline" size="lg" class="rounded-full border-sage/50 bg-surface text-moss hover:bg-sage/10">
				Email Jacky
			</Button>
			<Button href={site.bookingUrl} target="_blank" rel="noreferrer" size="lg" class="rounded-full bg-moss text-cream hover:bg-rosewood">
				Book through Vagaro
				<ArrowRightIcon class="size-4" aria-hidden="true" />
			</Button>
		</div>
	</div>
</section>

<BookingCTA />

<style>
	.about-polaroid {
		position: relative;
		isolation: isolate;
		max-width: 28rem;
		margin-inline: auto;
	}

	.about-polaroid::before {
		content: "";
		position: absolute;
		top: -0.8rem;
		left: 50%;
		z-index: 2;
		height: 1.45rem;
		width: 5.75rem;
		translate: -50% 0;
		rotate: -2deg;
		border: 1px solid rgba(198, 197, 177, 0.72);
		background: rgba(241, 236, 223, 0.72);
		box-shadow: 0 0.45rem 1rem rgba(90, 66, 55, 0.08);
		backdrop-filter: blur(4px);
	}

	.about-placeholder {
		display: grid;
		aspect-ratio: 4 / 5;
		place-items: center;
		background: var(--about-placeholder-visual);
	}

	.about-placeholder::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(125deg, rgba(241, 236, 223, 0.42), transparent 36%);
	}

	.about-placeholder-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(241, 236, 223, 0.18) 1px, transparent 1px),
			linear-gradient(90deg, rgba(241, 236, 223, 0.18) 1px, transparent 1px);
		background-size: 2.1rem 2.1rem;
		mix-blend-mode: soft-light;
		opacity: 0.7;
	}

	.about-placeholder-label {
		position: relative;
		z-index: 1;
		border: 1px solid rgba(241, 236, 223, 0.46);
		background: rgba(37, 41, 31, 0.24);
		padding: 0.45rem 0.9rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--salon-cream);
		backdrop-filter: blur(6px);
	}

	.about-placeholder-jacky {
		--about-placeholder-visual: radial-gradient(circle at 24% 22%, rgba(241, 236, 223, 0.66), transparent 26%), linear-gradient(145deg, #5a4237, #9f7258 45%, #6f7f5f);
	}

	.about-placeholder-salon {
		--about-placeholder-visual: radial-gradient(circle at 72% 18%, rgba(241, 236, 223, 0.72), transparent 28%), linear-gradient(135deg, #c8c5ad, #9f7258 48%, #43533a);
	}

	.about-placeholder-experience {
		--about-placeholder-visual: radial-gradient(circle at 50% 28%, rgba(241, 236, 223, 0.82), transparent 30%), linear-gradient(145deg, #43533a, #6f7f5f 52%, #c8c5ad);
	}
</style>
