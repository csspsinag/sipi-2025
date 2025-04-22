<script lang="ts">
	import { RadioGroup, Label, type WithoutChildrenOrChild, useId } from 'bits-ui';

	type Item = {
		value: string;
		label: string;
		disabled?: boolean;
	};

	type Props = WithoutChildrenOrChild<RadioGroup.RootProps> & {
		items: Item[];
	};

	let { value = $bindable(''), ref = $bindable(null), items, ...restProps }: Props = $props();
</script>

<RadioGroup.Root bind:value bind:ref {...restProps}>
	{#each items as item}
		{@const id = useId()}
		<div class="radio-group-item">
			<RadioGroup.Item {id} value={item.value} disabled={item.disabled}>
				{item.label}
			</RadioGroup.Item>
		</div>
	{/each}
</RadioGroup.Root>

<style>
</style>
