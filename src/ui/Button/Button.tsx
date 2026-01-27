import type { FC } from 'react';
import s from './Button.module.css';
import clsx from 'clsx';

interface IButton {
	title: string;
	handleClick: () => void;
	variant: 'primary' | 'secondary';
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const variantClasses = {
	primary: s.primary,
	secondary: s.secondary,
};

const Button: FC<IButton> = ({ title, handleClick, type = 'button', variant }) => {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={clsx(s.btn, variantClasses[variant])}
		>
			{title}
		</button>
	);
};

export default Button;
