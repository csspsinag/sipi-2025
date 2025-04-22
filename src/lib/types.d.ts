import type dayjs from 'dayjs';
declare function d3.parliament(): void;

type Department =
	| 'anthropology'
	| 'geografia'
	| 'kasaysayan'
	| 'linguistics'
	| 'philosophy'
	| 'politicalScience'
	| 'psychology'
	| 'sociology'
	| 'nonMajor'
	| 'populationInstitute';

type DepartmentDisplay =
	| 'Anthropology'
	| 'Geografia'
	| 'Kasaysayan'
	| 'Linguistics'
	| 'Philosophy'
	| 'Political Science'
	| 'Psychology'
	| 'Sociology';

type DateExpression = {
	id: string;
	level: ('national' | 'uwide' | 'college')[];
	name: string;
	date: dayjs.Dayjs;
	tag?: 'start' | 'end' | 'moved' | 'estimate';
	dateMoved?: dayjs.Dayjs;
	movedUrl?: string;
	estimateReason?: string;
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

type VotingData = {
	name: string;
	display?: string;
	party?: string;
	children?: CandidateVoteData[];
	value?: number;
};
type BaseVotingData = {
	name: 'undergraduate' | 'graduate';
	value: number;
};
type DepartmentVotingData = { name: Department; children: BaseVotingData[] };
type CandidateVoteData = {
	name: string;
	party: string;
	display?: string;
	children: DepartmentVotingData[];
};
type DeptRepCandidateData = {
	name: string;
	party: string;
	display?: string;
	children: BaseVotingData[];
};
type DeptRepVoteData = {
	name: DepartmentRepresentatives;
	display: string;
	children: DeptRepCandidateData[];
};

type CWideData = VotingData & { name: 'Chair' | 'Vice Chair' | 'CSSP Representative to the USC' };
type CouncilorData = (VotingData & { name: 'Councilor' })[];
type DepartmentRepresentatives =
	| 'Anthropology Department Representative'
	| 'Geografia Department Representative'
	| 'Kasaysayan Department Representative'
	| 'Linguistics Department Representative'
	| 'Philosophy Department Representative'
	| 'Political Science Department Representative'
	| 'Psychology Department Representative'
	| 'Sociology Department Representative';
type DepartmentRepresentativeData = { [key: DepartmentRepresentatives]: DeptRepVoteData[] };

type PositionData = CWideData | CouncilorData | DepartmentRepresentativeData;
type ElectionsData = {
	chair: CWideData;
	viceChair: CWideData;
	collegeRepresentative: CWideData;
	councilor: CouncilorData;
	departmentRepresentative: DepartmentRepresentativeData;
};

type Positions = keyof ElectionsData;

interface CouncilSeat {
	name: string;
	position:
		| 'Chair'
		| 'Vice Chair'
		| 'CSSP Rep'
		| 'Councilor'
		| 'Anthro Rep'
		| 'Geog Rep'
		| 'Kas Rep'
		| 'Lingg Rep'
		| 'Philo Rep'
		| 'PolSc Rep'
		| 'Psych Rep'
		| 'Socio Rep';
	party: 'SALiGAN sa CSSP' | 'BUKLOD CSSP' | 'independent' | 'vacant';
	department: Department;
	note?: 'Resigned' | 'Appointed' | 'Special elections';
}

interface CollegewideSeats extends CouncilSeat {
	position: 'Chair' | 'Vice Chair' | 'CSSP Rep' | 'Councilor';
	department: Department;
}
interface AnthroRepSeat extends CouncilSeat {
	position: 'Anthro Rep';
	department: 'anthropology';
}
interface GeogRepSeat extends CouncilSeat {
	position: 'Geog Rep';
	department: 'geografia';
}
interface KasRepSeat extends CouncilSeat {
	position: 'Kas Rep';
	department: 'kasaysayan';
}
interface LinggRepSeat extends CouncilSeat {
	position: 'Lingg Rep';
	department: 'linguistics';
}
interface PhiloRepSeat extends CouncilSeat {
	position: 'Philo Rep';
	department: 'philosophy';
}
interface PolScRepSeat extends CouncilSeat {
	position: 'PolSc Rep';
	department: 'politicalScience';
}
interface PsychRepSeat extends CouncilSeat {
	position: 'Psych Rep';
	department: 'psychology';
}
interface SocioRepSeat extends CouncilSeat {
	position: 'Socio Rep';
	department: 'sociology';
}

type SeatData =
	| CollegewideSeats
	| AnthroRepSeat
	| GeogRepSeat
	| KasRepSeat
	| LinggRepSeat
	| PhiloRepSeat
	| PolScRepSeat
	| PsychRepSeat
	| SocioRepSeat;

type PartySeat = {
	id: string;
	seats: SeatData[];
};
