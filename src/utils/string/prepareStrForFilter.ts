export const prepareStrForFilter = (str: string) => {
	return str.split(' ').join('').toLowerCase();
};
