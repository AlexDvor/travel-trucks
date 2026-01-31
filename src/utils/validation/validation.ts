import * as Yup from 'yup';

export const bookingSchema = Yup.object({
	name: Yup.string().min(2).required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	date: Yup.date().required('Booking date is required'),
	comment: Yup.string().max(300),
});
