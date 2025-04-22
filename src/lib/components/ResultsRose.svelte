<script lang="ts">
	import { resultsRose } from '$lib/data-join';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { Department, ElectionsData, PositionData, Positions } from '$lib/types';
	import { electionsData } from '$lib/data';
	let {
		search = 'chair',
		position = 0,
		count = 0
	}: { search: Positions; position?: number | Department; count?: number } = $props();

	const positionData: PositionData = (() => {
		const data: PositionData = electionsData[search];
		if (data[position] === undefined) {
			return data;
		} else if (data[position][count] === undefined) {
			return data[position];
		} else {
			return data[position][count];
		}
	})();

	onMount(() => {
		d3.select(`.${search}`).append(resultsRose(positionData, search));
	});
</script>

<div class="results-rose">
	<svg class={search}></svg>
</div>

<style>
	.results-rose {
		width: 100%;
		display: flex;
		position: relative;

		svg {
			width: 100%;
			margin: 0 50% 50% 0;
			overflow: visible;
		}
	}
</style>
