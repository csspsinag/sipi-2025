<script lang="ts">
	import { electionDates, electionDatesLookup } from '$lib/dates';
	import sipiLogo from '$lib/img/sipi25-logo+year.png';
	import Timer from '$lib/components/Timer.svelte';
	import '$lib/app.css';

	import { onMount } from 'svelte';
	import { setContext } from 'svelte';

	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc.js';
	import timezone from 'dayjs/plugin/timezone.js';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import SinagBar from '$lib/components/SinagBar.svelte';
	import MeterBar from '$lib/components/MeterBar.svelte';
	import FullIndicator from '$lib/components/FullIndicator.svelte';
	dayjs.extend(utc);
	dayjs.extend(timezone);

	const SECOND = 1000;
	const subjectColors = {
		collegewide: {
			color: '#3fb6b4',
			lightColor: '#57d2d0',
			emptyColor: '#fcdede'
		},
		anthropology: {
			color: '#de1d1d',
			lightColor: '#f05b5b',
			emptyColor: '#fcdede'
		},
		geografia: {
			color: '#399c13',
			lightColor: '#53bd2a',
			emptyColor: '#edffe6'
		},
		kasaysayan: {
			color: '#db9b23',
			lightColor: '#f5b642',
			emptyColor: '#fff4e0'
		},
		linguistics: {
			color: '#15bd96',
			lightColor: '#35e6bc',
			emptyColor: '#ccf0e7'
		},
		philosophy: {
			color: '#ebc610',
			lightColor: '#53532a',
			emptyColor: '#fff9de'
		},
		politicalScience: {
			color: '#3188ff',
			lightColor: '#7ab2ff',
			emptyColor: '#eaf3ff'
		},
		psychology: {
			color: '#a447e0',
			lightColor: '#ae32ff',
			emptyColor: '#f3e3ff'
		},
		sociology: {
			color: '#ff3084',
			lightColor: '#ff85b7',
			emptyColor: '#ffe3ee'
		},
		nonMajor: {
			color: '#c9c91d',
			lightColor: '#e3e32a',
			emptyColor: '#ede6e6'
		},
		populationInstitute: {
			color: '#d830ff',
			lightColor: '#eda3ff',
			emptyColor: '#fdf7ff'
		}
	};

	async function fetchTurnoutData(): Promise<{
		turnoutTime: string;
		turnoutData: {
			program: string;
			type: string;
			turnoutCount: number;
			turnoutCountMax: number;
		}[];
	}> {
		return fetch('turnout.json')
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				console.error(error);
			});
	}
	let turnoutData = $state({
		turnoutTime: '0000000000',
		turnoutData: [
			{
				program: 'Collegewide',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Collegewide',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Anthropology',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Anthropology',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Geografia',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Geografia',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Kasaysayan',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Kasaysayan',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Linguistics',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Linguistics',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Philosophy',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Philosophy',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Political Science',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Political Science',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Psychology',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Psychology',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Sociology',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Sociology',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Non-Major',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Population Institute',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			}
		]
	});
	let turnoutResult: () => {
		[key: string]: {
			value: number;
			max: number;
			valueLabel: string;
			count: () => number;
			countMax: () => number;
			label: string;
		};
	} = $state(() => {
		return {
			collegewide: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'CSSP turnout'
			},
			anthropology: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Anthropology'
			},
			geografia: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Geografia'
			},
			kasaysayan: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Kasaysayan'
			},
			linguistics: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Linguistics'
			},
			philosophy: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Philosophy'
			},
			politicalScience: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Political Science'
			},
			psychology: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Psychology'
			},
			sociology: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Sociology'
			},
			nonMajor: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Non-Major'
			},
			populationInstitute: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Population Institute'
			}
		};
	});

	async function fetchTurnoutDataLast(): Promise<{
		turnoutTime: string;
		turnoutData: {
			program: string;
			type: string;
			turnoutCount: number;
			turnoutCountMax: number;
		}[];
	}> {
		return fetch('turnout-old.json')
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				console.error(error);
			});
	}
	let turnoutDataLast = $state({
		turnoutTime: '0000000000',
		turnoutData: [
			{
				program: 'Collegewide',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Collegewide',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Anthropology',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Anthropology',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Geografia',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Geografia',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Kasaysayan',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Kasaysayan',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Linguistics',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Linguistics',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Philosophy',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Philosophy',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Political Science',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Political Science',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Psychology',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Psychology',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Sociology',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Sociology',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Non-Major',
				type: 'Undergraduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			},
			{
				program: 'Population Institute',
				type: 'Graduate',
				turnoutCount: 0,
				turnoutCountMax: 1
			}
		]
	});
	let turnoutResultLast: () => {
		[key: string]: {
			value: number;
			max: number;
			valueLabel: string;
			count: () => number;
			countMax: () => number;
			label: string;
		};
	} = $state(() => {
		return {
			collegewide: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'CSSP turnout'
			},
			anthropology: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Anthropology'
			},
			geografia: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Geografia'
			},
			kasaysayan: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Kasaysayan'
			},
			linguistics: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Linguistics'
			},
			philosophy: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Philosophy'
			},
			politicalScience: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Political Science'
			},
			psychology: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Psychology'
			},
			sociology: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Sociology'
			},
			nonMajor: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Non-Major'
			},
			populationInstitute: {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Population Institute'
			}
		};
	});

	let timeAnchor = $state(dayjs());
	setContext('timeZoneGuess', dayjs.tz.guess());
	setContext('timeAnchor', () => timeAnchor);

	function turnoutBreakdownLookup(source: typeof turnoutData, program: string) {
		let returnObject = {
			value: 0,
			max: 1,
			valueLabel: '0',
			count: () => 0,
			countMax: () => 1,
			label: ''
		};

		returnObject.count = () =>
			source.turnoutData
				.filter((turnout) => turnout.program === program)
				.flatMap((turnout) => turnout.turnoutCount)
				.reduce((a, b) => a + b);
		returnObject.countMax = () =>
			source.turnoutData
				.filter((turnout) => turnout.program === program)
				.flatMap((turnout) => turnout.turnoutCountMax)
				.reduce((a, b) => a + b);
		returnObject.value = (returnObject.count() / returnObject.countMax()) * 100;
		returnObject.max = returnObject.countMax();
		returnObject.valueLabel = `${returnObject.value} / ${returnObject.max}`;
		returnObject.label = program;

		return returnObject;
	}
	turnoutResult = () => {
		return {
			collegewide: turnoutBreakdownLookup(turnoutData, 'Collegewide') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Collegewide'
			},
			anthropology: turnoutBreakdownLookup(turnoutData, 'Anthropology') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Anthropology'
			},
			geografia: turnoutBreakdownLookup(turnoutData, 'Geografia') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Geografia'
			},
			kasaysayan: turnoutBreakdownLookup(turnoutData, 'Kasaysayan') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Kasaysayan'
			},
			linguistics: turnoutBreakdownLookup(turnoutData, 'Linguistics') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Linguistics'
			},
			philosophy: turnoutBreakdownLookup(turnoutData, 'Philosophy') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Philosophy'
			},
			politicalScience: turnoutBreakdownLookup(turnoutData, 'Political Science') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Political Science'
			},
			psychology: turnoutBreakdownLookup(turnoutData, 'Psychology') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1
			},
			sociology: turnoutBreakdownLookup(turnoutData, 'Sociology') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Sociology'
			},
			nonMajor: turnoutBreakdownLookup(turnoutData, 'Non-Major') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Non-Major'
			},
			populationInstitute: turnoutBreakdownLookup(turnoutData, 'Population Institute') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Population Institute'
			}
		};
	};

	turnoutResultLast = () => {
		return {
			collegewide: turnoutBreakdownLookup(turnoutDataLast, 'Collegewide') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Collegewide'
			},
			anthropology: turnoutBreakdownLookup(turnoutDataLast, 'Anthropology') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Anthropology'
			},
			geografia: turnoutBreakdownLookup(turnoutDataLast, 'Geografia') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Geografia'
			},
			kasaysayan: turnoutBreakdownLookup(turnoutDataLast, 'Kasaysayan') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Kasaysayan'
			},
			linguistics: turnoutBreakdownLookup(turnoutDataLast, 'Linguistics') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Linguistics'
			},
			philosophy: turnoutBreakdownLookup(turnoutDataLast, 'Philosophy') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Philosophy'
			},
			politicalScience: turnoutBreakdownLookup(turnoutDataLast, 'Political Science') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Political Science'
			},
			psychology: turnoutBreakdownLookup(turnoutDataLast, 'Psychology') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1
			},
			sociology: turnoutBreakdownLookup(turnoutDataLast, 'Sociology') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Sociology'
			},
			nonMajor: turnoutBreakdownLookup(turnoutDataLast, 'Non-Major') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Non-Major'
			},
			populationInstitute: turnoutBreakdownLookup(turnoutDataLast, 'Population Institute') ?? {
				value: 0,
				max: 1,
				valueLabel: '0',
				count: () => 0,
				countMax: () => 1,
				label: 'Population Institute'
			}
		};
	};

	onMount(() => {
		const interval = setInterval(() => {
			timeAnchor = dayjs();
		}, 1 * SECOND);

		const turnoutCheck = setInterval(async () => {
			const fetch = await fetchTurnoutData();
			const fetchLast = await fetchTurnoutDataLast();
			turnoutDataLast = fetchLast;
			turnoutData = fetch;
		}, 1 * SECOND);

		return () => {
			clearInterval(interval);
			clearInterval(turnoutCheck);
		};
	});
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>SIPI 2025 CSSP Turnout • SINAG</title>
	<meta name="description" content="Watch the turnout for CSSP-related election events for 2025." />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://sinag.press/sipi/2025" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="SIPI 2025 Election Turnout • SINAG" />
	<meta
		property="og:description"
		content="Watch the turnout for CSSP-related election events for 2025."
	/>
	<meta property="og:image" content="https://sinag.press/sipi/2025/sipi-wide.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="sinag.press" />
	<meta property="twitter:url" content="https://sinag.press/sipi/2025" />
	<meta name="twitter:title" content="SIPI 2025 Election Turnout • SINAG" />
	<meta
		name="twitter:description"
		content="Watch the turnout for CSSP-related election events for 2025."
	/>
	<meta name="twitter:image" content="https://sinag.press/sipi/2025/sipi-wide.png" />
