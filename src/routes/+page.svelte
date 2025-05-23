<script lang="ts">
	import {
		turnoutDataDefault,
		turnoutResultDefault,
		turnoutResultPieceDefault
	} from '$lib/turnout-defaults';
	import { SECOND, subjectColors } from '$lib/constants';
	import { fetchTurnoutData, turnoutBreakdownLookup } from '$lib/turnout-fetch';
	import { electionDates, electionDatesLookup } from '$lib/dates';
	import sipiLogo from '$lib/img/sipi25-logo+year.png';
	import Timer from '$lib/components/Timer.svelte';
	import '$lib/app.css';

	import * as d3 from 'd3';

	import { onMount, setContext } from 'svelte';

	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc.js';
	import timezone from 'dayjs/plugin/timezone.js';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import SinagBar from '$lib/components/SinagBar.svelte';
	import MeterBar from '$lib/components/MeterBar.svelte';
	import FullIndicator from '$lib/components/FullIndicator.svelte';
	import type { TurnoutData, TurnoutDisplay } from '$lib/types';

	dayjs.extend(utc);
	dayjs.extend(timezone);

	let timeAnchor = $state(dayjs());
	setContext('timeZoneGuess', dayjs.tz.guess());
	setContext('timeAnchor', () => timeAnchor);

	let turnoutData: TurnoutData = $state(turnoutDataDefault());
	let turnoutDataLast: TurnoutData = $state(turnoutDataDefault());
	setContext('turnoutData', () => turnoutData);
	setContext('turnoutDataLast', () => turnoutDataLast);

	let turnoutResult: () => TurnoutDisplay = $state(turnoutResultDefault);
	turnoutResult = () => {
		return {
			collegewide:
				turnoutBreakdownLookup(turnoutData, 'Collegewide') ??
				turnoutResultPieceDefault('Collegewide'),
			anthropology:
				turnoutBreakdownLookup(turnoutData, 'Anthropology') ??
				turnoutResultPieceDefault('Anthropology'),
			geografia:
				turnoutBreakdownLookup(turnoutData, 'Geografia') ?? turnoutResultPieceDefault('Geografia'),
			kasaysayan:
				turnoutBreakdownLookup(turnoutData, 'Kasaysayan') ??
				turnoutResultPieceDefault('Kasaysayan'),
			linguistics:
				turnoutBreakdownLookup(turnoutData, 'Linguistics') ??
				turnoutResultPieceDefault('Linguistics'),
			philosophy:
				turnoutBreakdownLookup(turnoutData, 'Philosophy') ??
				turnoutResultPieceDefault('Philosophy'),
			politicalScience:
				turnoutBreakdownLookup(turnoutData, 'Political Science') ??
				turnoutResultPieceDefault('Political Science'),
			psychology:
				turnoutBreakdownLookup(turnoutData, 'Psychology') ??
				turnoutResultPieceDefault('Psychology'),
			sociology:
				turnoutBreakdownLookup(turnoutData, 'Sociology') ?? turnoutResultPieceDefault('Sociology'),
			nonMajor:
				turnoutBreakdownLookup(turnoutData, 'Non-Major') ?? turnoutResultPieceDefault('Non-Major'),
			populationInstitute:
				turnoutBreakdownLookup(turnoutData, 'Population Institute') ??
				turnoutResultPieceDefault('Population Institute')
		};
	};
	let turnoutResultLast: () => TurnoutDisplay = $state(turnoutResultDefault);
	turnoutResultLast = () => {
		return {
			collegewide:
				turnoutBreakdownLookup(turnoutDataLast, 'Collegewide') ??
				turnoutResultPieceDefault('Collegewide'),
			anthropology:
				turnoutBreakdownLookup(turnoutDataLast, 'Anthropology') ??
				turnoutResultPieceDefault('Anthropology'),
			geografia:
				turnoutBreakdownLookup(turnoutDataLast, 'Geografia') ??
				turnoutResultPieceDefault('Geografia'),
			kasaysayan:
				turnoutBreakdownLookup(turnoutDataLast, 'Kasaysayan') ??
				turnoutResultPieceDefault('Kasaysayan'),
			linguistics:
				turnoutBreakdownLookup(turnoutDataLast, 'Linguistics') ??
				turnoutResultPieceDefault('Linguistics'),
			philosophy:
				turnoutBreakdownLookup(turnoutDataLast, 'Philosophy') ??
				turnoutResultPieceDefault('Philosophy'),
			politicalScience:
				turnoutBreakdownLookup(turnoutDataLast, 'Political Science') ??
				turnoutResultPieceDefault('Political Science'),
			psychology:
				turnoutBreakdownLookup(turnoutDataLast, 'Psychology') ??
				turnoutResultPieceDefault('Psychology'),
			sociology:
				turnoutBreakdownLookup(turnoutDataLast, 'Sociology') ??
				turnoutResultPieceDefault('Sociology'),
			nonMajor:
				turnoutBreakdownLookup(turnoutDataLast, 'Non-Major') ??
				turnoutResultPieceDefault('Non-Major'),
			populationInstitute:
				turnoutBreakdownLookup(turnoutDataLast, 'Population Institute') ??
				turnoutResultPieceDefault('Population Institute')
		};
	};
	setContext('turnoutResult', () => turnoutResult);
	setContext('turnoutResultLast', () => turnoutResultLast);

	onMount(() => {
		const interval = setInterval(() => {
			timeAnchor = dayjs();
		}, 1 * SECOND);

		setTimeout(async () => {
			const fetch = await fetchTurnoutData('turnout.json');
			turnoutData = fetch;
			const fetchLast = await fetchTurnoutData('turnout-old.json');
			turnoutDataLast = fetchLast;
		}, 1 * SECOND);

		const turnoutCheck = setInterval(async () => {
			const fetch = await fetchTurnoutData('turnout.json');
			turnoutData = fetch;
			const fetchLast = await fetchTurnoutData('turnout-old.json');
			turnoutDataLast = fetchLast;
		}, 60 * SECOND);

		for (const id of [
			'anthropology-rate',
			'geografia-rate',
			'kasaysayan-rate',
			'linguistics-rate',
			'philosophy-rate',
			'political-science-rate',
			'psychology-rate',
			'sociology-rate',
			'non-major-rate',
			'population-institute-rate',
			'collegewide-rate'
		]) {
			const svg = d3.select(`.${id}`);
			const tooltipCtx = d3.select('.tooltip-container');
			svg
				.on('mouseover', () => {
					tooltipCtx.select(`.${id}`).style('opacity', '1');
				})
				.on('touchend', () => {
					tooltipCtx.select(`.${id}`).style('opacity', '1');
					setTimeout(() => {
						tooltipCtx.select(`.${id}`).style('opacity', '0');
					}, 1500);
				})
				.on('mousemove', (s) => {
					tooltipCtx
						.select(`.${id}`)
						.style('left', `calc(${Math.max(0, d3.pointer(s, tooltipCtx.node())[0])}px)`)
						.style('top', d3.pointer(s, tooltipCtx.node())[1] + 'px');
				})
				.on('mouseout touchmove touchcancel touchstart', () => {
					tooltipCtx.select(`.${id}`).style('opacity', '0');
				});
		}

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
		<img src={sipiLogo} id="sipiLogo" alt="SIPI logo" />
		<div class="bar-clamp collegewide-rate">
			<h3 style="color: #2f9291">Final Turnout</h3>
			<MeterBar {...turnoutResult().collegewide} subjectColor={subjectColors.collegewide.color} />
		</div>
	</div>
</div>

<div class="under-fold">
	<div class="anthropology-rate">
		<h3>Anthropology</h3>
		<MeterBar {...turnoutResult().anthropology} subjectColor={subjectColors.anthropology.color} />
	</div>
	<div class="geografia-rate">
		<h3>Geografia</h3>
		<MeterBar {...turnoutResult().geografia} subjectColor={subjectColors.geografia.color} />
	</div>
	<div class="kasaysayan-rate">
		<h3>Kasaysayan</h3>
		<MeterBar {...turnoutResult().kasaysayan} subjectColor={subjectColors.kasaysayan.color} />
	</div>
	<div class="linguistics-rate">
		<h3>Linguistics</h3>
		<MeterBar {...turnoutResult().linguistics} subjectColor={subjectColors.linguistics.color} />
	</div>
	<div class="philosophy-rate">
		<h3>Philosophy</h3>
		<MeterBar {...turnoutResult().philosophy} subjectColor={subjectColors.philosophy.color} />
	</div>
	<div class="political-science-rate">
		<h3>Political Science</h3>
		<MeterBar
			{...turnoutResult().politicalScience}
			subjectColor={subjectColors.politicalScience.color}
		/>
	</div>
	<div class="psychology-rate">
		<h3>Psychology</h3>
		<MeterBar {...turnoutResult().psychology} subjectColor={subjectColors.psychology.color} />
	</div>
	<div class="sociology-rate">
		<h3>Sociology</h3>
		<MeterBar {...turnoutResult().sociology} subjectColor={subjectColors.sociology.color} />
	</div>
	<div class="non-major-rate">
		<h3>Non-Major</h3>
		<MeterBar {...turnoutResult().nonMajor} subjectColor={subjectColors.nonMajor.color} />
	</div>
	<div class="population-institute-rate">
		<h3>Population Institute</h3>
		<MeterBar
			{...turnoutResult().populationInstitute}
			subjectColor={subjectColors.populationInstitute.color}
		/>
	</div>
</div>
<BackToTop />

<div class="tooltip-container">
	<div class="tooltip collegewide-rate">
		<FullIndicator color={subjectColors.collegewide.color} lookup="Collegewide" />
	</div>
	<div class="tooltip anthropology-rate">
		<FullIndicator color={subjectColors.anthropology.color} lookup="Anthropology" />
	</div>
	<div class="tooltip geografia-rate">
		<FullIndicator color={subjectColors.geografia.color} lookup="Geografia" />
	</div>
	<div class="tooltip kasaysayan-rate">
		<FullIndicator color={subjectColors.kasaysayan.color} lookup="Kasaysayan" />
	</div>
	<div class="tooltip linguistics-rate">
		<FullIndicator color={subjectColors.linguistics.color} lookup="Linguistics" />
	</div>
	<div class="tooltip philosophy-rate">
		<FullIndicator color={subjectColors.philosophy.color} lookup="Philosophy" />
	</div>
	<div class="tooltip political-science-rate">
		<FullIndicator color={subjectColors.politicalScience.color} lookup="Political Science" />
	</div>
	<div class="tooltip psychology-rate">
		<FullIndicator color={subjectColors.psychology.color} lookup="Psychology" />
	</div>
	<div class="tooltip sociology-rate">
		<FullIndicator color={subjectColors.sociology.color} lookup="Sociology" />
	</div>
	<div class="tooltip non-major-rate">
		<FullIndicator color={subjectColors.nonMajor.color} lookup="Non-Major" />
	</div>
	<div class="tooltip population-institute-rate">
		<FullIndicator color={subjectColors.populationInstitute.color} lookup="Population Institute" />
	</div>
</div>

<style>
	.tooltip-container {
		position: absolute;
		pointer-events: none;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		z-index: 999;

		> :global(*) {
			position: absolute;
			transform: translateX(-19.5%) translateY(2.5rem);
			opacity: 0;
		}
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

	.main-page {
		margin-bottom: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.timeline {
		width: min(90vw, 750px);
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
			margin-bottom: -2vw;
			z-index: 1;

			@media (min-width: 1800px) {
				margin-bottom: -2rem;
			}

			@media (max-width: 1200px) {
				margin-bottom: -1rem;
			}

			@media (max-width: 1000px) {
				margin-bottom: -2rem;
			}

			@media (max-width: 800px) {
				margin-bottom: -6vw;
			}
		}
	}

	#sipiLogo {
		height: clamp(10rem, 33vh, 20rem);
		margin: -5rem 0 calc(clamp(-0.5rem, 4vw, 4rem) * -1) 0;
		z-index: 2;
		pointer-events: none;
	}

	.under-fold {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 3rem;
		width: min(90vw, 750px);
		margin: 0 auto 3rem;

		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: -1rem;
			width: 100%;
		}
	}

	.collegewide-rate {
		display: flex;
		flex-direction: column;
		align-items: center;
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
