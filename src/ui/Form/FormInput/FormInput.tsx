import type { FC, InputHTMLAttributes } from 'react';

import { useField } from 'formik';

import clsx from 'clsx';

import s from './FormInput.module.css';

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
}

const FormInput: FC<IFormInput> = ({ label, ...props }) => {
	const [field, meta] = useField(props.name);

	return (
		<div className={s.field}>
			<input
				{...field}
				{...props}
				className={clsx(s.input, meta.touched && meta.error && s.errorInput)}
				placeholder={label}
			/>
			{meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
		</div>
	);
};

export default FormInput;
