<script>
	import Icon from '@iconify/svelte';
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView({
			behavior: 'smooth'
		});
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden><Icon icon="mdi:arrow-up" /></div>

<style>
	.back-to-top {
		opacity: 1;
		transition:
			opacity 0.5s,
			visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: white;
		background-color: #952bd9;
		padding: 1rem;
		padding-bottom: 0.75rem;
		border-radius: 50%;
		box-shadow: 0 0 10px #952bd9;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
