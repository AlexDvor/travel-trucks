import axios from 'axios';

import type { ICamper } from '../interfaces/camper';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export interface ICamperResponse {
	total: number;
	items: ICamper[];
}

const ApiCamper = {
	async getData() {
		const { data } = await axios.get<ICamperResponse>('/campers');
		return data;
	},
	async getCarById(id: string) {
		const { data } = await axios.get<ICamper>(`/campers/${id}`);
		return data;
	},
};

export default ApiCamper;
