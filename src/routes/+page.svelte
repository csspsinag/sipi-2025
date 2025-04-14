<script lang="ts">
	import { electionDates, electionDatesLookup } from '$lib/dates';
	import sipiLogo from '$lib/img/sipi25-logo+year.png';
	import Timer from '$lib/components/Timer.svelte';
	import TimelineWrapper from '$lib/components/TimelineWrapper.svelte';
	import '$lib/app.css';

	import { onMount } from 'svelte';
	import { setContext } from 'svelte';

	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc.js';
	import timezone from 'dayjs/plugin/timezone.js';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import SinagBar from '$lib/components/SinagBar.svelte';
	dayjs.extend(utc);
	dayjs.extend(timezone);

	let timeAnchor = $state(dayjs());
	setContext('timeZoneGuess', dayjs.tz.guess());
	setContext('timeAnchor', () => timeAnchor);

	onMount(() => {
		const interval = setInterval(() => {
			timeAnchor = dayjs();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>SIPI 2025 Election Countdown • SINAG</title>
	<meta name="description" content="Countdown timers for CSSP-related election events for 2025." />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://sinag.press/sipi/2025" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="SIPI 2025 Election Countdown • SINAG" />
	<meta
		property="og:description"
		content="Countdown timers for CSSP-related election events for 2025."
	/>
	<meta property="og:image" content="https://sinag.press/sipi/2025/sipi-wide.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="sinag.press" />
	<meta property="twitter:url" content="https://sinag.press/sipi/2025" />
	<meta name="twitter:title" content="SIPI 2025 Election Countdown • SINAG" />
	<meta
		name="twitter:description"
		content="Countdown timers for CSSP-related election events for 2025."
	/>
	<meta name="twitter:image" content="https://sinag.press/sipi/2025/sipi-wide.png" />
</svelte:head>

<SinagBar>SIPI 2025 Election Countdown</SinagBar>
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
<BackToTop />

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
			margin-bottom: clamp(1rem, 2vh, 4rem);
			z-index: 1;
		}

		@media (max-width: 1200px) {
			h2 {
				margin-bottom: -0.75rem;
			}
		}

		@media (max-width: 1000px) {
			h2 {
				margin-bottom: -1rem;
			}
		}

		@media (max-width: 800px) {
			h2 {
				margin-bottom: -1rem;
			}
		}
	}

	#sipiLogo {
		height: clamp(10rem, 33vh, 20rem);
		margin: -5rem 0 calc(clamp(-0.5rem, 4vw, 4rem) * -1) 0;
		z-index: 2;
	}

	h2 {
		font-size: clamp(1rem, 3vw, 2rem);
		padding: 0.33rem 0;
		font-weight: 500;
		background-color: #a02ee9;
		color: #f7f7f7;
		width: 100%;
		text-align: center;
		mix-blend-mode: multiply;
	}
</style>
