import type { FC } from 'react';

import { Link } from 'react-router';
import clsx from 'clsx';

import s from './LinkButton.module.css';

interface LinkButtonProps {
	title: string;
	path: string;
	className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({ title, path, className }) => {
	return (
		<>
			<Link className={clsx(s.link, className)} to={path}>
				{title}
			</Link>
		</>
	);
};

export default LinkButton;
