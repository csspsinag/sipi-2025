import type dayjs from 'dayjs';

type dateExpression = {
	id: string;
	level: ('national' | 'uwide' | 'college')[];
	name: string;
	date: dayjs.Dayjs;
	tag?: 'start' | 'end' | 'moved' | 'estimate';
	dateMoved?: dayjs.Dayjs;
	movedUrl?: string;
	estimateReason?: string;
};
