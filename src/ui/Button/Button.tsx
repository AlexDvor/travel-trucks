import type { FC } from 'react';

import clsx from 'clsx';

import s from './Button.module.css';

interface IButton {
	title: string;
	handleClick?: () => void;
	variant: 'primary' | 'secondary';
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	className?: string;
}

const variantClasses = {
	primary: s.primary,
	secondary: s.secondary,
};

const Button: FC<IButton> = ({
	title,
	handleClick = () => {},
	type = 'button',
	variant,
	className,
	...props
}) => {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={clsx(s.btn, variantClasses[variant], className)}
			{...props}
		>
			{title}
		</button>
	);
};

export default Button;
