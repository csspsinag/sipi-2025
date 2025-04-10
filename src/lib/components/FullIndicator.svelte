<script lang="ts">
	import { onMount } from 'svelte';
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { Meter, useId } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { decimalize } from '$lib/decimalizer';

	let {
		data,
		oldData,
		lookup = 'Collegewide'
	}: {
		data: () => {
			collegewideTurnoutCount: number;
			collegewideTurnoutCountMax: number;
			undergradTurnoutCount: number;
			undergradTurnoutCountMax: number;
			gradTurnoutCount: number;
			gradTurnoutCountMax: number;
			programTurnout: {
				program: string;
				type: string;
				turnoutCount: number;
				turnoutCountMax: number;
			}[];
		};
		oldData: () => {
			collegewideTurnoutCount: number;
			collegewideTurnoutCountMax: number;
			undergradTurnoutCount: number;
			undergradTurnoutCountMax: number;
			gradTurnoutCount: number;
			gradTurnoutCountMax: number;
			programTurnout: {
				program: string;
				type: string;
				turnoutCount: number;
				turnoutCountMax: number;
			}[];
		};
		lookup:
			| 'Collegewide'
			| 'Anthropology'
			| 'Geografia'
			| 'Kasaysayan'
			| 'Linguistics'
			| 'Philosophy'
			| 'Political Science'
			| 'Psychology'
			| 'Sociology'
			| 'Non-Major'
			| 'Population Institute';
	} = $props();

	type CollegeSplits = {
		label: typeof lookup;
		turnoutResult: number;
		turnoutMax: number;
		undergradTurnout?: number;
		undergradMax?: number;
		gradTurnout?: number;
		gradMax?: number;
	};

	type CollegeDepartments = {
		label:
			| 'Anthropology'
			| 'Geografia'
			| 'Kasaysayan'
			| 'Linguistics'
			| 'Philosophy'
			| 'Political Science'
			| 'Psychology'
			| 'Sociology'
			| 'Collegewide';
		turnoutResult: number;
		turnoutMax: number;
		undergradTurnout: number;
		undergradMax: number;
		gradTurnout: number;
		gradMax: number;
	} & CollegeSplits;

	type PopulationInstitute = {
		label: 'Population Institute';
		turnoutResult: number;
		turnoutMax: number;
		gradTurnout: number;
		gradMax: number;
	} & CollegeSplits;

	type NonMajor = {
		label: 'Non-Major';
		turnoutResult: number;
		turnoutMax: number;
		undergradTurnout: number;
		undergradMax: number;
	} & CollegeSplits;

	type LookupResult = CollegeDepartments | PopulationInstitute | NonMajor;

	let dataSource = $state(data());
	function lookupTurnout(lookupSearch: typeof lookup): LookupResult {
		switch (lookupSearch) {
			case 'Collegewide':
				return {
					label: 'Collegewide',
					turnoutResult: dataSource.collegewideTurnoutCount,
					turnoutMax: dataSource.collegewideTurnoutCountMax,
					undergradTurnout: dataSource.undergradTurnoutCount,
					undergradMax: dataSource.undergradTurnoutCountMax,
					gradTurnout: dataSource.gradTurnoutCount,
					gradMax: dataSource.gradTurnoutCountMax
				};

			case 'Non-Major':
				return {
					label: lookupSearch,
					turnoutResult: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCount)
						.reduce((a, b) => a + b),
					turnoutMax: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCountMax)
						.reduce((a, b) => a + b),
					undergradTurnout: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCount!,
					undergradMax: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCountMax!
				};

			case 'Population Institute':
				return {
					label: lookupSearch,
					turnoutResult: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCount)
						.reduce((a, b) => a + b),
					turnoutMax: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCountMax)
						.reduce((a, b) => a + b),
					gradTurnout: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCount!,
					gradMax: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCountMax!
				};

			default:
				return {
					label: lookupSearch,
					turnoutResult: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCount)
						.reduce((a, b) => a + b),
					turnoutMax: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCountMax)
						.reduce((a, b) => a + b),
					undergradTurnout: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCount!,
					undergradMax: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCountMax!,
					gradTurnout: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Graduate')?.turnoutCount!,
					gradMax: dataSource.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Graduate')?.turnoutCountMax!
				};
		}
	}
	let lookupResult = $state(lookupTurnout(lookup));

	let dataSourceLast = $state(oldData());
	function lookupTurnoutLast(lookupSearch: typeof lookup): LookupResult {
		switch (lookupSearch) {
			case 'Collegewide':
				return {
					label: 'Collegewide',
					turnoutResult: dataSourceLast.collegewideTurnoutCount,
					turnoutMax: dataSourceLast.collegewideTurnoutCountMax,
					undergradTurnout: dataSourceLast.undergradTurnoutCount,
					undergradMax: dataSourceLast.undergradTurnoutCountMax,
					gradTurnout: dataSourceLast.gradTurnoutCount,
					gradMax: dataSourceLast.gradTurnoutCountMax
				};

			case 'Non-Major':
				return {
					label: lookupSearch,
					turnoutResult: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCount)
						.reduce((a, b) => a + b),
					turnoutMax: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCountMax)
						.reduce((a, b) => a + b),
					undergradTurnout: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCount!,
					undergradMax: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCountMax!
				};

			case 'Population Institute':
				return {
					label: lookupSearch,
					turnoutResult: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCount)
						.reduce((a, b) => a + b),
					turnoutMax: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCountMax)
						.reduce((a, b) => a + b),
					gradTurnout: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCount!,
					gradMax: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCountMax!
				};

			default:
				return {
					label: lookupSearch,
					turnoutResult: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCount)
						.reduce((a, b) => a + b),
					turnoutMax: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.flatMap((turnout) => turnout.turnoutCountMax)
						.reduce((a, b) => a + b),
					undergradTurnout: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCount!,
					undergradMax: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Undergraduate')?.turnoutCountMax!,
					gradTurnout: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Graduate')?.turnoutCount!,
					gradMax: dataSourceLast.programTurnout
						.filter((turnout) => turnout.program === lookupSearch)
						.find((turnout) => turnout.type === 'Graduate')?.turnoutCountMax!
				};
		}
	}
	let lookupResultLast = $state(lookupTurnoutLast(lookup));

	function updateLookupDataSource() {
		lookupResult = lookupTurnout(lookup);
	}
	function updateLookupDataSourceLast() {
		lookupResultLast = lookupTurnoutLast(lookup);
	}
	onMount(() => {
		setInterval(() => {
			dataSource = data();
			updateLookupDataSource();
			dataSourceLast = oldData();
			updateLookupDataSourceLast();
		}, 1000);
	});
