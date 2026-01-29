export type Equipment = 'AC' | 'Automatic' | 'Kitchen' | 'TV' | 'Bathroom';

export type VehicleType = 'Van' | 'Fully Integrated' | 'Alcove';

export interface FiltersState {
	location: string;
	equipment: Equipment[];
	type: VehicleType | '';
}
