import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Manila');
import type { DateExpression } from './types';

export const electionDates: Array<DateExpression> = [
	{
		id: 'cocFilingStart',
		level: ['uwide', 'college'],
		name: 'Start of COC filing',
		date: dayjs.tz('2025-04-07T00:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'cocFilingEnd',
		level: ['uwide', 'college'],
		name: 'End of COC filing',
		date: dayjs.tz('2025-04-16T00:00', 'Asia/Manila'),
		tag: 'moved',
		dateMoved: dayjs.tz('2025-04-14T00:00', 'Asia/Manila'),
		movedUrl: 'https://www.facebook.com/share/1Bz6H3SCJj/'
	},
	{
		id: 'cocCollegeDeliberationStart',
		level: ['college'],
		name: 'Start of candidacy deliberations',
		date: dayjs.tz('2025-04-16T00:00', 'Asia/Manila'),
		tag: 'estimate',
		estimateReason: 'candidacy filing extension'
	},
	{
		id: 'cocCollegeDeliberationEnd',
		level: ['college'],
		name: 'End of candidacy deliberations',
		date: dayjs.tz('2025-04-17T12:00', 'Asia/Manila'),
		tag: 'estimate',
		estimateReason: 'candidacy filing extension'
	},
	{
		id: 'initialCollegeCandidateListRelease',
		level: ['college'],
		name: 'Initial candidate list release',
		date: dayjs.tz('2025-04-17T14:00', 'Asia/Manila'),
		tag: 'estimate',
		estimateReason: 'candidacy filing extension'
	},
	{
		id: 'initialUwideCandidateListRelease',
		level: ['uwide'],
		name: 'Initial candidate list release',
		date: dayjs.tz('2025-04-21T00:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'cocCollegeProtestPeriodStart',
		level: ['college'],
		name: 'Start of COC protest period',
		date: dayjs.tz('2025-04-21T00:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'cocCollegeProtestPeriodEnd',
		level: ['college'],
		name: 'End of COC protest period',
		date: dayjs.tz('2025-04-24T12:00', 'Asia/Manila'),
		tag: 'end'
	},
	{
		id: 'finalCandidateListRelease',
		level: ['uwide', 'college'],
		name: 'Final candidate list release',
		date: dayjs.tz('2025-04-24T15:00', 'Asia/Manila'),
		tag: 'end'
	},
	{
		id: 'updCampaignPeriodStart',
		level: ['uwide', 'college'],
		name: 'Start of campaign period',
		date: dayjs.tz('2025-04-28T00:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'localAbsenteeVotingStart',
		level: ['national'],
		name: 'Start of local absentee voting',
		date: dayjs.tz('2025-04-28T00:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'localAbsenteeVotingEnd',
		level: ['national'],
		name: 'End of local absentee voting',
		date: dayjs.tz('2025-04-30T00:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'pasabogDay1',
		level: ['college'],
		name: 'PASABOG: CSSP Miting de Avance Day 1',
		date: dayjs.tz('2025-05-08T15:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'pasabogDay2',
		level: ['college'],
		name: 'PASABOG: CSSP Miting de Avance Day 2',
		date: dayjs.tz('2025-05-09T15:00', 'Asia/Manila'),
		tag: 'end'
	},
	{
		id: 'nationalCampaignPeriodEnd',
		level: ['national'],
		name: 'End of campaign period',
		date: dayjs.tz('2025-05-11T00:00', 'Asia/Manila'),
		tag: 'end'
	},
	{
		id: 'nationalElectionDay',
		level: ['national'],
		name: 'Election day',
		date: dayjs.tz('2025-05-12T06:00', 'Asia/Manila')
	},
	{
		id: 'collegeCampaignMaterialsLastDay',
		level: ['uwide', 'college'],
		name: 'Last day of posting campaign materials',
		date: dayjs.tz('2025-05-13T23:59', 'Asia/Manila')
	},
	{
		id: 'kilatiskoDay',
		level: ['uwide'],
		name: 'KILATISKO: UPD USC Miting de avance',
		date: dayjs.tz('2025-05-14T13:00', 'Asia/Manila')
	},
	{
		id: 'updCampaignPeriodEnd',
		level: ['uwide', 'college'],
		name: 'End of campaign period',
		date: dayjs.tz('2025-05-14T17:00', 'Asia/Manila'),
		tag: 'end'
	},
	{
		id: 'updElectionStart',
		level: ['uwide', 'college'],
		name: 'Start of election',
		date: dayjs.tz('2025-05-15T08:00', 'Asia/Manila'),
		tag: 'start'
	},
	{
		id: 'updElectionEnd',
		level: ['uwide', 'college'],
		name: 'End of election',
		date: dayjs.tz('2025-05-16T17:00', 'Asia/Manila'),
		tag: 'end'
	},
	{
		id: 'updProclamationOfWinners',
		level: ['uwide', 'college'],
		name: 'Proclamation of winners',
		date: dayjs.tz('2025-05-16T19:00', 'Asia/Manila')
	}
];

export const electionDatesLookup: Map<string, DateExpression> = (() => {
	const map = new Map();
	for (const date of electionDates) {
		map.set(date.id, date);
	}
	return map;
})();
