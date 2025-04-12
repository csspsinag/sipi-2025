import type dayjs from 'dayjs';

type DateExpression = {
	id: string;
	level: ('national' | 'uwide' | 'college')[];
	name: string;
	date: dayjs.Dayjs;
	tag?: 'start' | 'end';
};

type TurnoutData = {
	turnoutTime: string;
	turnoutData: {
		program: string;
		type: string;
		turnoutCount: number;
		turnoutCountMax: number;
	}[];
};

type TurnoutDisplay = {
	[key: string]: {
		value: number;
		max: number;
		valueLabel: string;
		count: number;
		countMax: number;
		label: string;
	};
};

type ColorDefinition = {
	primary: string;
	light: string;
	empty: string;
};
