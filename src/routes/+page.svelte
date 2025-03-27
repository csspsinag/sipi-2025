<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';

	import toObject from 'dayjs/plugin/toObject.js';
	import duration from 'dayjs/plugin/duration.js';
	import sipiLogo from '$lib/img/sipi25-logo+year.png';

	dayjs.extend(toObject);
	dayjs.extend(duration);

	const format = {
		style: 'decimal',
		minimumIntegerDigits: 2,
		maximumFractionDigits: 0
	};
	const csspElection = {
		filingCocStart: dayjs('2025-04-07'),
		filingCocEnd: dayjs('2025-04-14'),
		cocDeliberationStart: dayjs('2025-04-14'),
		cocDeliberationEnd: dayjs('2025-04-16'),
		candidateListReleaseInitial: dayjs('2025-04-16'),
		cocProtestStart: dayjs('2025-04-21'),
		cocProtestEnd: dayjs('2025-04-24 12:00'),
		candidateListReleaseFinal: dayjs('2025-04-24 15:00'),
		campaignPeriodStart: dayjs('2025-04-28'),
		campaignPeriodEnd: dayjs('2025-05-14'),
		campaignMaterialsEnd: dayjs('2025-05-13'),
		mitingDeAvance: dayjs('2025-05-14'),
		electionStart: dayjs('2025-05-15 08:00'),
		electionEnd: dayjs('2025-05-16 17:00')
	};

	let anchorTime = $state(new Date());
	let electionCountdownInit = $derived(
		dayjs.duration(dayjs(csspElection.electionStart).diff(anchorTime))
	);
	let electionCountdownDays = $derived(electionCountdownInit.asDays());
	let electionCountdownHours = $derived(electionCountdownInit.hours());
	let electionCountdownMinutes = $derived(electionCountdownInit.minutes());
	let electionCountdownSeconds = $derived(electionCountdownInit.seconds());

	onMount(() => {
		const interval = setInterval(() => {
			anchorTime = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="timer">
	<img src={sipiLogo} id="sipiLogo" />
	<h2>Days until the CSSP SC election</h2>
	<div class="cd-timer">
		<NumberFlowGroup>
			<div class="countdown-display">
				<NumberFlow value={electionCountdownDays} {format} trend="0" />
				<p>Days</p>
			</div>
			<p class="separator">:</p>
			<div class="countdown-display">
				<NumberFlow value={electionCountdownHours} {format} trend="0" />
				<p>Hours</p>
			</div>
			<p class="separator">:</p>
			<div class="countdown-display">
				<NumberFlow value={electionCountdownMinutes} {format} trend="0" />
				<p>Minutes</p>
			</div>
			<p class="separator">:</p>
			<div class="countdown-display">
				<NumberFlow value={electionCountdownSeconds} {format} trend="0" />
				<p>Seconds</p>
			</div>
		</NumberFlowGroup>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

	* {
		font-family: 'Anybody', sans-serif;
	}

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

	#sipiLogo {
		width: 25vw;
		margin-top: -5vh;
	}

	.timer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-variant-numeric: tabular-nums;
		height: 100vmax;
	}

	.countdown-display {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		font-size: 6rem;
		font-weight: 700;
		font-family: 'Bricolage Grotesque', sans-serif !important;

		p {
			font-size: 1rem;
			font-weight: 400;
			text-align: center;
			font-variant-caps: all-petite-caps;
			margin: -1rem auto 0;
		}
	}

	h2 {
		margin: 0;
		font-weight: 400;
	}

	.separator {
		display: inline;
		vertical-align: center;
		font-size: 6rem;
	}
</style>
