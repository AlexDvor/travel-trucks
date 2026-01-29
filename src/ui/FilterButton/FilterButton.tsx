import type { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import Icon from '../Icon/Icon';

import s from './FilterButton.module.css';

interface IFilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	iconName: string;
	active?: boolean;
}

const FilterButton: FC<IFilterButtonProps> = ({
	active = false,
	iconName,
	children,
	...props
}) => {
	return (
		<button className={clsx(s.btn, active && s.active)} {...props}>
			<Icon name={iconName} size={32} className={s.icon} />
			{children}
		</button>
	);
};

export default FilterButton;
