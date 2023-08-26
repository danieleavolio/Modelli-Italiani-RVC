<script lang="ts">
	import type { ItemDAO } from '$lib/classes';
	import { NotificationService } from '@dflare/svelte-enhanced-notifications';
	export let item: ItemDAO;
	let pagedata: HTMLElement;

	

	const CUSTOM_LOCATIONS = {
		center: {
			zIndex: 1000,
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			position: "fixed",
		}
	}

	let notificationService:NotificationService;

	import { createEventDispatcher, onMount } from 'svelte';

	onMount(() => {
		pagedata.addEventListener('mousemove', (e) => {
			let rect = pagedata.getBoundingClientRect();
			const left = e.clientX - rect.left;
			const top = e.clientY - rect.top;
			pagedata.style.setProperty('--left', `${left}px`);
			pagedata.style.setProperty('--top', `${top}px`);
		});
	});

	const dispatch = createEventDispatcher();

	// On click, copy the item.link in the clipboard
	const copy = () => {

		dispatch('copy', {
			text: item.link
		});
	};
</script>

<div
	bind:this={pagedata}
	class="item page-data {item.tipo.split(' ')[item.tipo.split(' ').length - 2].toLowerCase()}"
	style="--theme: var(--{item.tipo.split(' ')[item.tipo.split(' ').length - 2].toLowerCase()}); "
>
	<h2>{item.strong_text}</h2>
	<h3>{item.tipo}</h3>
	<p>{item.autore}</p>
	<p>{item.descrizione}</p>
	<img src={item.img_src} alt="" />
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="download-copy">
		<a rel="external" target="_blank" class="button" href={item.link}> DOWNLOAD </a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span on:click={()=>copy()} class="material-symbols-outlined copy"> content_copy </span>
	</div>
	<div class="div" style="" />
	<NotificationService  bind:this={notificationService} locations={CUSTOM_LOCATIONS} location="center" />
</div>

<style>
	* {
		--creator: rgb(255, 92, 92, 0.2);
		--cantanti: rgb(92, 255, 92, 0.2);
		--famosi: rgb(92, 92, 255, 0.2);
		--videogiochi: rgb(255, 255, 92, 0.2);
		--altro: rgb(255, 190, 92, 0.2);
	}

	h2,
	h3,
	p,
	a,
	span {
		z-index: 2;
	}
	.page-data {
		--left: 0px;
		--top: 0px;
		position: relative;
		overflow: hidden;
	}

	.page-data::before {
		content: '';
		border-radius: 50%;
		width: 20em;
		height: 20em;
		background-color: var(--theme);
		position: absolute;
		left: var(--left);
		top: var(--top);
		transform: translate(-50%, -50%) scale(1.5);
		z-index: 0;
		filter: blur(30px);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.page-data:hover::before {
		opacity: 1;
	}

	a {
		text-decoration: none;
		color: black;
		font-weight: 600;
		z-index: 2;
	}

	img {
		border: 1px solid #ececec;
	}
	.item {
		width: 300px;
		margin: 1em;
		background-color: rgb(52, 52, 52);
		display: grid;
		grid-template-rows: 1fr 0.5fr 1fr 0.5fr;
		padding: 1em;
		gap: 0.3em;
		border-radius: 1em;
		place-items: center;
		color: #ececec;
		transition: all 0.2s ease-in-out;
		z-index: 1;
	}

	.download-copy {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		flex: 1 3;
		width: 100%;
	}

	.copy {
		border: 2px solid #ececec;
		border-radius: 100%;
		padding: 0.3em;
		transition: all 0.6s ease-in-out;
		cursor: pointer;
	}

	.copy:hover {
		background-color: #ececec;
		color: black;
		transform: rotate(360deg);
	}

	.item img {
		height: auto;
		border-radius: 100%;
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}

	.creator,
	.creator .button {
		border: rgb(255, 92, 92) 2px solid;
	}

	.creator .button:hover {
		background-color: rgb(255, 92, 92);
	}

	.cantanti,
	.cantanti .button {
		border: rgb(92, 255, 92) 2px solid;
	}

	.cantanti .button:hover {
		background-color: rgb(92, 255, 92);
		color: #222;
	}

	.famosi,
	.famosi .button {
		border: rgb(92, 92, 255) 2px solid;
	}

	.famosi .button:hover {
		background-color: rgb(92, 92, 255);
	}

	.film\/tv,
	.film\/tv .button {
		border: rgb(75, 255, 195) 2px solid;
	}

	.film\/tv .button:hover {
		background-color: rgb(75, 255, 195);
		color: #222;
	}

	.videogiochi,
	.videogiochi .button {
		border: rgb(255, 255, 92) 2px solid;
	}

	.videogiochi .button:hover {
		background-color: rgb(255, 255, 92);
		color: #222;
	}

	.altro,
	.altro .button {
		border: rgb(255, 190, 92) 2px solid;
	}

	.altro .button:hover {
		background-color: rgb(255, 190, 92);
		color: #222;
	}

	.button {
		padding: 0.5em;
		font-size: clamp(0.7em, 1em, 1.5em);
		border-radius: 0.5em;
		text-align: center;
		width: 100%;
		margin: 1em;
		transition: all 0.3s ease-in-out;
		border: none;
		outline: none;
		cursor: pointer;
		text-transform: uppercase;
		background: none;
		color: #ececec;
		border: 1px solid #ececec;
		z-index: 2;
	}
</style>
