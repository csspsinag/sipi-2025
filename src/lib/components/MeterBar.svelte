<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { Meter, useId } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { onMount } from 'svelte';
	import MeterIndicator from './MeterIndicator.svelte';

	let {
		max = 100,
		value = 0,
		min = 0,
		count = () => 0,
		countMax = () => 0,
		label,
		valueLabel,
		color = '#e63386',
		lightColor = '#880039',
		emptyColor = '#eec6d8'
	}: ComponentProps<typeof Meter.Root> & {
		count: () => number;
		countMax: () => number;
		label: string;
		valueLabel: string;
		color?: string;
		lightColor?: string;
		emptyColor?: string;
	} = $props();

	const labelId = useId();

	let mainTurnoutLabel = $state({ number: 0.0 });
	function rollUp(stateVar: { number: number }, value: number) {
		stateVar.number = value;
	}

	onMount(() => {
		setInterval(() => {
			rollUp(mainTurnoutLabel, value / 100);
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
		count: count,
		countMax: countMax,
		label,
		color,
		lightColor,
		emptyColor
	};
</script>

<div
	class="shared-width"
	style="--color: {color}; --light-color: {lightColor}; --empty-color: {emptyColor}"
>
	<Meter.Root aria-labelledby={labelId} aria-valuetext={valueLabel} {value} {min} {max}>
		<div
			data-meter-bar
			style="transform: translateX(calc(-{(1 - mainTurnoutLabel.number) * 100}%))"
		></div></Meter.Root
	>
	<div
		class="indicator-style"
		style="--transform-size: translateX(calc((-50cqw) + {mainTurnoutLabel.number * 100}cqw))"
	>
		<MeterIndicator {...indicatorProps} />
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

		height: 20px;
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
