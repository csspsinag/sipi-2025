export function convertToVariable(text: string) {
	switch (text) {
		case 'Collegewide':
			return 'collegewide';
		case 'Anthropology':
			return 'anthropology';
		case 'Geografia':
			return 'geografia';
		case 'Kasaysayan':
			return 'kasaysayan';
		case 'Linguistics':
			return 'linguistics';
		case 'Philosophy':
			return 'philosophy';
		case 'Political Science':
			return 'politicalScience';
		case 'Psychology':
			return 'psychology';
		case 'Sociology':
			return 'sociology';
		case 'Non-Major':
			return 'nonMajor';
		case 'Population Institute':
			return 'populationInstitute';
		default:
			return 'collegewide';
	}
}

export function convertToText(variable: string) {
	switch (variable) {
		case 'collegewide':
			return 'Collegewide';
		case 'anthropology':
			return 'Anthropology';
		case 'geografia':
			return 'Geografia';
		case 'kasaysayan':
			return 'Kasaysayan';
		case 'linguistics':
			return 'Linguistics';
		case 'philosophy':
			return 'Philosophy';
		case 'politicalScience':
			return 'Political Science';
		case 'psychology':
			return 'Psychology';
		case 'sociology':
			return 'Sociology';
		case 'nonMajor':
			return 'Non-Major';
		case 'populationInstitute':
			return 'Population Institute';
		default:
			return 'Collegewide';
	}
}
