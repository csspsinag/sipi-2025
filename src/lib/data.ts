import type { ElectionsData, HistoricalTurnoutData, SeatData } from "./types";

export const electionsData: ElectionsData = {	
	chair: {
		name: 'Chair',
		children: [
			{
				party: 'buklod', name: 'Macam', display: 'Macam', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			},
			{
				party: 'abstain', name: 'Abstain', display: 'Abstain', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			},
			{
				party: 'saligan', name: 'Patawaran', display: 'Patawaran', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			}
		]
	},
	
	viceChair: {
		name: 'Vice Chair',
		children: [
			{
				party: 'buklod', name: 'Macam', display: 'Macam', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			},
			{
				party: 'abstain', name: 'Abstain', display: 'Abstain', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			},
			{
				party: 'saligan', name: 'Patawaran', display: 'Patawaran', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			}
		]
	},
	
	collegeRepresentative: {
		name: 'CSSP Representative to the USC',
		display: 'CSSP Rep',
		children: [
			{
				party: 'buklod', name: 'Macam', display: 'Macam', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			},
			{
				party: 'abstain', name: 'Abstain', display: 'Abstain', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			},
			{
				party: 'saligan', name: 'Patawaran', display: 'Patawaran', children: [
					{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																{ name: 'graduate', 	 value: 0   } ] },
					{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																{ name: 'graduate', 	 value: 1 	} ] },
					{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																{ name: 'graduate', 	 value: 11	} ] },
					{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																{ name: 'graduate', 	 value: 0	} ] },
					{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
					{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
				]
			}
		]
	},
	
	councilor: [
		{
			name: 'Councilor',
			children: [
				{
					party: 'buklod', name: 'Macam', display: 'Macam', children: [
						{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																	{ name: 'graduate', 	 value: 0   } ] },
						{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																	{ name: 'graduate', 	 value: 1 	} ] },
						{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																	{ name: 'graduate', 	 value: 11	} ] },
						{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																	{ name: 'graduate', 	 value: 0	} ] },
						{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																	{ name: 'graduate', 	 value: 0   } ] },
						{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																	{ name: 'graduate', 	 value: 1 	} ] },
						{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																	{ name: 'graduate', 	 value: 11	} ] },
						{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																	{ name: 'graduate', 	 value: 0	} ] },
						{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
						{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
					]
				},
				{
					party: 'abstain', name: 'Abstain', children: [
						{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																	{ name: 'graduate', 	 value: 0   } ] },
						{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																	{ name: 'graduate', 	 value: 1 	} ] },
						{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																	{ name: 'graduate', 	 value: 11	} ] },
						{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																	{ name: 'graduate', 	 value: 0	} ] },
						{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																	{ name: 'graduate', 	 value: 0   } ] },
						{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																	{ name: 'graduate', 	 value: 1 	} ] },
						{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																	{ name: 'graduate', 	 value: 11	} ] },
						{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																	{ name: 'graduate', 	 value: 0	} ] },
						{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
						{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
					]
				},
				{
					party: 'nonvote', name: 'Patawaran', children: [
						{name: 'anthropology',			children: [ { name: 'undergraduate', value: 7   },
																	{ name: 'graduate', 	 value: 0   } ] },
						{name: 'geografia',				children: [ { name: 'undergraduate', value: 14 	},
																	{ name: 'graduate', 	 value: 1 	} ] },
						{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 16 	},
																	{ name: 'graduate', 	 value: 11	} ] },
						{name: 'linguistics',			children: [ { name: 'undergraduate', value: 12 	},
																	{ name: 'graduate', 	 value: 0	} ] },
						{name: 'philosophy',			children: [ { name: 'undergraduate', value: 7   },
																	{ name: 'graduate', 	 value: 0   } ] },
						{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 14 	},
																	{ name: 'graduate', 	 value: 1 	} ] },
						{name: 'psychology',			children: [ { name: 'undergraduate', value: 16 	},
																	{ name: 'graduate', 	 value: 11	} ] },
						{name: 'sociology',				children: [ { name: 'undergraduate', value: 12 	},
																	{ name: 'graduate', 	 value: 0	} ] },
						{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	} ] },
						{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 0	} ] }
					]
				}
			]
		}
	],
	
	departmentRepresentative: {
		anthropology: [{ name: 'Anthropology Department Representative',
			display: 'Anthro Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],

		geografia: [{ name: 'Geografia Department Representative',
			display: 'Geog Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],

		kasaysayan: [{ name: 'Kasaysayan Department Representative',
			display: 'Kas Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],

		linguistics: [{ name: 'Linguistics Department Representative',
			display: 'Lingg Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],

		philosophy: [{ name: 'Philosophy Department Representative',
			display: 'Philo Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],

		politicalScience: [{ name: 'Political Science Department Representative',
			display: 'PolSc Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],

		psychology: [{ name: 'Psychology Department Representative',
			display: 'Psych Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
			}, { name: 'Psychology Department Representative',
			display: 'Psych Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],

		sociology: [{ name: 'Sociology Department Representative',
			display: 'Anthropology Rep',
			children: [
				{ party: 'buklod', name: 'Macam', display: 'Macam', 	children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'abstain', name: 'Abstain', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] },
				{ party: 'buklod', name: 'Patawaran', 					children: [ { name: 'undergraduate', value: 7   },
																					{ name: 'graduate', 	 value: 0   } ] } ]
		}],
	}
}

export const seatData: {
	[key: string]: SeatData[];
} = {
	term2122: [
		{ party: 'SALiGAN sa CSSP', position: 'Chair', name: 'Aison, Don Alejandro', department: 'linguistics' },
		{ party: 'BUKLOD CSSP', position: 'Vice Chair', name: 'Traballo, Robin Jacob', department: 'psychology' },
		{ party: 'SALiGAN sa CSSP', position: 'CSSP Rep', name: 'Arellano, Andre Lloyd', department: 'politicalScience' },  
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'del Rosario, Vayne Altapascine', department: 'politicalScience' }, 
		{ party: 'BUKLOD CSSP', position: 'Councilor', name: 'Pañares, Kimberly', department: 'philosophy' }, 
		{ party: 'BUKLOD CSSP', position: 'Councilor', name: 'Villarin, Bob Owen', department: 'psychology', note: 'Resigned' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Medina, Erwin Ace', department: 'politicalScience' }, 
		{ party: 'BUKLOD CSSP', position: 'Councilor', name: 'Dela Cruz, Kareena Alexandra', department: 'philosophy' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Formadero, Julian Matthew', department: 'politicalScience' }, 
		{ party: 'independent', position: 'Anthro Rep', name: 'Cordero, Doms', department: 'anthropology', note: 'Appointed' },   
		{ party: 'BUKLOD CSSP', position: 'Geog Rep', name: 'Felipe, Carlo Louis', department: 'geografia' },   
		{ party: 'independent', position: 'Kas Rep', name: 'Roque, Bianca Hacintha', department: 'kasaysayan' },   
		{ party: 'SALiGAN sa CSSP', position: 'Lingg Rep', name: 'Navarra, Janina', department: 'linguistics' },   
		{ party: 'SALiGAN sa CSSP', position: 'Philo Rep', name: 'Laranang, Timothy John', department: 'philosophy' },   
		{ party: 'independent', position: 'PolSc Rep', name: 'Terrado, Jose Marco', department: 'politicalScience' },   
		{ party: 'SALiGAN sa CSSP', position: 'Psych Rep', name: 'Aggabao, Hannah Christhea Therese', department: 'psychology' },   
		{ party: 'BUKLOD CSSP', position: 'Psych Rep', name: 'Delos Santos, Glendale Anne', department: 'psychology' },   
		{ party: 'SALiGAN sa CSSP', position: 'Socio Rep', name: 'Consolacion, Veronica Marie', department: 'sociology' },   
	],
	term2223: [
		{ party: 'SALiGAN sa CSSP', position: 'Chair', name: 'del Rosario, Vayne Altapascine', department: 'politicalScience' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Vice Chair', name: 'Consolacion, Veronica Marie', department: 'sociology', note: 'Resigned' },
		{ party: 'SALiGAN sa CSSP', position: 'CSSP Rep', name: 'Formadero, Julian Matthew', department: 'politicalScience' },  
		{ party: 'independent', position: 'Councilor', name: 'Antiojo, Hans Matthew', department: 'philosophy' }, 
		{ party: 'BUKLOD CSSP', position: 'Councilor', name: 'Delos Santos, Glendale Anne', department: 'psychology' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Aguinaldo, Lady Ruth', department: 'philosophy' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Politico, Jewel Christopher', department: 'philosophy' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Duran, Francesca Mariae', department: 'geografia' }, 
		{ party: 'BUKLOD CSSP', position: 'Councilor', name: 'Salavarria, John Carl', department: 'philosophy' }, 
		{ party: 'independent', position: 'Anthro Rep', name: 'Arceo, Chito Jr.', department: 'anthropology' },   
		{ party: 'SALiGAN sa CSSP', position: 'Geog Rep', name: 'Matavia, Troy Owen', department: 'geografia' },   
		{ party: 'independent', position: 'Kas Rep', name: 'Panuelos, Glo Shin Hyo', department: 'kasaysayan', note: 'Special elections' },   
		{ party: 'independent', position: 'Lingg Rep', name: 'Baldonado, Emmanuel', department: 'linguistics', note: 'Special elections' },   
		{ party: 'SALiGAN sa CSSP', position: 'Philo Rep', name: 'Dela Cruz, Patricia Mae', department: 'philosophy' },   
		{ party: 'independent', position: 'PolSc Rep', name: 'De Borja, Enzo Miguel', department: 'politicalScience' },   
		{ party: 'BUKLOD CSSP', position: 'Psych Rep', name: 'Lacap, Francine Rae', department: 'psychology' },   
		{ party: 'BUKLOD CSSP', position: 'Psych Rep', name: 'Macam, Noellah Jeannica', department: 'psychology' },   
		{ party: 'SALiGAN sa CSSP', position: 'Socio Rep', name: 'Cascolan, Gabriel Camilo', department: 'sociology' },
	],
	term2324: [
		{ party: 'SALiGAN sa CSSP', position: 'Chair', name: 'Duran, Francesca Mariae', department: 'geografia' }, 
		{ party: 'BUKLOD CSSP', position: 'Vice Chair', name: 'Go, Martina Keesha', department: 'politicalScience' }, 
		{ party: 'SALiGAN sa CSSP', position: 'CSSP Rep', name: 'Politico, Jewel Christopher', department: 'philosophy' },  
		{ party: 'independent', position: 'Councilor', name: 'Cruz, Sophia Beatriz', department: 'philosophy' }, 
		{ party: 'BUKLOD CSSP', position: 'Councilor', name: 'Macam, Noellah Jeannica', department: 'psychology' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Patawaran, Erin Angela', department: 'sociology' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Alano, Alyssa', department: 'politicalScience' }, 
		{ party: 'SALiGAN sa CSSP', position: 'Councilor', name: 'Castor, Kenneth Alexander', department: 'philosophy' }, 
		{ party: 'BUKLOD CSSP', position: 'Councilor', name: 'Makainag, Von Eiron Mickhell', department: 'philosophy' },  
		{ party: 'SALiGAN sa CSSP', position: 'Anthro Rep', name: 'Mendoza, Alec Jade', department: 'anthropology', note: 'Special elections' },   
		{ party: 'SALiGAN sa CSSP', position: 'Geog Rep', name: 'Bajana, John Marco', department: 'geografia' },   
		{ party: 'independent', position: 'Kas Rep', name: 'Labrador, Ailza Bree', department: 'kasaysayan' },    
		{ party: 'SALiGAN sa CSSP', position: 'Lingg Rep', name: 'Dela Cruz, Symon', department: 'linguistics', note: 'Special elections' },    
		{ party: 'SALiGAN sa CSSP', position: 'Philo Rep', name: 'Odra, Clarissa Guilliana', department: 'philosophy' },    
		{ party: 'independent', position: 'PolSc Rep', name: 'Gavino, Pio Lorenzo', department: 'politicalScience' },   
		{ party: 'BUKLOD CSSP', position: 'Psych Rep', name: 'Felices, Kristina Sophia', department: 'psychology' },   
		{ party: 'BUKLOD CSSP', position: 'Psych Rep', name: 'Guevara, Joaquin Enrique', department: 'psychology' },   
		{ party: 'SALiGAN sa CSSP', position: 'Socio Rep', name: 'Alcayde, Shantel', department: 'sociology', note: 'Special elections' },
	],
	term2425: [
		{ party: 'BUKLOD CSSP',		name: 'Macam, Noellah Jeannica',	position: 'Chair',		department: 'psychology' },
		{ party: 'BUKLOD CSSP',		name: 'Felices, Kristina Sophia',	position: 'Vice Chair',	department: 'psychology' },
		{ party: 'independent',		name: 'Cruz, Sophia Beatriz',		position: 'CSSP Rep',	department: 'philosophy' },
		{ party: 'SALiGAN sa CSSP',	name: 'Ochosa, Reighn Claire',		position: 'Councilor',	department: 'politicalScience' },
		{ party: 'SALiGAN sa CSSP',	name: 'Gaspar, Viceroy Izaacar Emmanuel',	position: 'Councilor',	department: 'sociology' },
		{ party: 'SALiGAN sa CSSP',	name: 'Alfonso, Janina Moira',		position: 'Councilor',	department: 'philosophy' },
		{ party: 'BUKLOD CSSP',		name: 'Pascua, Francesca Eunyze',	position: 'Councilor',	department: 'politicalScience' },
		{ party: 'SALiGAN sa CSSP',	name: 'Escototo, Erich Jones',		position: 'Councilor',	department: 'sociology' },
		{ party: 'BUKLOD CSSP',		name: 'Labiste, Dancy Zshelyn Joy',	position: 'Councilor',	department: 'linguistics' },
		{ party: 'BUKLOD CSSP',		name: 'Matandac, Kristian Zachary',	position: 'Councilor',	department: 'linguistics' },
		{ party: 'SALiGAN sa CSSP',	name: 'Dumo, Lyle Tristan',			position: 'Anthro Rep',	department: 'anthropology' },
		{ party: 'SALiGAN sa CSSP',	name: 'Galzote, Lawrence Brent',	position: 'Geog Rep',	department: 'geografia' },
		{ party: 'SALiGAN sa CSSP',	name: 'Dela Paz, Risven Allen',		position: 'Kas Rep',	department: 'kasaysayan' },
		{ party: 'SALiGAN sa CSSP',	name: 'Gojo Cruz, Alliah',			position: 'Lingg Rep',	department: 'linguistics' },
		{ party: 'SALiGAN sa CSSP',	name: 'Cadenas, Louise Gabrielle',	position: 'Philo Rep',	department: 'philosophy' },
		{ party: 'independent',		name: 'Guevarra, Miguel Joaquin',	position: 'PolSc Rep',	department: 'politicalScience' },
		{ party: 'BUKLOD CSSP',		name: 'Camarillo, Kara Gabrielle',	position: 'Psych Rep',	department: 'psychology' },
		{ party: 'BUKLOD CSSP',		name: 'Tagapan, Jayson Ray',		position: 'Psych Rep',	department: 'psychology' },
		{ party: 'SALiGAN sa CSSP',	name: 'Ybera, Aaliyah Nicole',		position: 'Socio Rep',	department: 'sociology' },
	],
	term2526: [
		{ party: '',	name: '',	position: 'Chair',		department: '' },
		{ party: '',	name: '',	position: 'Vice Chair',	department: '' },
		{ party: '',	name: '',	position: 'CSSP Rep',	department: '' },
		{ party: '',	name: '',	position: 'Councilor',	department: '' },
		{ party: '',	name: '',	position: 'Councilor',	department: '' },
		{ party: '',	name: '',	position: 'Councilor',	department: '' },
		{ party: '',	name: '',	position: 'Councilor',	department: '' },
		{ party: '',	name: '',	position: 'Councilor',	department: '' },
		{ party: '',	name: '',	position: 'Councilor',	department: '' },
		{ party: '',	name: '',	position: 'Councilor',	department: '' },
		{ party: '',	name: '',	position: 'Anthro Rep',	department: 'anthropology' },
		{ party: '',	name: '',	position: 'Geog Rep',	department: 'geografia' },
		{ party: '',	name: '',	position: 'Kas Rep',	department: 'kasaysayan' },
		{ party: '',	name: '',	position: 'Lingg Rep',	department: 'linguistics' },
		{ party: '',	name: '',	position: 'Philo Rep',	department: 'philosophy' },
		{ party: '',	name: '',	position: 'PolSc Rep',	department: 'politicalScience' },
		{ party: '',	name: '',	position: 'Psych Rep',	department: 'psychology' },
		{ party: '',	name: '',	position: 'Psych Rep',	department: 'psychology' },
		{ party: '',	name: '',	position: 'Socio Rep',	department: 'sociology' },

	]
}

export const historicalTurnoutData: HistoricalTurnoutData = {
	term2122: {
		name: 'AY2019-2020',
		children: [
			{name: 'anthropology',			children: [ { name: 'undergraduate', value: 89 	, max:	100	},
														{ name: 'graduate', 	 value: 12 	, max:	59	} ] },
			{name: 'geografia',				children: [ { name: 'undergraduate', value: 66	, max:	84	},
														{ name: 'graduate', 	 value: 11	, max:	35	} ] },
			{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 44	, max:	54	},
														{ name: 'graduate', 	 value: 29	, max:	82	} ] },
			{name: 'linguistics',			children: [ { name: 'undergraduate', value: 68	, max:	91	},
														{ name: 'graduate', 	 value: 3 	, max:	40	} ] },
			{name: 'philosophy',			children: [ { name: 'undergraduate', value: 99	, max:	129	},
														{ name: 'graduate', 	 value: 9	, max:	65	} ] },
			{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 214	, max:	265	},
														{ name: 'graduate', 	 value: 20	, max:	110	} ] },
			{name: 'psychology',			children: [ { name: 'undergraduate', value: 291	, max:	364	},
														{ name: 'graduate', 	 value: 38	, max:	235	} ] },
			{name: 'sociology',				children: [ { name: 'undergraduate', value: 94	, max:	119	},
														{ name: 'graduate', 	 value: 26	, max:	73	} ] },
			{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 1	, max:	1	} ] },
			{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 6	, max:	55	} ] }
		]
	},
	term2223: {
		name: 'AY2020-2021',
		children: [
			{name: 'anthropology',			children: [ { name: 'undergraduate', value: 66 	, max:	106	},
														{ name: 'graduate', 	 value: 6 	, max:	58	} ] },
			{name: 'geografia',				children: [ { name: 'undergraduate', value: 64	, max:	83	},
														{ name: 'graduate', 	 value: 2	, max:	32	} ] },
			{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 36	, max:	61	},
														{ name: 'graduate', 	 value: 13	, max:	78	} ] },
			{name: 'linguistics',			children: [ { name: 'undergraduate', value: 51	, max:	107	},
														{ name: 'graduate', 	 value: 3 	, max:	41	} ] },
			{name: 'philosophy',			children: [ { name: 'undergraduate', value: 95	, max:	145	},
														{ name: 'graduate', 	 value: 2	, max:	40	} ] },
			{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 171	, max:	277	},
														{ name: 'graduate', 	 value: 8	, max:	81	} ] },
			{name: 'psychology',			children: [ { name: 'undergraduate', value: 230	, max:	402	},
														{ name: 'graduate', 	 value: 19	, max:	191	} ] },
			{name: 'sociology',				children: [ { name: 'undergraduate', value: 77	, max:	136	},
														{ name: 'graduate', 	 value: 8	, max:	53	} ] },	
			{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	, max:	1	} ] },	
			{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 2	, max:	33	} ] }
		]
	},
	term2324: {
		name: 'AY2021-2022',
		children: [
			{name: 'anthropology',			children: [ { name: 'undergraduate', value: 70 	, max:	117	},
														{ name: 'graduate', 	 value: 8 	, max:	73	} ] },
			{name: 'geografia',				children: [ { name: 'undergraduate', value: 86	, max:	108	},
														{ name: 'graduate', 	 value: 2	, max:	33	} ] },
			{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 61	, max:	80	},
														{ name: 'graduate', 	 value: 18	, max:	99	} ] },
			{name: 'linguistics',			children: [ { name: 'undergraduate', value: 68	, max:	122	},
														{ name: 'graduate', 	 value: 1 	, max:	51	} ] },
			{name: 'philosophy',			children: [ { name: 'undergraduate', value: 129	, max:	170	},
														{ name: 'graduate', 	 value: 5	, max:	56	} ] },
			{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 261	, max:	328	},
														{ name: 'graduate', 	 value: 8	, max:	86	} ] },
			{name: 'psychology',			children: [ { name: 'undergraduate', value: 347	, max:	417	},
														{ name: 'graduate', 	 value: 41	, max:	269	} ] },
			{name: 'sociology',				children: [ { name: 'undergraduate', value: 94	, max:	154	},
														{ name: 'graduate', 	 value: 12	, max:	80	} ] },	
			{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	, max:	0	} ] },	
			{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 6	, max:	53	} ] }
		]
	},
	term2425: {
		name: 'AY2022-2023',
		children: [
			{name: 'anthropology',			children: [ { name: 'undergraduate', value: 79 	, max:	106	},
														{ name: 'graduate', 	 value: 5	, max:	65	} ] },
			{name: 'geografia',				children: [ { name: 'undergraduate', value: 102	, max:	119	},
														{ name: 'graduate', 	 value: 5	, max:	32	} ] },
			{name: 'kasaysayan',			children: [ { name: 'undergraduate', value: 61	, max:	85	},
														{ name: 'graduate', 	 value: 24	, max:	91	} ] },
			{name: 'linguistics',			children: [ { name: 'undergraduate', value: 78	, max:	110	},
														{ name: 'graduate', 	 value: 0 	, max:	41	} ] },
			{name: 'philosophy',			children: [ { name: 'undergraduate', value: 100	, max:	176	},
														{ name: 'graduate', 	 value: 2	, max:	54	} ] },
			{name: 'politicalScience',		children: [ { name: 'undergraduate', value: 227	, max:	317	},
														{ name: 'graduate', 	 value: 1	, max:	77	} ] },
			{name: 'psychology',			children: [ { name: 'undergraduate', value: 310	, max:	406	},
														{ name: 'graduate', 	 value: 14	, max:	210	} ] },
			{name: 'sociology',				children: [ { name: 'undergraduate', value: 92	, max:	140	},
														{ name: 'graduate', 	 value: 5	, max:	64	} ] },	
			{name: 'nonMajor',				children: [ { name: 'undergraduate', value: 0	, max:	0	} ] },	
			{name: 'populationInstitute',	children: [ { name: 'graduate', 	 value: 2	, max:	37	} ] }
		]
	},
}
