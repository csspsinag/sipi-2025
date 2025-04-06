<script lang="ts">
	import TimelineItem from './TimelineItem.svelte';
	import { Accordion, type WithoutChildrenOrChild } from 'bits-ui';
	import type { dateExpression } from '$lib/types';
	import dayjs from 'dayjs';
	import { setContext } from 'svelte';
	import { onMount } from 'svelte';

	type Props = WithoutChildrenOrChild<Accordion.RootProps> & {
		items: dateExpression[];
	};

	let { value = $bindable(), ref = $bindable(null), items = [], ...restProps }: Props = $props();
</script>

<Accordion.Root {...restProps as any}>
	{#each items as item, i (item.name + i)}
		<TimelineItem counter={i} date={item} />
		{#if i < items.length - 1}
			<svg
				width="100%"
				height="36px"
				viewBox="0 0 8 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line x1="50%" y1="-8px" x2="50%" y2="100%" stroke="#972bdb" stroke-width="3" />
			</svg>
		{/if}
	{/each}
</Accordion.Root>

<style>
	svg {
		z-index: -1;
		margin-bottom: -0.5rem;
	}
</style>
