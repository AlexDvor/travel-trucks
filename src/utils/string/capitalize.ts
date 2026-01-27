export const capitalize = (str: string) => {
	if (str.length > 2 && typeof str === 'string') {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	return '';
};
