export type Equipment = 'AC' | 'Automatic' | 'Kitchen' | 'TV' | 'Bathroom';

export type VehicleForm = 'Van' | 'Fully Integrated' | 'Alcove';

export interface FiltersState {
	location: string;
	equipment: Equipment[];
	form: VehicleForm | '';
}
