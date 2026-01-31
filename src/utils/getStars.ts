export const getStars = (rating: number) =>
	Array.from({ length: 5 }, (_, i) => i < rating);
