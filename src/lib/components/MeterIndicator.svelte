<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { Meter, useId } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { onMount } from 'svelte';

	let {
		max = 100,
		value = 0,
		min = 0,
		count = 0,
		countMax = 0,
		label,
		valueLabel
	}: ComponentProps<typeof Meter.Root> & {
		count: number;
		countMax: number;
		label: string;
		valueLabel: string;
	} = $props();

	const labelId = useId();

	let mainTurnoutLabel = $state({ number: 0.0 });
	let mainTurnoutCount = $state({ number: 0.0 });
	let mainTurnoutCountMax = $state({ number: 0.0 });
	function rollUp(stateVar: { number: number }, value: number) {
		stateVar.number = value;
	}

	onMount(() => {
		setInterval(() => {
			rollUp(mainTurnoutLabel, value / 100);
			rollUp(mainTurnoutCount, count);
			rollUp(mainTurnoutCountMax, countMax);
		}, 1000);
	});
</script>

<div class="container-lock">
	<div class="label">
		{label}
	</div>
	<div class="percentage-map">
		<NumberFlowGroup>
			<p>{label}</p>
			<div class="main-turnout-percent">
				<NumberFlow
					value={mainTurnoutLabel.number}
					format={{ style: 'percent', minimumFractionDigits: 2 }}
				/>
			</div>
			<div class="main-turnout-count">
				<NumberFlow value={mainTurnoutCount.number} format={'0'} />/<NumberFlow
					value={mainTurnoutCountMax.number}
					format={'0'}
				/>
			</div>
		</NumberFlowGroup>
	</div>
</div>

<style>
	.container-lock {
		container-type: inline-size;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