</script>

<div class="container-lock">
	<NumberFlowGroup>
		<h2>{lookupResult.label}</h2>
		<div class="percentage">
			<NumberFlow
				value={decimalize((lookupResult.turnoutResult / lookupResult.turnoutMax) * 100, 2).value}
				format={'00'}
			/><span class="decimal-percent"
				>.<NumberFlow
					value={decimalize((lookupResult.turnoutResult / lookupResult.turnoutMax) * 100, 2)
						.decimals}
					format={'00'}
				/>%</span
			>
		</div>
		<div class="turnout-numbers">
			<div class="turnout-number">
				<NumberFlow value={lookupResult.turnoutResult} format={'0'} />/<NumberFlow
					value={lookupResult.turnoutMax}
					format={'0'}
				/>
			</div>
		</div>
		<div class="turnout-difference">
			<div
				class="turnout-number"
				style={lookupResult.turnoutResult / lookupResult.turnoutMax -
					lookupResultLast.turnoutResult / lookupResultLast.turnoutMax >
				0
					? 'color: green'
					: 'color: red'}
			>
				<NumberFlow
					value={lookupResult.turnoutResult / lookupResult.turnoutMax -
						lookupResultLast.turnoutResult / lookupResultLast.turnoutMax}
					format={{ style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
					prefix={lookupResult.turnoutResult / lookupResult.turnoutMax -
						lookupResultLast.turnoutResult / lookupResultLast.turnoutMax <
					0
						? ''
						: '+'}
					style=""
				/>
			</div>
		</div>
		{#if lookupResult.gradTurnout !== undefined && lookupResult.undergradTurnout === undefined}
			<div class="only-grad">Graduate only</div>
		{/if}
		{#if lookupResult.gradTurnout === undefined && lookupResult.undergradTurnout !== undefined}
			<div class="only-undergrad">Undergraduate only</div>
		{/if}
		{#if lookupResult.gradTurnout !== undefined && lookupResult.undergradTurnout !== undefined && lookupResult.gradTurnout + 1 && lookupResult.undergradTurnout + 1}
			<div class="ugg-split">
				UG <NumberFlow
					value={(lookupResult.undergradTurnout / lookupResult.turnoutResult) * 100}
					format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
				/>/<NumberFlow
					value={(lookupResult.gradTurnout / lookupResult.turnoutResult) * 100}
					format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
				/> GD
				<div
					class="ugg-split-fill"
					style="transform: translateX(calc(-{lookupResult.undergradTurnout /
						lookupResult.turnoutResult}%))"
				></div>
			</div>
		{:else}
			<div class="loading">Loading...</div>
		{/if}

		{#if lookup !== 'Collegewide'}
			<div class="representation">
				<div class="rep-rate">
					<NumberFlow
						value={lookupResult.turnoutResult / lookupTurnout('Collegewide').turnoutResult}
						format={{ style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
						suffix=" of the vote"
					/>
				</div>
				<div
					class="rep-error"
					style={lookupResult.turnoutResult / lookupTurnout('Collegewide').turnoutResult -
						lookupResult.turnoutMax / lookupTurnout('Collegewide').turnoutMax >
					0
						? 'color: green'
						: 'color: red'}
				>
					<NumberFlow
						value={(lookupResult.turnoutResult / lookupTurnout('Collegewide').turnoutResult -
							lookupResult.turnoutMax / lookupTurnout('Collegewide').turnoutMax) *
							100}
						format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
						prefix={lookupResult.turnoutResult / lookupTurnout('Collegewide').turnoutResult -
							lookupResult.turnoutMax / lookupTurnout('Collegewide').turnoutMax >
						0
							? '+'
							: ''}
						suffix="p.p."
					/>
				</div>
			</div>
		{/if}
	</NumberFlowGroup>
</div>

<style>
	.container-lock {
		--padding-value: clamp(0.75rem, 4vw, 1rem);
		container-type: inline-size;
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		width: min(90vw, 350px);
		padding: clamp(0.75rem, 4vw, 1rem) var(--padding-value) clamp(0.5rem, 2vw, 0.5rem);
		margin: 0;
		background-color: #eee;
		text-align: left;
		box-shadow: 0 0.25rem 1rem rgba(122, 122, 122, 0.596);

		h2 {
			width: calc(100% + var(--padding-value) * 2) !important;
			padding-left: var(--padding-value);
			margin-left: calc(var(--padding-value) * -1) !important;
			width: 100%;
			background-color: #fff;
			font-size: clamp(1rem, 4vw, 2rem);
			font-weight: 500;
			margin: 0 0;
		}

		.percentage {
			font-size: clamp(4rem, 20vw, 8rem);
			font-weight: 900;
			margin: max(-2rem, -6vw) 0 max(-2rem, -6vw);
		}

		.turnout-numbers {
			position: absolute;
			font-size: clamp(1rem, 3vw, 1.5rem);
			top: 7.5%;
			right: max(-5%, -20px);
			background-color: #ddd;
			padding: 0.125rem 0.5rem 0.125rem;
		}

		.turnout-difference {
			position: absolute;
			font-size: clamp(1rem, 3vw, 1.5rem);
			top: 25%;
			right: min(0.125rem, 5px);
			color: green;
			text-align: right;
			padding: 0.125rem 0.5rem 0.125rem;
		}

		.representation {
			display: flex;
			width: 100%;
			flex-direction: row;
			justify-content: space-between;
			align-items: stretch;
			gap: 0.5rem;

			font-weight: 700;
			font-variation-settings:
				'wdth' 85,
				'opsz' 96;

			.rep-rate {
				font-size: clamp(0.5rem, 3vw, 1.5rem);
			}

			.rep-error {
				font-size: clamp(0.5rem, 3vw, 1.5rem);
			}
		}

		.ugg-split {
			position: relative;
			background-color: #bbb;
			font-size: clamp(0.75rem, 3vw, 1rem);
			width: calc(100% + var(--padding-value) * 2);
			padding-left: var(--padding-value);
			margin-left: calc(var(--padding-value) * -1);
			overflow: hidden;

			.ugg-split-fill {
				position: absolute;
				top: 0;
				left: 0;
				mix-blend-mode: multiply;

				transform-origin: 100% 0;
				height: 100%;
				width: 100%;
				background-color: #ccc;
			}
		}
	}
</style>