</svelte:head>

<SinagBar>SIPI 2025 Turnout Tracker</SinagBar>
<div class="main-page">
	<div class="central-timer">
		<img src={sipiLogo} id="sipiLogo" />

		<div class="bar-clamp">
			<MeterBar {...turnoutResult().collegewide} {...subjectColors.collegewide} />
			<FullIndicator
				data={() => turnoutData}
				oldData={() => turnoutDataLast}
				color={subjectColors.collegewide}
				lookup="Collegewide"
			/>
		</div>
		<h2>Time Until CSSP Election End</h2>
		<Timer date={electionDatesLookup.get('updElectionEnd')!.date} />
	</div>
</div>

<div class="under-fold">
	<MeterBar {...turnoutResult().anthropology} {...subjectColors.anthropology} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.anthropology}
		lookup="Anthropology"
	/>
	<MeterBar {...turnoutResult().geografia} {...subjectColors.geografia} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.geografia}
		lookup="Geografia"
	/>
	<MeterBar {...turnoutResult().kasaysayan} {...subjectColors.kasaysayan} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.kasaysayan}
		lookup="Kasaysayan"
	/>
	<MeterBar {...turnoutResult().linguistics} {...subjectColors.linguistics} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.linguistics}
		lookup="Linguistics"
	/>
	<MeterBar {...turnoutResult().philosophy} {...subjectColors.philosophy} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.philosophy}
		lookup="Philosophy"
	/>
	<MeterBar {...turnoutResult().politicalScience} {...subjectColors.politicalScience} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.politicalScience}
		lookup="Political Science"
	/>
	<MeterBar {...turnoutResult().psychology} {...subjectColors.psychology} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.psychology}
		lookup="Psychology"
	/>
	<MeterBar {...turnoutResult().sociology} {...subjectColors.sociology} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.sociology}
		lookup="Sociology"
	/>
	<MeterBar {...turnoutResult().nonMajor} {...subjectColors.nonMajor} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.nonMajor}
		lookup="Non-Major"
	/>
	<MeterBar {...turnoutResult().populationInstitute} {...subjectColors.populationInstitute} />
	<FullIndicator
		data={() => turnoutData}
		oldData={() => turnoutDataLast}
		color={subjectColors.populationInstitute}
		lookup="Population Institute"
	/>
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

		.bar-clamp {
			width: clamp(90vw, 800px, 60vw);
		}

		h2 {
			margin-top: clamp(-0.5rem, 4vw, 3rem);
			margin-bottom: calc(clamp(-0.5rem, 4vw, 3rem) * -1);
			z-index: 1;
		}
	}

	.under-fold {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		gap: 3rem;
		width: 60%;

		margin-top: clamp(-0.5rem, 4vw, 4rem);
	}

	#sipiLogo {
		height: clamp(10rem, 33vh, 20rem);
		margin: -5rem 0 calc(clamp(-0.5rem, 4vw, 4rem) * -1) 0;
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
