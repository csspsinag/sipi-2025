<script lang="ts">
	import { electionDates, electionDatesLookup } from '$lib/dates';
	import sipiLogo from '$lib/img/sipi25-logo+year.png';
	import Timer from '$lib/components/Timer.svelte';
	import TimelineWrapper from '$lib/components/TimelineWrapper.svelte';
	import '$lib/app.css';

	import { onMount } from 'svelte';
	import { setContext } from 'svelte';

	import dayjs from 'dayjs';

	let timeAnchor = $state(dayjs());

	onMount(() => {
		const interval = setInterval(() => {
			timeAnchor = dayjs();
			setContext('timeAnchor', timeAnchor);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>SIPI 2025 Election Countdown • SINAG</title>
	<meta name="description" content="SIPI 2025 - Election Countdown" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:site_name" content="SINAG CSSP" />
	<meta property="og:title" content="SIPI 2025 Election Countdown • SINAG" />
	<meta
		property="og:description"
		content="Countdown timers for CSSP-related election events for 2025."
	/>
	<meta property="og:image" content="https://sinag.press/sipi/2025/sipi-wide.png" />
	<meta property="og:url" content="http://sinag.press/sipi/2025/" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="main-page">
	<div class="central-timer">
		<img src={sipiLogo} id="sipiLogo" />
		<h2>Days until the CSSP SC election</h2>
		<Timer date={electionDatesLookup.get('updElectionStart')!.date} />
	</div>

	<div class="timeline">
		<TimelineWrapper type="multiple" items={electionDates} />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	:global(body::before) {
		content: '';
		position: fixed;
		top: -25lvh;
		left: 0;
		width: 100lvw;
		height: 150lvh;
		background: radial-gradient(ellipse at center, #fff, #d5d5d5 100%);
		background-repeat: no-repeat;
		background-position: center;
		overflow: hidden;
		z-index: -1;
	}

	.main-page {
		padding-bottom: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.timeline {
		width: clamp(450px, 50vw, 750px);
	}

	@media (max-width: 800px) {
		.timeline {
			width: 100vw;
		}
	}

	.central-timer {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		font-variant-numeric: tabular-nums;
		min-width: 75vw;

		h2 {
			margin-bottom: clamp(0, 4vw, 3rem);
			z-index: 1;
		}

		@media (max-width: 800px) {
			h2 {
				margin-bottom: -1em;
			}
		}
	}

	#sipiLogo {
		width: 25vw;
		margin: -5rem 0 -2rem 0;
		z-index: 2;
	}

	h2 {
		font-size: clamp(0.5rem, 2.5vw, 2rem);
		padding: 0.33rem 0;
		font-weight: 500;
		background-color: #a02ee9;
		color: #f7f7f7;
		width: 100%;
		text-align: center;
		mix-blend-mode: multiply;
	}
</style>
