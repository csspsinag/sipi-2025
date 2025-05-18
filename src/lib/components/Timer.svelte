<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';

	// DayJS Imports
	import dayjs from 'dayjs';
	import toObject from 'dayjs/plugin/toObject.js';
	import duration from 'dayjs/plugin/duration.js';
	dayjs.extend(toObject);
	dayjs.extend(duration);

	// Timezone Imports
	import utc from 'dayjs/plugin/utc.js';
	import timezone from 'dayjs/plugin/timezone.js';
	dayjs.extend(utc);
	dayjs.extend(timezone);
	dayjs.tz.setDefault('Asia/Manila');

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
		roundingMode: 'trunc'
	};

	let anchorTimeGetter: () => dayjs.Dayjs = getContext('timeAnchor')!;
	let anchorTime: dayjs.Dayjs = anchorTimeGetter();
	let timezoneGuess: string = getContext('timeZoneGuess');
	function updateDeterminer(): () => dayjs.Dayjs {
		return () => {
			return anchorTime.tz(timezoneGuess);
		};
	}
	const updater = updateDeterminer();

	function countdownInitializer(date: dayjs.Dayjs): {
		asMonths: () => number;
		asDays: () => number;
		months: () => number;
		days: () => number;
		hours: () => number;
		minutes: () => number;
		seconds: () => number;
	} {
		const electionCountdownInit = $derived(
			dayjs.duration(dayjs(date).diff(anchorTimeGetter().tz(timezoneGuess)))
		);
		return {
			asMonths: () => electionCountdownInit.asMonths(),
			asDays: () => electionCountdownInit.asDays(),
			months: () => electionCountdownInit.months(),
			days: () => electionCountdownInit.days(),
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
		{#if countdown.months() > 0}
			<div class="countdown-display">
				<NumberFlow value={countdown.months()} {format} trend="0" />
				<p>Months</p>
			</div>
			<p class="separator">:</p>
		{/if}
		{#if countdown.asMonths() > 0 && countdown.asDays() >= 0}
			<div class="countdown-display">
				<NumberFlow value={countdown.days()} {format} trend="0" />
				<p>Days</p>
			</div>
			<p class="separator">:</p>
		{/if}
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

		margin: -2cqw 0 0;

		@media (min-width: 1800px) {
			margin-top: -1.5cqw;
		}
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
		font-size: clamp(1rem, 12cqw, 8rem);
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
