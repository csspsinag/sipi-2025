<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';

	// DayJS Imports
	import dayjs from 'dayjs';
	import toObject from 'dayjs/plugin/toObject.js';
	import duration from 'dayjs/plugin/duration.js';
	dayjs.extend(toObject);
	dayjs.extend(duration);

	// Props
	let {
		date
	}: {
		date: dayjs.Dayjs | undefined;
	} = $props();

	// Number Format: 0x : 0x : 0x : 0x
	const format = {
		style: 'decimal',
		minimumIntegerDigits: 2,
		maximumFractionDigits: 0,
		roundingMode: 'floor'
	};

	let anchorTime: dayjs.Dayjs = $state(getContext('timeAnchor') ?? dayjs());
	function updateDeterminer(): () => dayjs.Dayjs {
		if (getContext('timeAnchor')) {
			return () => {
				return getContext('timeAnchor');
			};
		}
		return () => {
			return dayjs();
		};
	}
	const updater = updateDeterminer();

	function countdownInitializer(date: dayjs.Dayjs): {
		days: () => number;
		hours: () => number;
		minutes: () => number;
		seconds: () => number;
	} {
		const electionCountdownInit = $derived(dayjs.duration(dayjs(date).diff(anchorTime)));
		return {
			days: () => electionCountdownInit.asDays(),
			hours: () => electionCountdownInit.hours(),
			minutes: () => electionCountdownInit.minutes(),
			seconds: () => electionCountdownInit.seconds()
		};
	}
	const countdown = (() => {
		if (!date) return countdownInitializer(dayjs());
		return countdownInitializer(date);
	})();

	onMount(() => {
		const interval = setInterval(() => {
			anchorTime = updater();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="cd-timer">
	<NumberFlowGroup>
		<div class="countdown-display">
			<NumberFlow value={countdown.days()} {format} trend="0" />
			<p>Days</p>
		</div>
		<p class="separator">:</p>
		<div class="countdown-display">
			<NumberFlow value={countdown.hours()} {format} trend="0" />
			<p>Hours</p>
		</div>
		<p class="separator">:</p>
		<div class="countdown-display">
			<NumberFlow value={countdown.minutes()} {format} trend="0" />
			<p>Minutes</p>
		</div>
		<p class="separator">:</p>
		<div class="countdown-display">
			<NumberFlow value={countdown.seconds()} {format} trend="0" />
			<p>Seconds</p>
		</div>
	</NumberFlowGroup>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

	.cd-timer {
		color: #d31f72;
		font-variant-numeric: tabular-nums;

		margin: -7% 0 -3%;
		padding: 0;
		width: 100%;

		container-type: inline-size;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
	}

	:is(.countdown-display) {
		display: flex;
		flex-wrap: nowrap;
		flex-shrink: 1;
		flex-direction: column;
		align-items: center;

		font-family: 'Bricolage Grotesque', sans-serif !important;
		font-size: clamp(1rem, 10cqw, 6rem);
		font-weight: 700;

		p {
			font-size: clamp(0.25rem, 3cqw, 1rem);
			font-weight: 600;
			text-align: center;
			font-variant-caps: all-petite-caps;
			margin: calc(-1.5rem + 0.5cqh) auto 0;
			color: #248381;
		}
	}

	.separator {
		display: inline;
		vertical-align: center;
		font-size: clamp(1rem, 10cqw, 6rem);
	}
</style>
