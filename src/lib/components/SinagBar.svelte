<script lang="ts">
	import Icon from '@iconify/svelte';
	import { DropdownMenu } from 'bits-ui';
	import SinagLogo from '$lib/img/sinag_nameplate.png';

	import type { Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	let { children }: { children: Snippet } = $props();
	const items = [
		{ text: 'Turnout', href: '/sipi/2025', icon: 'tabler:chart-pie-filled' },
		{ text: 'Countdowns', href: '/sipi/2025/countdown', icon: 'ri:map-pin-time-fill' }
	];

	const years = [
		{ text: '2024', href: 'https://sinag.press/sipi/2024' },
		{ text: '2023', href: 'https://sinag.press/sipi/2023' },
		{ text: '2022', href: 'https://sinag.press/sipi/2022' },
		{ text: '2021', href: 'https://sinag.press/sipi/2021' }
	];

	function navigateTo(item: string, external = false) {
		return async () => {
			if (external) {
				window.open(item);
				return null;
			}
			await goto(item);
			return null;
		};
	}
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
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class="logo">
			<img src={SinagLogo} alt="Sinag Logo" />
		</DropdownMenu.Trigger>

		<DropdownMenu.Content>
			<DropdownMenu.Group aria-label="Navigation">
				{#each items as item}
					<DropdownMenu.Item textValue={item.text} onSelect={navigateTo(item.href)}
						><Icon icon={item.icon} height="0.75rem" /> {item.text}</DropdownMenu.Item
					>
				{/each}
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Group aria-label="Others">
				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger
						>Previous SIPI <Icon
							icon="tabler:arrow-right"
							style="transform: translateY(0.1rem);"
						/></DropdownMenu.SubTrigger
					>
					<DropdownMenu.SubContent>
						{#each years as year}
							<DropdownMenu.Item onclick={navigateTo(year.href, true)}
								>{year.text}
								<Icon
									icon="tabler:external-link"
									style="transform: translateY(0.1rem);"
								/></DropdownMenu.Item
							>
						{/each}
					</DropdownMenu.SubContent>
				</DropdownMenu.Sub>
				<DropdownMenu.Item textValue="SINAG" onSelect={navigateTo('https://sinag.press/news', true)}
					>SINAG Home <Icon
						icon="tabler:external-link"
						style="transform: translateY(0.1rem);"
					/></DropdownMenu.Item
				>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<div class="contents">
		{@render children()}
	</div>
	<div class="contact">
		<ul class="links">
			<li>
				<a href="https://www.facebook.com/csspsinag1968"
					><Icon icon="ic:baseline-facebook" color="#f4ba06" /></a
				>
			</li>
			<li>
				<a href="https://twitter.com/PahayagangKAPP"
					><Icon icon="prime:twitter" color="#f4ba06" /></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/csspsinag"
					><Icon icon="mdi:instagram" color="#f4ba06" /></a
				>
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

	:global([data-dropdown-menu-trigger]) {
		background: none;
		border: none;
	}

	:global([data-bits-floating-content-wrapper]) {
		background-color: #c2c2c2;
		color: #000;

		margin: 0;
		padding: 0.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
	}

	:global([data-dropdown-menu-item]) {
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;

		&:hover {
			background-color: #888;
			color: #fff;
		}
	}

	:global([data-dropdown-menu-separator]) {
		margin: 0.5rem 0;
		border-bottom: 1px solid #888;
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
</style>
