export const SECOND = 1000;
export const subjectColors = {
	collegewide: {
		color: {
			primary: '#3fb6b4',
			light: '#57d2d0',
			empty: '#fcdede'
		}
	},
	anthropology: {
		color: {
			primary: '#de1d1d',
			light: '#f05b5b',
			empty: '#fcdede'
		}
	},
	geografia: {
		color: {
			primary: '#399c13',
			light: '#53bd2a',
			empty: '#edffe6'
		}
	},
	kasaysayan: {
		color: {
			primary: '#db9b23',
			light: '#f5b642',
			empty: '#fff4e0'
		}
	},
	linguistics: {
		color: {
			primary: '#15bd96',
			light: '#35e6bc',
			empty: '#ccf0e7'
		}
	},
	philosophy: {
		color: {
			primary: '#ebc610',
			light: '#53532a',
			empty: '#fff9de'
		}
	},
	politicalScience: {
		color: {
			primary: '#3188ff',
			light: '#7ab2ff',
			empty: '#eaf3ff'
		}
	},
	psychology: {
		color: {
			primary: '#a447e0',
			light: '#ae32ff',
			empty: '#f3e3ff'
		}
	},
	sociology: {
		color: {
			primary: '#ff3084',
			light: '#ff85b7',
			empty: '#ffe3ee'
		}
	},
	nonMajor: {
		color: {
			primary: '#c9c91d',
			light: '#e3e32a',
			empty: '#ede6e6'
		}
	},
	populationInstitute: {
		color: {
			primary: '#d830ff',
			light: '#eda3ff',
			empty: '#fdf7ff'
		}
	}
};

export const departmentColors = new Map([
	['anthropology', subjectColors.anthropology.color.primary],
	['geografia', subjectColors.geografia.color.primary],
	['kasaysayan', subjectColors.kasaysayan.color.primary],
	['linguistics', subjectColors.linguistics.color.primary],
	['philosophy', subjectColors.philosophy.color.primary],
	['politicalScience', subjectColors.politicalScience.color.primary],
	['psychology', subjectColors.psychology.color.primary],
	['sociology', subjectColors.sociology.color.primary],
	['nonMajor', subjectColors.nonMajor.color.primary],
	['populationInstitute', subjectColors.populationInstitute.color.primary]
]);

export const partyColors = new Map([
	['buklod', '#0078d4'],
	['abstain', '#aaaaaa'],
	['saligan', '#fc473a'],
	['nonvote', '#f7f7f7']
]);

export const departmentNames = new Map([
	['anthropology', 'ANTHRO'],
	['geografia', 'GEOG'],
	['kasaysayan', 'KAS'],
	['linguistics', 'LINGG'],
	['philosophy', 'PHILO'],
	['politicalScience', 'POLSC'],
	['psychology', 'PSYCH'],
	['sociology', 'SOCIO'],
	['nonMajor', 'nMAJ'],
	['populationInstitute', 'POPINS'],
	['undergraduate', 'UG'],
	['graduate', 'GD']
]);
