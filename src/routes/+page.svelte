<script lang="ts">
	import Item from '$lib/components/Item.svelte';

	import type { ItemDAO } from '$lib/classes';
	import { NotificationService } from '@dflare/svelte-enhanced-notifications';
	
	export let data: any;

	const NEW_CONFIGS = {
		center: {
			zIndex: 1000,
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			position: "fixed",
		}
	}

	
	let dataset: ItemDAO[] = data.props.dataset.data;
	let filteredDataset: ItemDAO[] = dataset;
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

	const copyLink = (event:Event) =>{
		
		let notification = {
			title: 'Copiato',
			message: 'Link copiato negli appunti',
			variant: 'success',
			autoDismissible: true,
			countdownDuration: 2000
		};

		// Copy link to clipboard
		navigator.clipboard.writeText((event as CustomEvent).detail.text);

		

		notficationService.push(notification);
	}

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<svelte:head>
	<title>Lista modelli Italiani 🇮🇹</title>
</svelte:head>
<NotificationService bind:this={notficationService} location="center" locations={NEW_CONFIGS}/>
<main>
	<!-- svelte-ignore a11y-missing-content -->
	<a
		class="button github"
		rel="external"
		target="_blank"
		href="https://github.com/danieleavolio/Modelli-Italiani-RVC">GITHUB REPOSITORY</a
	>
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
		<span class="clear" on:click={() => (inputFilter.value = '')}> ❌ </span>
	</div>
	<div class="type-selector">
		<button on:click={() => filterByTag('Content Creator')} class="button creator"
			>Content Creator</button
		>
		<button on:click={() => filterByTag('Cantanti')} class="button cantanti">Cantanti</button>
		<button on:click={() => filterByTag('Personaggi Famosi')} class="button famosi"
			>Personaggi Famosi</button
		>
		<button
			on:click={() => filterByTag('Attori, Doppiatori e Conduttori Film/TV')}
			class="button film/tv"
		>
			Attori, Doppiatori e Conduttori Film/TV
		</button>
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
				<Item {item} on:copy={copyLink}/>
				{/each}
	</div>
	<button on:click={() => scrollTop()} class="back-top">BACK TOP</button>
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

	

	.search {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1em auto;
		gap: 0.2em;
		width: 100%;
		max-width: 600px;
		position: relative;
	}

	.clear {
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

	/* animation for rainbow border colors for input type text */
	input[type='text'] {
		animation: rainbow 3s ease-in-out infinite;
	}

	@keyframes rainbow {
		0% {
			border: 3px solid #ff6d6d;
		}
		10% {
			border: 3px solid #ffda6d;
		}
		20% {
			border: 3px solid #fff18b;
		}
		30% {
			border: 3px solid #cfff6d;
		}
		40% {
			border: 3px solid #6dff6d;
		}
		50% {
			border: 3px solid #6ddfff;
		}
		60% {
			border: 3px solid #6d8aff;
		}
		70% {
			border: 3px solid #c86dff;
		}
		80% {
			border: 3px solid #ff6dd6;
		}
		90% {
			border: 3px solid #ff6d8b;
		}
		100% {
			border: 3px solid #ff6d6d;
		}
	}

	.type-selector {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1em;
		margin: 1em auto;
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

	.creator{
		border: rgb(255, 92, 92) 2px solid;
	}

	.type-selector .creator:hover {
		background-color: rgb(255, 92, 92);
	}

	.cantanti{
		border: rgb(92, 255, 92) 2px solid;
	}

	.type-selector .cantanti:hover {
		background-color: rgb(92, 255, 92);
		color: #222;
	}

	.famosi{
		border: rgb(92, 92, 255) 2px solid;
	}

	.type-selector .famosi:hover {
		background-color: rgb(92, 92, 255);
	}

	.film\/tv {
		border: rgb(75, 255, 195) 2px solid;
	}

	.type-selector .film\/tv:hover {
		background-color: rgb(75, 255, 195);
		color: #222;
	}

	.videogiochi{
		border: rgb(255, 255, 92) 2px solid;
	}

	.type-selector .videogiochi:hover {
		background-color: rgb(255, 255, 92);
		color: #222;
	}

	.altro{
		border: rgb(255, 190, 92) 2px solid;
	}

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

	.github {
		background-color: #ececec;
		color: black;
	}

	.github:hover {
		background-color: #222;
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
