<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { Meter, useId } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { getContext, onMount } from 'svelte';
	import MeterIndicator from './MeterIndicator.svelte';
	import type { TurnoutDisplay } from '$lib/types';
	import { convertToVariable } from '$lib/text-map';

	const turnoutResult: () => TurnoutDisplay = (
		getContext('turnoutResult') as () => () => TurnoutDisplay
	)();
	const turnoutResultLast: () => TurnoutDisplay = (
		getContext('turnoutResultLast') as () => () => TurnoutDisplay
	)();

	let {
		min = 0,
		label,
		valueLabel,
		subjectColor = {
			primary: '#007bff',
			light: '#f8f9fa',
			empty: '#e9ecef'
		}
	}: ComponentProps<typeof Meter.Root> & {
		label: string;
		valueLabel: string;
		subjectColor: {
			primary: string;
			light: string;
			empty: string;
		};
	} = $props();

	let max = $state(100);
	let value = $state(0);
	let count = $state(0);
	let countMax = $state(1);
	let mainTurnoutLabel = $state(0);

	function setData() {
		try {
			max = turnoutResult()[convertToVariable(label)].max;
			value = turnoutResult()[convertToVariable(label)].value;
			count = turnoutResult()[convertToVariable(label)].count;
			countMax = turnoutResult()[convertToVariable(label)].countMax;
			valueLabel = turnoutResult()[convertToVariable(label)].valueLabel;
			mainTurnoutLabel = value / 100;
		} catch (error) {
			max = 0;
			value = 0;
			count = 0;
			countMax = 0;
			console.error(error);
		}
	}

	const labelId = useId();

	onMount(() => {
		setInterval(() => {
			setData();
		}, 1000);
	});

	const indicatorProps: {
		value: () => number;
		count: () => number;
		countMax: () => number;
		label: string;
		color: string;
		lightColor: string;
		emptyColor: string;
	} = {
		value: () => value,
		count: () => count,
		countMax: () => countMax,
		label,
		color: subjectColor!.primary,
		lightColor: subjectColor!.light,
		emptyColor: subjectColor!.empty
	};
</script>

<div
	class="shared-width"
	style="--color: {subjectColor.primary}; --light-color: {subjectColor.light}; --empty-color: {subjectColor.empty}"
>
	<Meter.Root aria-labelledby={labelId} aria-valuetext={valueLabel} {value} {min} {max}>
		<div
			data-meter-bar
			style="transform: translateX(calc(-{(1 - mainTurnoutLabel) * 100}%))"
		></div></Meter.Root
	>
	<div
		class="indicator-style"
		style="--transform-size: translateX(calc((-50cqw) + {mainTurnoutLabel * 100}cqw))"
	>
		<!-- <MeterIndicator {...indicatorProps} /> -->
	</div>
</div>

<style>
	.shared-width {
		container-type: inline-size;
		width: 100%;
	}

	:global([data-meter-root]) {
		--meter-bar-color: var(--color);
		background-color: var(--empty-color);
		box-shadow: 0 0.25rem 1rem rgba(122, 122, 122, 0.596);

		overflow: hidden;

		height: min(10vh, 40px);
		width: 100%;
	}

	:global([data-meter-bar]) {
		height: 100%;
		width: 100%;
		background: linear-gradient(
			to right,
			color-mix(in oklab, var(--meter-bar-color), #000) 0%,
			var(--meter-bar-color) 100%
		);
	}
</style>
