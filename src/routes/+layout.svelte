<script lang="ts">
	import type { LayoutData } from './$types';
	export const prerender = true;

	export let data: LayoutData;

	import '../app.css';
</script>

<main>
	<slot />
</main>
