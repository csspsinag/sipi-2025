import dayjs from 'dayjs';
import type { dateExpression } from './types';

export const electionDates: Array<dateExpression> = [
	{
		id: 'cocFilingStart',
		level: ['uwide', 'college'],
		name: 'Start of COC filing',
		date: dayjs('2025-04-07'),
		tag: 'start'
	},
	{
		id: 'cocFilingEnd',
		level: ['uwide', 'college'],
		name: 'End of COC filing',
		date: dayjs('2025-04-14'),
		tag: 'end'
	},
	{
		id: 'cocCollegeDeliberationStart',
		level: ['college'],
		name: 'Start of COC deliberation',
		date: dayjs('2025-04-14'),
		tag: 'start'
	},
	{
		id: 'cocCollegeDeliberationEnd',
		level: ['college'],
		name: 'End of COC deliberation',
		date: dayjs('2025-04-16'),
		tag: 'end'
	},
	{
		id: 'initialCollegeCandidateListRelease',
		level: ['college'],
		name: 'Initial candidate list release',
		date: dayjs('2025-04-16'),
		tag: 'start'
	},
	{
		id: 'initialUwideCandidateListRelease',
		level: ['uwide'],
		name: 'Initial candidate list release',
		date: dayjs('2025-04-21'),
		tag: 'start'
	},
	{
		id: 'cocCollegeProtestPeriodStart',
		level: ['college'],
		name: 'Start of COC protest period',
		date: dayjs('2025-04-21'),
		tag: 'start'
	},
	{
		id: 'cocCollegeProtestPeriodEnd',
		level: ['college'],
		name: 'End of COC protest period',
		date: dayjs('2025-04-24 12:00'),
		tag: 'end'
	},
	{
		id: 'finalCandidateListRelease',
		level: ['uwide', 'college'],
		name: 'Final candidate list release',
		date: dayjs('2025-04-24 15:00'),
		tag: 'end'
	},
	{
		id: 'updCampaignPeriodStart',
		level: ['uwide', 'college'],
		name: 'Start of campaign period',
		date: dayjs('2025-04-28'),
		tag: 'start'
	},
	{
		id: 'localAbsenteeVotingStart',
		level: ['national'],
		name: 'Start of local absentee voting',
		date: dayjs('2025-04-28'),
		tag: 'start'
	},
	{
		id: 'localAbsenteeVotingEnd',
		level: ['national'],
		name: 'End of local absentee voting',
		date: dayjs('2025-04-30'),
		tag: 'start'
	},
	{
		id: 'pasabogDay1',
		level: ['college'],
		name: 'PASABOG: CSSP Miting de Avance',
		date: dayjs('2025-05-08'),
		tag: 'start'
	},
	{
		id: 'pasabogDay2',
		level: ['college'],
		name: 'PASABOG: CSSP Miting de Avance',
		date: dayjs('2025-05-09'),
		tag: 'end'
	},
	{
		id: 'nationalCampaignPeriodEnd',
		level: ['national'],
		name: 'End of campaign period',
		date: dayjs('2025-05-11'),
		tag: 'end'
	},
	{
		id: 'nationalElectionDay',
		level: ['national'],
		name: 'Election day',
		date: dayjs('2025-05-12')
	},
	{
		id: 'collegeCampaignMaterialsLastDay',
		level: ['college'],
		name: 'Last day of posting campaign materials',
		date: dayjs('2025-05-13')
	},
	{
		id: 'kilatiskoDay',
		level: ['uwide'],
		name: 'KILATISKO: UPD USC Miting de avance',
		date: dayjs('2025-05-14')
	},
	{
		id: 'updCampaignPeriodEnd',
		level: ['uwide', 'college'],
		name: 'End of campaign period',
		date: dayjs('2025-05-14'),
		tag: 'end'
	},
	{
		id: 'updElectionStart',
		level: ['uwide', 'college'],
		name: 'Start of election',
		date: dayjs('2025-05-15 08:00'),
		tag: 'start'
	},
	{
		id: 'updElectionEnd',
		level: ['uwide', 'college'],
		name: 'End of election',
		date: dayjs('2025-05-16 17:00'),
		tag: 'end'
	},
	{
		id: 'updProclamationOfWinners',
		level: ['uwide', 'college'],
		name: 'Proclamation of winners',
		date: dayjs('2025-05-17 19:00')
	}
];

export const electionDatesLookup: Map<string, dateExpression> = (() => {
	const map = new Map();
	for (const date of electionDates) {
		map.set(date.id, date);
	}
	return map;
})();
