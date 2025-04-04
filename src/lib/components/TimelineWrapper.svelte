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

<Accordion.Root bind:value bind:ref {...restProps as any}>
	{#each items as item, i (item.name + i)}
		<TimelineItem date={item} />
	{/each}
</Accordion.Root>
