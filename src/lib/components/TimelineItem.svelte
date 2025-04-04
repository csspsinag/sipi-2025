<script lang="ts">
	import type { dateExpression } from '$lib/types';
	import Timer from '$lib/components/Timer.svelte';
	import { Accordion, type WithoutChildrenOrChild } from 'bits-ui';
	import type { Snippet } from 'svelte';

	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime.js';
	dayjs.extend(relativeTime);

	type Props = WithoutChildrenOrChild<Accordion.ItemProps> & {
		date: dateExpression;
		nameOverride?: string;
		timelineId?: string;
		timelineCount?: number;
		timerNotes?: Snippet;
		dateNotes?: Snippet;
	};

	let {
		date,
		nameOverride,
		timelineId = 'box',
		timelineCount = 0,
		timerNotes,
		dateNotes,
		...restProps
	}: Props = $props();

	let colors = (() => {
		if (date.level[0] === 'national')
			return {
				main: '#d31f72',
				light: '#f2d5cf'
			};
		if (date.level[0] === 'college')
			return {
				main: '#a02ee9',
				light: '#dacae4'
			};
		return {
			main: '#1769aa',
			light: '#c5d0d9'
		};
	})();

	let level = (() => {
		return date.level.map((level) => {
			if (level === 'national') return ' <span class="national">National</span>';
			if (level === 'college') return ' <span class="college">College</span>';
			return ' <span class="uwide">Universitywide</span>';
		});
	})();
</script>

<div
	class={`tl-item tl-${timelineId} tl-${timelineId}-${timelineCount} tl-item-${date.id}`}
	style="--level-color: {colors.main}; --level-light-color: {colors.light};"
>
	<Accordion.Item {...restProps}>
		<Accordion.Header>
			<Accordion.Trigger
				><div class="box-button">
					<div class="level-name">{@html level}</div>
					<h2>{nameOverride || date.name}</h2>
					<subtitle
						>{date.date.format('YYYY MMM DD')}
						<span class="day-of-week">{date.date.format('(dddd)')}</span></subtitle
					>
					<div class="relative-date">
						{date.date.fromNow()}
					</div>
					<div class="date-notes">{@render dateNotes?.()}</div>
				</div>
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>
			<Timer date={date.date} />
			{@render timerNotes?.()}
		</Accordion.Content>
	</Accordion.Item>
</div>

<style>
	.tl-item {
		margin: 2rem;
		border-radius: 0.5rem;
		font-family: 'Hanken Grotesk', sans-serif;
		border: 1px solid var(--level-color);
		box-shadow: 3px 3px 10px var(--level-color);
		background-color: var(--level-light-color);

		overflow: hidden;

		width: var(--bits-accordion-content-height);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	:global(.tl-item [data-accordion-item]) {
		width: 100%;
	}

	.level-name {
		font-size: 0.75rem;
		text-transform: uppercase;
	}

	.box-button {
		flex-grow: 1;

		h2 {
			font-size: 2rem;
		}

		subtitle {
			font-size: 1.25rem;
		}
	}

	@layer accordion {
		/* Base styles */
		:global([data-accordion-item]) {
			border-radius: 0.25rem;
		}

		/* Trigger styles based on state */
		:global([data-accordion-trigger]) {
			padding: 1rem;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border: none;

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin: 0;
			}
		}

		:global([data-accordion-trigger][data-state='open']) {
			background-color: var(--level-color);
			color: white;
			border: none;
		}

		/* Content styles */
		:global([data-accordion-content]) {
			display: flex;
			justify-content: center;
			overflow: hidden;
			transition: height 300ms ease-out;
		}

		/* Define keyframes for opening animation */
		@keyframes -global-accordionOpen {
			0% {
				height: 0;
				opacity: 0;
			}
			80% {
				height: var(--bits-accordion-content-height);
				opacity: 0.8;
			}
			100% {
				height: var(--bits-accordion-content-height);
				opacity: 1;
			}
		}

		/* Define keyframes for closing animation */
		@keyframes -global-accordionClose {
			0% {
				height: var(--bits-accordion-content-height);
				opacity: 1;
			}
			20% {
				height: var(--bits-accordion-content-height);
				opacity: 0.8;
			}
			100% {
				height: 0;
				opacity: 0;
			}
		}

		/* Apply animations based on state */
		:global([data-accordion-content][data-state='open']) {
			animation: accordionOpen 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
		}

		:global([data-accordion-content][data-state='closed']) {
			animation: accordionClose 300ms cubic-bezier(0.7, 0, 0.84, 0) forwards;
		}
	}
</style>
