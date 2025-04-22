<script lang="ts">
	import * as d3 from 'd3';
	import type { SeatData } from '$lib/types';
	import { parliament, sortPartyData } from '$lib/data-join';

	/*
	 * MIT License
	 * © Copyright 2016 - Geoffrey Brossard (me@geoffreybrossard.fr)
	 */

	const parliamentSettings = parliament()
		.width(1000)
		.anchor('position')
		.height(500)
		.innerRadiusCoef(0.2);
	parliamentSettings.enter.smallToBig = true;
	parliamentSettings.update.animate = true;
	parliamentSettings.exit.bigToSmall = true;

	let {
		chartName,
		data,
		value,
		bounds = [1000, 500]
	}: {
		chartName: string;
		data: { [key: string]: SeatData[] };
		value: string;
		bounds?: [number, number];
	} = $props();
	let sortedData = $derived(sortPartyData(data[value]));

	$effect(() => {
		d3.select(`.${chartName}`).datum(sortedData).call(parliamentSettings);
	});
</script>

<div class="parliament-chart">
	<svg class={chartName} viewBox="0 0 {bounds[0]} {bounds[1]}"></svg>
</div>

<style>
	.parliament-chart {
		width: 100%;
		height: 50%;
		overflow: hidden;
		transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
</style>
