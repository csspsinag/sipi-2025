<script lang="ts">
	import Icon from '@iconify/svelte';
	import SinagLogo from '$lib/img/sinag_nameplate.png';

	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div data-sveltekit-preload-data="tap" class="sinag-sticky">
	<div class="logo">
		<a href="https://sinag.press/"><img src={SinagLogo} alt="Sinag Logo" /></a>
	</div>
	<div class="contents">
		{@render children()}
	</div>
	<div class="contact">
		<ul class="links">
			<li>
				<a href="https://www.facebook.com/csspsinag1968"><Icon icon="devicon:facebook" /></a>
			</li>
			<li>
				<a href="https://twitter.com/PahayagangKAPP"><Icon icon="skill-icons:twitter" /></a>
			</li>
			<li>
				<a href="https://www.instagram.com/csspsinag"><Icon icon="skill-icons:instagram" /></a>
			</li>
		</ul>
	</div>
</div>

<style>
	.sinag-sticky {
		box-sizing: border-box;
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #000;
		color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

		font-family: 'Open Sans', sans-serif;
		font-variation-settings: 'wdth' 85;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline-start: 1rem;
		padding-inline-end: 1rem;
		padding-block: 0.25rem;
		z-index: 1000;

		img {
			height: 2rem;
			display: block;
		}
	}

	.links {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		list-style: none;
		line-height: 100%;
		padding: 0 auto 0 auto;
		margin: 0 auto 0 auto;
	}

	.contents {
		font-size: clamp(0.25rem, 3vw, 1rem);

		@media screen and (max-width: 480px) {
			display: none;
		}
	}

	.logo {
		width: fit-content;
		flex-shrink: 0;
	}
</style>
