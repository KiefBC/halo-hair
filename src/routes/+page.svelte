<script lang="ts">
	import BookingCTA from "$lib/components/sections/BookingCTA.svelte";
	import ExperienceSection from "$lib/components/sections/ExperienceSection.svelte";
	import HeroSection from "$lib/components/sections/HeroSection.svelte";
	import LocationSection from "$lib/components/sections/LocationSection.svelte";
	import ReviewsCarousel from "$lib/components/sections/ReviewsCarousel.svelte";
	import ServicesPreview from "$lib/components/sections/ServicesPreview.svelte";
	import { site } from "$lib/data/site";
</script>

<svelte:head>
	<title>Halo Hair Studio | Hair Salon in Langford, BC</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content="Halo Hair Studio | Hair Salon in Langford, BC" />
	<meta property="og:description" content={site.description} />
</svelte:head>

<HeroSection />
<ServicesPreview />
<ReviewsCarousel />
<ExperienceSection />
<LocationSection />
<BookingCTA />
