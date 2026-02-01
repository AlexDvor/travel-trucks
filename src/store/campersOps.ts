import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import ApiCamper, { type ICamperResponse } from '../api/apiCamper';

export const fetchCampers = createAsyncThunk<
	ICamperResponse,
	void,
	{ rejectValue: string }
>('campers/fetchCampers', async (_, { rejectWithValue }) => {
	try {
		const response = await ApiCamper.getData();
		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return rejectWithValue(
				error.response?.data?.message ||
					'Something went wrong. Please try again later',
			);
		}
		if (error instanceof Error) {
			return rejectWithValue(error.message);
		}

		return rejectWithValue('Unknown error');
	}
});
