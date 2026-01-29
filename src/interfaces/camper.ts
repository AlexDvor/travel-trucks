type IGalleryItem = {
	original: string;
	thumb: string;
};

export type IReview = {
	comment: string;
	reviewer_name: string;
	reviewer_rating: number;
};

export interface ICamper {
	id: string;
	name: string;
	price: number;
	rating: number;
	location: string;
	description: string;

	engine: string;
	transmission: string;
	form: string;
	consumption: string;
	tank: string;
	length: string;
	width: string;
	height: string;

	gallery: IGalleryItem[];
	reviews: IReview[];

	AC: boolean;
	TV: boolean;
	bathroom: boolean;
	kitchen: boolean;
	microwave: boolean;
	refrigerator: boolean;
	gas: boolean;
	water: boolean;
	radio: boolean;
}
