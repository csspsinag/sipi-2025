// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
// Imports
import * as d3 from 'd3';
import { partyColors, departmentColors, departmentNames } from './constants';
import type { PositionData } from './types';

//+ Generate position-specific pie chart
export function chart(position: PositionData, positionName: string) {
	const data: PositionData = position;
	const width = 1100;
	const height = width;
	const radius = Math.min(width, height) / 3.5 - 5;
	let debounce: unknown;
	let initiateClick = false;

	//* Scales
	const partyScale = d3.scaleOrdinal(partyColors.keys(), partyColors.values()).unknown(null);
	const departmentScale = d3
		.scaleOrdinal(departmentColors.keys(), departmentColors.values())
		.unknown(null);
	const departmentNameScale = d3
		.scaleOrdinal(departmentNames.keys(), departmentNames.values())
		.unknown(null);

	//* Data Layout
	// @ts-expect-error || d3 typings can not parse recursive trees
	const hierarchy = d3.hierarchy(data).sum((d) => d.value);
	const root = d3.partition().size([2 * Math.PI, hierarchy.height + 0])(hierarchy);
	root.each((d) => (d.current = d));
	let chartContext = root;
	const heightValue = d3.scaleSqrt().range([radius * 0.1, radius]);

	let nonvoteFlag = false;
	const largest = root.children.reduce(function (prev, current) {
		if (current.data.name === 'nonvote') {
			nonvoteFlag = true;
			return prev;
		}
		if (current.x1 <= 0) {
			return prev;
		} else if (prev.value > current.value) {
			return prev;
		} else {
			return current;
		}
	}, []);
	let abstainFlag = largest.data.name === 'Abstain' ? true : false;
	const initRootHead = `${root.data.display || root.data.name}`;
	const initRootMax = `${largest.data.name === 'nonvote' ? '' : largest.data.display || largest.data.name}`;
	const initRootDescriptor = `${largest.value} of ${root.value} votes`;
	let rootHead = initRootHead;
	let rootMax = initRootMax;
	let rootDescriptor = initRootDescriptor;

	//* SVG element
	const svg = d3
		.select(`.${positionName}`)
		.attr('viewBox', [-width / 2, -height / 2, width / 2, width / 2])
		.attr('width', '100%')
		.attr('height', '100%')
		.style('font', "1rem 'Hanken Grotesk'");

	const mdlLabel = svg
		.append('text')
		.attr('text-anchor', 'middle')
		.attr('fill', '#888')
		.style('visibility', 'visible');

	//* Arc Generator
	const arc = d3
		.arc<d3.HierarchyRectangularNode<unknown>>()
		.startAngle((d) => d.x0)
		.endAngle((d) => d.x1)
		.padRadius((d) => Math.max(heightValue(d.y1), 0))
		.padAngle((d) => Math.min((d.x1 - d.x0) / 4, 0.03))
		.innerRadius((d) => Math.max(0, heightValue(d.y0) - heightValue(d.y0) * 0.1))
		.outerRadius((d) => Math.max(0, heightValue(d.y1)))
		.cornerRadius(5);

	//* Append arcs
	const path = svg
		.append('g')
		.selectAll('path')
		.data(root.descendants().reverse().slice(0, -1))
		.join('path')
		.attr('fill', (d) => {
			if (d.depth < 2) {
				return partyScale(d.data.party);
			}
			if (d.depth === 3) {
				return d3.interpolateLab(
					departmentScale(d.parent.data.name),
					partyScale(d.parent.parent.data.party)
				)(0.25);
			}
			if (d.depth > 2) d = d.parent;
			return d3.interpolateLab(departmentScale(d.data.name), partyScale(d.parent.data.party))(0.5);
		})
		.attr('fill-opacity', (d) => (arcVisible(d.current) ? (d.children ? 1 : 0.8) : 0))
		.attr('pointer-events', (d) => (arcVisible(d.current) ? 'auto' : 'none'))
		.attr('d', (d) => arc(d.current))
		.on('mouseleave lostpointercapture', (event, d) => {
			clearTimeout(debounce as number);
			debounce = setTimeout(() => {
				hoverOff();
			}, 50);
		})
		.on('mouseenter touchend', (event, d) => {
			clearTimeout(debounce as number);
			debounce = setTimeout(() => {
				hoverOn(event, d);
			}, 50);
		});

	// Make them clickable if they have children.
	path
		.filter((d) => d.children)
		.style('cursor', 'pointer')
		.on('click touchend', clicked);

	const format = d3.format(',d');
	path.append('title').text(
		(d) =>
			`${d
				.ancestors()
				.map((d) => departmentNameScale(d.data.name) || d.data.name)
				.reverse()
				.slice(1)
				.join(' / ')}\n${format(d.value)}`
	);

	const label = svg
		.append('g')
		.attr('pointer-events', 'none')
		.attr('text-anchor', 'middle')
		.style('user-select', 'none')
		.selectAll('text')
		.data(root.descendants().reverse().slice(0, -1))
		.join('text')
		.attr('dy', '0.25em')
		.attr('fill-opacity', (d) => +labelVisible(d.current))
		.attr('transform', (d) => labelTransform(d.current))
		.attr('font-size', (d) => `${d.height * 0.25 + 0.75}em`)
		.attr('x', 0)
		.attr('dy', 0)
		.style('font-weight', '800')
		.text((d) => `${departmentNameScale(d.data.name) || d.data.display || d.data.name}`);

	const parent = svg
		.append('circle')
		.datum(root)
		.attr('r', radius * 0.7)
		.attr('fill', 'none')
		.attr('pointer-events', 'all')
		.on('click', clicked);

	function hoverOn(event, d) {
		if (!initiateClick) {
			initiateClick = true;
			clicked(event, root);
		}

		// Get the ancestors of the current segment, minus the root
		const sequence = d.ancestors().reverse().slice(1);
		// Highlight the ancestors
		path.attr('fill-opacity', (node) => (sequence.indexOf(node) >= 0 ? 1 : 0.2));

		const percentage = ((100 * d.value) / root.value).toPrecision(3);
		const rvPc = ((100 * d.value) / d.parent.value).toPrecision(3);
		const relativePercent = '' + rvPc + '% of ';
		const relativeContext = () => {
			if (d.height === 2) {
				return d
					.ancestors()
					.map((d) => (d.data.display ? d.data.display : d.data.name))
					.reverse()
					.slice(1, 2)
					.join(' / ');
			} else if (d.height === 1) {
				return d
					.ancestors()
					.map((d) => (d.data.display ? d.data.display : d.data.name))
					.reverse()
					.slice(-2, -1)
					.join(' / ');
			} else {
				return d
					.ancestors()
					.map((d) =>
						d.data.display ? d.data.display : departmentNameScale(d.data.name) || d.data.name
					)
					.reverse()
					.slice(1, -1)
					.join(' / ');
			}
		};

		mdlLabel
			.select('.middle-heading')
			.style('visibility', null)
			.text(`${d.value} votes of ${root.value}`);

		mdlLabel
			.select('.percentage')
			.style('visibility', null)
			.attr(
				'fill',
				d.depth === 1
					? partyScale(d.data.party)
					: d.depth === 2
						? d3.interpolateLab(departmentScale(d.data.name), partyScale(d.parent.data.party))(0.5)
						: d3.interpolateLab(
								departmentScale(d.parent.data.name),
								partyScale(d.parent.parent.data.party)
							)(0.5)
			)
			.attr('fill-opacity', d.depth > 2 ? 0.8 : 1)
			.text(
				(d.height < 2
					? (d.data.display ? d.data.display : departmentNameScale(d.data.name) || d.data.name) +
						': '
					: '') +
					percentage +
					'%'
			);

		mdlLabel.select('.descriptor').text((d.height < 2 ? relativePercent : '') + relativeContext());
		// Update the value of this view with the currently hovered sequence and percentage
		svg.node().value = { sequence, percentage };
		svg.node().dispatchEvent(new CustomEvent('input'));
	}

	function hoverOff() {
		svg.node().value = { sequence: [], percentage: 0.0 };
		svg.node().dispatchEvent(new CustomEvent('input'));
		path.attr('fill-opacity', (d) => (arcVisible(d.target) ? (d.children ? 1 : 0.8) : 0));
		mdlLabel.select('.middle-heading').text(rootHead || initRootHead);
		mdlLabel.select('.descriptor').text(rootDescriptor || initRootDescriptor);
		mdlLabel
			.select('.percentage')
			.text(rootMax || initRootMax)
			.attr('fill', () => {
				if (chartContext.depth === 0) {
					return partyScale(largest.data.party);
				} else if (chartContext.depth === 1) {
					return partyScale(chartContext.data.party);
				} else if (chartContext.depth === 2) {
					return d3.interpolateLab(
						departmentScale(chartContext.data.name),
						partyScale(chartContext.parent.data.party)
					)(0.5);
				} else if (chartContext.depth === 3) {
					return d3.interpolateLab(
						departmentScale(chartContext.parent.data.name),
						partyScale(chartContext.parent.parent.data.party)
					)(0.25);
				}
			});
	}

	// Handle zoom on click.
	function clicked(event, p) {
		parent.datum(p.parent || root);
		chartContext = p || root;

		root.each(
			(d) =>
				(d.target = {
					x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
					x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
					y0: Math.max(0, Math.max(0, d.y0)),
					y1: Math.max(0, Math.max(0, d.y1))
				})
		);

		const t = svg.transition().duration(750);

		// Transition the data on all arcs, even the ones that aren’t visible,
		// so that if this transition is interrupted, entering arcs will start
		// the next transition from the desired position.
		path
			.transition(t)
			.tween('data', (d) => {
				const i = d3.interpolate(d.current, d.target);
				return (t) => (d.current = i(t));
			})
			.filter(function (d) {
				return +this.getAttribute('fill-opacity') || arcVisible(d.target);
			})
			.attr('fill-opacity', (d) => (arcVisible(d.target) ? (d.children ? 1 : 0.8) : 0))
			.attr('pointer-events', (d) => (arcVisible(d.target) ? 'auto' : 'none'))
			.attrTween('d', (d) => () => arc(d.current));

		label
			.filter(function (d) {
				return +this.getAttribute('fill-opacity') || labelVisible(d.target);
			})
			.transition(t)
			.attr('fill-opacity', (d) => +labelVisible(d.target))
			.attrTween('transform', (d) => () => labelTransform(d.current));

		if (chartContext === root) {
			rootHead = initRootHead;
			rootMax = initRootMax;
			rootDescriptor = initRootDescriptor;
			mdlLabel.select('.middle-heading').text(rootHead);
			mdlLabel.select('.percentage').text(rootMax).attr('fill', partyScale(largest.data.party));
			mdlLabel.select('.descriptor').text(rootDescriptor);
		} else if (p.depth > 0) {
			rootHead = `${p.parent.data.display || p.parent.data.name} votes ${p.depth === 1 ? 'for' : 'in'} ${departmentNameScale(p.data.name) || p.data.name}`;
			rootMax = `${((100 * p.value) / root.value).toPrecision(3)}%`;
			rootDescriptor = `${p.value} of ${root.value} votes`;
			mdlLabel.select('.middle-heading').text(rootHead);
			mdlLabel.select('.descriptor').text(rootDescriptor);
			mdlLabel.select('.percentage').text(rootMax).attr('fill', partyScale(p.data.party));
		} else {
			rootHead = initRootHead;
			rootMax = initRootMax;
			rootDescriptor = initRootDescriptor;
			mdlLabel.select('.middle-heading').text(rootHead);
			mdlLabel.select('.percentage').text(rootMax).attr('fill', partyScale(largest.data.party));
			mdlLabel.select('.descriptor').text(rootDescriptor);
		}
	}

	const tooltip = svg.append('g');

	function arcVisible(d) {
		return d.y1 <= 3 && d.y0 >= 0 && d.x1 > d.x0;
	}

	function labelVisible(d) {
		return d.y1 <= 3 && d.y0 > 0 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
	}

	function labelTransform(d) {
		const yMod = d3.scaleSqrt().range([width * 0.1, width]);

		const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
		const y = (yMod(d.y0) + yMod(d.y1) / 1.05) / 7.12;
		return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
	}

	mdlLabel
		.append('tspan')
		.attr('class', 'middle-heading')
		.attr('x', 0)
		.attr('y', 0)
		.attr('dy', '-2em')
		.attr('font-size', '2em')
		.style('font-family', "'Hanken Grotesk'")
		.style('font-weight', '800')
		.text(rootHead);

	mdlLabel
		.append('tspan')
		.attr('class', 'percentage')
		.attr('x', 0)
		.attr('y', 0)
		.attr('dy', '-0.1em')
		.attr('font-size', '4em')
		.attr('fill', partyScale(largest.data.party))
		.style('font-family', "'Bricolage Grotesque'")
		.style('font-weight', '800')
		.text(rootMax);

	mdlLabel
		.append('tspan')
		.attr('class', 'descriptor')
		.attr('x', 0)
		.attr('y', 0)
		.attr('dy', '1em')
		.attr('font-size', '2em')
		.text(rootDescriptor);

	return svg.node();
}

// Produce immutable base case
// - departments sorted alphabetical
// - undergrad then grad votes

// Produce permanent variables
// - total votes

// Store mutable base case
// - filterable case

// FUNC: reconcile mutable base case with permanent + base using empty values

// FUNC: modify mutable order

// FUNC: filter mutable order
// * call reconcile
