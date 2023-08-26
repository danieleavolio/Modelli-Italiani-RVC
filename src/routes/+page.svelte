<script lang="ts">
	import type { Item } from '$lib/classes';
	import { Notification, NotificationService } from '@dflare/svelte-enhanced-notifications';

	// get fata from +page.server.ts
	export let data: any;
	import { flip } from 'svelte/animate';
	let dataset: Item[] = data.props.dataset.data;
	let filteredDataset: Item[] = dataset;
	let inputFilter: HTMLInputElement;
	let isTagSelected: boolean = false;
	let notficationService: NotificationService;
	let datasetToRender = filteredDataset;

	$: datasetToRender = filteredDataset;

	const filterByTag = (tag: string) => {
		filteredDataset = dataset.filter((item) => item.tipo.includes(tag));
		inputFilter.value = '';
		isTagSelected = true;

		// Scroll to the first elemt with "item" class
		setTimeout(() => {
			let firstItem = document.querySelector('.item');
			firstItem!.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	// Filter by input text search having some ms of delay, if the tag is selected, use filteredDataset instead of dataset. If the input is empty, return empty array
	let timeout: any;
	const filterByText = (e: any) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			datasetToRender = filteredDataset.filter((item) => {
				return (
					item.strong_text.toLowerCase().includes(e.target.value.toLowerCase()) ||
					item.tipo.toLowerCase().includes(e.target.value.toLowerCase()) ||
					item.autore.toLowerCase().includes(e.target.value.toLowerCase()) ||
					item.descrizione.toLowerCase().includes(e.target.value.toLowerCase())
				);
			});

			if (datasetToRender.length === 0) {
				let notification = {
					title: 'Nessun risultato',
					message: 'Nessun risultato trovato, prova a cercare per nome, tipo, autore o descrizione',
					variant: 'error',
					autoDismissible: true,
					countdownDuration: 2000
				};

				notficationService.push(notification);
			}
		}, 300);
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<svelte:head>
	<title>Lista modelli Italiani 🇮🇹</title>
</svelte:head>
<main>
	<h1>Lista dei modelli Italiani &#x1f1ee;&#x1f1f9;</h1>
	<div class="search">
		<input
			bind:this={inputFilter}
			on:input={filterByText}
			type="text"
			placeholder="Cerca per nome, tipo, autore o descrizione"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span on:click={()=> inputFilter.value=''}> ❌ </span>
	</div>
	<div class="type-selector">
		<button on:click={() => filterByTag('Content Creator')} class="button creator"
			>Content Creator</button
		>
		<button on:click={() => filterByTag('Cantanti')} class="button cantanti">Cantanti</button>
		<button on:click={() => filterByTag('Personaggi Famosi')} class="button famosi"
			>Personaggi Famosi</button
		>
		<button on:click={() => filterByTag('Personaggi Cartoni di Film/TV')} class="button film/tv">
			Personaggi Cartoni di Film/TV
		</button>
		<button on:click={() => filterByTag('Videogiochi')} class="button videogiochi">
			Videogiochi</button
		>
		<button on:click={() => filterByTag('Altro')} class="button altro"> Altro</button>
		<button
			on:click={() => ((filteredDataset = dataset), (isTagSelected = false))}
			class="button reset"
		>
			RESET</button
		>
	</div>
	<div class="content_frame">
		{#each datasetToRender as item, i (i)}
			<div
				class="item {item.tipo.split(' ')[item.tipo.split(' ').length - 2].toLowerCase()}"
				animate:flip
			>
				<h2>{item.strong_text}</h2>
				<h3>{item.tipo}</h3>
				<p>{item.autore}</p>
				<p>{item.descrizione}</p>
				<img src={item.img_src} alt="" />
				<a target="_blank" class="button" href={item.link}> Link </a>
			</div>
		{/each}
	</div>
	<button on:click={() => scrollTop()} class="back-top">BACK TOP</button>
	<NotificationService bind:this={notficationService} location="center" />
</main>

<style>
	h1 {
		color: #ececec;
		font-size: 3em;
	}
	main {
		text-align: center;
		padding: 2em;
		position: relative;
	}

	img {
		border: 1px solid #ececec;
	}

	.back-top {
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 1em;
		padding: 0.5em;
		border-radius: 0.5em;
		text-align: center;
		width: 100px;
		transition: all 0.3s ease-in-out;
		border: none;
		background-color: #fff18b;
		outline: none;
		cursor: pointer;
	}
	.content_frame {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1em;
		justify-items: center;
	}

	.search{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1em auto;
		gap: 0.2em;
		width: 100%;
		max-width: 600px;
		position: relative;
	}

	span{
		position: absolute;
		right: 0;
		cursor: pointer;
		border: 1px solid #ff6d6d;
		padding: 0.3em;
		border-radius: 100%;
	}

	input[type='text'] {
		width: 100%;
		padding: 0.5em;
		border-radius: 0.5em;
		text-align: center;
		margin: 1em auto;
		border: none;
		outline: none;
		font-size: 1.1em;
	}

	.type-selector {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1em;
		margin: 1em auto;
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
	}

	.item img {
		height: auto;
		border-radius: 100%;
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
	}

	a {
		text-decoration: none;
		color: black;
		font-weight: 600;
	}

	.creator,
	.creator .button {
		border: rgb(255, 92, 92) 2px solid;
	}

	.creator .button:hover,
	.type-selector .creator:hover {
		background-color: rgb(255, 92, 92);
	}

	.cantanti,
	.cantanti .button {
		border: rgb(92, 255, 92) 2px solid;
	}

	.cantanti .button:hover,
	.type-selector .cantanti:hover {
		background-color: rgb(92, 255, 92);
		color: #222;
	}

	.famosi,
	.famosi .button {
		border: rgb(92, 92, 255) 2px solid;
	}

	.famosi .button:hover,
	.type-selector .famosi:hover {
		background-color: rgb(92, 92, 255);
	}

	.film\/tv,
	.film\/tv .button {
		border: rgb(75, 255, 195) 2px solid;
	}

	.film\/tv .button:hover,
	.type-selector .film\/tv:hover {
		background-color: rgb(75, 255, 195);
		color: #222;
	}

	.videogiochi,
	.videogiochi .button {
		border: rgb(255, 255, 92) 2px solid;
	}

	.videogiochi .button:hover,
	.type-selector .videogiochi:hover {
		background-color: rgb(255, 255, 92);
		color: #222;
	}

	.altro,
	.altro .button {
		border: rgb(255, 190, 92) 2px solid;
	}

	.altro .button:hover,
	.type-selector .altro:hover {
		background-color: rgb(255, 190, 92);
		color: #222;
	}

	.reset {
		border: rgb(92, 16, 16) 2px solid;
		background-color: rgb(152, 40, 40);
	}

	.reset:hover {
		background-color: rgb(92, 16, 16);
		color: #ececec;
	}

	@media (max-width: 600px) {
		.type-selector {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			gap: 0;
		}
	}
</style>
