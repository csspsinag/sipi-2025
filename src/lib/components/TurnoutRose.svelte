<script lang="ts">
	import { turnoutRose } from '$lib/data-join';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { Department, Positions } from '$lib/types';
	import { historicalTurnoutData } from '$lib/data';
	let {
		term = 'term2425'
	}: {
		term?: string;
	} = $props();

	onMount(() => {
		d3.select(`.turnout-rose`).call(turnoutRose(historicalTurnoutData, term));
	});
</script>

<div class="turnout-holder">
	<svg class="turnout-rose"></svg>
</div>

<style>
	.turnout-holder {
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
