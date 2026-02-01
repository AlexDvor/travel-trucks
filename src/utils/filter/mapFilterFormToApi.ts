export const mapFilterFormToApi = (form: string): string | null => {
	switch (form) {
		case 'Van':
			return 'paneltruck';
		case 'Fully Integrated':
			return 'fullyintegrated';
		case 'Alcove':
			return 'alcove';
		default:
			return null;
	}
};
