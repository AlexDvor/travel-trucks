import type { FC } from 'react';
import { Formik, Form } from 'formik';
import { bookingSchema } from '../../utils/validation/validation';

import FormInput from '../../ui/Form/FormInput/FormInput';
import FormTextarea from '../../ui/Form/FormTextarea/FormTextarea';
import Button from '../../ui/Button/Button';

import s from './BookingForm.module.css';

interface IFormValues {
	name: string;
	email: string;
	date: string;
	comment: string;
}

const initialValues: IFormValues = {
	name: '',
	email: '',
	date: '',
	comment: '',
};

const BookingForm: FC = () => {
	const handleSubmit = (values: IFormValues) => {
		console.log('Form data:', values);
	};

	return (
		<div className={s.card}>
			<h3 className={s.title}>Book your campervan now</h3>
			<p className={s.subtitle}>Stay connected! We are always ready to help you.</p>

			<Formik
				initialValues={initialValues}
				validationSchema={bookingSchema}
				onSubmit={handleSubmit}
			>
				<Form className={s.form}>
					<FormInput name='name' label='Name*' />
					<FormInput name='email' label='Email*' type='email' />
					<FormInput name='date' label='Booking date*' type='date' />
					<FormTextarea name='comment' label='Comment' rows={4} />
					<Button title='Send' variant='primary' type='submit' />
				</Form>
			</Formik>
		</div>
	);
};

export default BookingForm;
