import type { TurnoutData } from './types';

export async function fetchTurnoutData(fileName: string): Promise<{
	turnoutTime: string;
	turnoutData: {
		program: string;
		type: string;
		turnoutCount: number;
		turnoutCountMax: number;
	}[];
}> {
	return fetch(fileName)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
}

export function turnoutBreakdownLookup(source: TurnoutData, program: string) {
	const returnObject = {
		value: 0,
		max: 1,
		valueLabel: '0',
		count: 0,
		countMax: 1,
		label: ''
	};

	returnObject.count = source.turnoutData
		.filter((turnout) => turnout.program === program)
		.flatMap((turnout) => turnout.turnoutCount)
		.reduce((a, b) => a + b);
	returnObject.countMax = source.turnoutData
		.filter((turnout) => turnout.program === program)
		.flatMap((turnout) => turnout.turnoutCountMax)
		.reduce((a, b) => a + b);
	returnObject.value = (returnObject.count / returnObject.countMax) * 100;
	returnObject.max = returnObject.countMax;
	returnObject.valueLabel = `${returnObject.value} / ${returnObject.max}`;
	returnObject.label = program;

	return returnObject;
}
