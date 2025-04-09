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

<div class="shared-width">
	<Meter.Root aria-labelledby={labelId} aria-valuetext={valueLabel} {value} {min} {max}>
		<div
			data-meter-bar
			style="transform: translateX(calc(-{(1 - mainTurnoutLabel.number) * 100}%))"
		></div></Meter.Root
	>
	<div class="container-lock">
		<div
			class="pointer-arrow"
			style="transform: translateX(calc((-50cqw) + {mainTurnoutLabel.number * 100}cqw))"
		></div>

		<div
			class="percentage-map"
			style="transform: translateX(calc((-50cqw) + {mainTurnoutLabel.number * 100}cqw))"
		>
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
</div>

<style>
	.shared-width {
		container-type: inline-size;
		width: 100%;
	}

	:global([data-meter-root]) {
		--meter-bar-color: #e63386;
		background-color: #eec6d8;
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

	.container-lock {
		container-type: inline-size;
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0;

		.pointer-arrow {
			content: '';
			position: relative;
			top: 0;
			left: 0;
			width: 0;
			height: 0;
			border-left: 0.5rem solid transparent;
			border-right: 0.5rem solid transparent;
			border-bottom: 0.5rem solid #880039;
		}
	}

	:is(.percentage-map) {
		display: flex;
		flex-direction: column;
		align-items: end;
		justify-content: center;

		transform-origin: 100% 0;

		width: max-content;
		padding: clamp(0.25rem, 2vw, 0.5rem) clamp(0.125rem, 1vw, 0.75rem) clamp(0.25rem, 2vw, 0.5rem)
			clamp(0.25rem, 2vw, 1rem);
		margin: 0;

		font-variant-numeric: tabular-nums;
		font-family: 'Hanken Grotesk', sans-serif;
		font-size: clamp(0.5rem, 3cqw, 2rem);
		font-weight: 500;

		color: #ffe8a3;
		background: linear-gradient(to right, #880039, #a81459);
		border-radius: 1rem 1rem 1rem 1rem;
		box-shadow: 0 0.25rem 1rem rgba(122, 122, 122, 0.596);

		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;

		p {
			margin: 0;
			padding: 0;
			font-size: clamp(0.5rem, 5cqw, 2rem);
			font-weight: 600;
		}
	}

	.main-turnout-percent {
		font-family: 'Bricolage Grotesque', sans-serif !important;
		font-size: clamp(1rem, 8cqw, 4rem);
		font-weight: 700;
		color: #fff7fb;
		margin: calc(clamp(-1.25rem, 2vw, 1rem) * -1) 0 calc(clamp(-1.25rem, 1.75vw, 1rem) * -1);
	}

	.main-turnout-count {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		font-family: 'Bricolage Grotesque', sans-serif !important;
		font-size: clamp(0.5rem, 2cqw, 2rem);
		font-weight: 500;
		color: #b2f3f3;
	}
</style>
