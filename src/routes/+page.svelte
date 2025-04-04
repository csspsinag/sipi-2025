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
		width: 50%;
	}

	.central-timer {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		font-variant-numeric: tabular-nums;
		min-width: 25vw;

		h2 {
			margin-bottom: -1rem;
			z-index: 1;
		}
	}

	#sipiLogo {
		width: 25vw;
		margin: -2rem 0;
	}

	h2 {
		font-size: clamp(0.5rem, 2.5vw, 2rem);
		margin: 0;
		padding: 0.33rem 0;
		font-weight: 500;
		background-color: #a02ee9;
		color: #f7f7f7;
		width: 100%;
		text-align: center;
		mix-blend-mode: multiply;
	}
</style>
