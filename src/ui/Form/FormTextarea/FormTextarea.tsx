import type { FC, TextareaHTMLAttributes } from 'react';

import { useField } from 'formik';

import clsx from 'clsx';

import s from './FormTextarea.module.css';

interface IFormTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	name: string;
}

const FormTextarea: FC<IFormTextarea> = ({ label, ...props }) => {
	const [field, meta] = useField(props.name);

	return (
		<div className={s.field}>
			<textarea
				{...field}
				{...props}
				className={clsx(s.textarea, meta.touched && meta.error && s.errorInput)}
				placeholder={label}
			/>
			{meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
		</div>
	);
};

export default FormTextarea;
