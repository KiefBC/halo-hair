<script lang="ts">
	import CameraIcon from "@lucide/svelte/icons/camera";
	import type { InstagramPost } from "$lib/types/instagram";

	let { post }: { post: InstagramPost } = $props();
</script>

<a
	href={post.url}
	target={post.url === "#" ? undefined : "_blank"}
	rel={post.url === "#" ? undefined : "noreferrer"}
	aria-label={`View Instagram placeholder: ${post.alt}`}
	class="group relative aspect-square overflow-hidden rounded-3xl border border-sand/60 shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rosewood/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
	style={`background: ${post.visual};`}
>
	<span class="sr-only">{post.alt}</span>
	<span class="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.48),transparent_30%),linear-gradient(to_top,rgba(43,37,32,0.42),transparent_58%)]"></span>
	<span class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-2xl border border-cream/35 bg-cream/80 px-3 py-2 text-xs font-semibold text-rosewood opacity-100 backdrop-blur transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
		{post.caption}
		<CameraIcon class="size-4" aria-hidden="true" />
	</span>
</a>
