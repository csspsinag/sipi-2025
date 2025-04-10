<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { onMount } from 'svelte';

	let {
		value = () => 0,
		count = () => 0,
		countMax = () => 0,
		label,
		includeLabel = true
	}: {
		value: () => number;
		count: () => number;
		countMax: () => number;
		label: string;
		includeLabel?: boolean;
	} = $props();

	let mainTurnoutLabel = $state({ number: 0.0 });
	let mainTurnoutCount = $state({ number: 0.0 });
	let mainTurnoutCountMax = $state({ number: 0.0 });
	function rollUp(stateVar: { number: number }, value: number) {
		stateVar.number = value;
	}

	onMount(() => {
		setInterval(() => {
			rollUp(mainTurnoutLabel, value() / 100);
			rollUp(mainTurnoutCount, count());
			rollUp(mainTurnoutCountMax, countMax());
		}, 1000);
	});
</script>

<div class="container-lock">
	<div class="pointer-arrow" style="transform: var(--transform-size)"></div>
	<div class="percentage-map" style="transform: var(--transform-size)">
		<NumberFlowGroup>
			{#if includeLabel}
				<p>{label}</p>
			{/if}
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
			border-bottom: 0.5rem solid color-mix(in oklab, var(--color), #000);
		}
	}

	:is(.percentage-map) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		transform-origin: 100% 0;

		width: max-content;
		padding: clamp(0.75rem, 2vw, 0.5rem) clamp(0.75rem, 2vw, 0.75rem);
		margin: 0;

		font-variant-numeric: tabular-nums;
		font-family: 'Hanken Grotesk', sans-serif;
		font-size: clamp(0.5rem, 3cqw, 2rem);
		font-weight: 500;

		color: #ffe8a3;
		background: linear-gradient(
			to right,
			color-mix(in oklab, var(--color), #000),
			color-mix(in oklab, var(--color), #000 20%)
		);
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
		margin: calc(clamp(-1.25rem, 2vw, 1rem) * -1) 0 calc(clamp(0rem, 1.75vw, 2rem) * -1);
	}

	.main-turnout-count {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		font-family: 'Bricolage Grotesque', sans-serif !important;
		font-size: clamp(1rem, 2cqw, 2rem);
		font-weight: 500;
		color: #b2f3f3;
	}
</style>
