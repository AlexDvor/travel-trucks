import axios from 'axios';
import type { ICamper } from '../interfaces/camper';
axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

interface ICamperResponse {
	total: number;
	items: ICamper[];
}

const ApiCamper = {
	async getData() {
		const { data } = await axios.get<ICamperResponse>('/campers');
		return data;
	},
	async getDataById(id) {
		const data = await axios.get(`/campers/${id}`);
		return data;
	},
};

export default ApiCamper;
