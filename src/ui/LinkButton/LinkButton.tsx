import type { FC } from 'react';

import { Link } from 'react-router';

import s from './LinkButton.module.css';

interface LinkButtonProps {
	title: string;
	path: string;
}

const LinkButton: FC<LinkButtonProps> = ({ title, path }) => {
	return (
		<>
			<Link className={s.link} to={path}>
				{title}
			</Link>
		</>
	);
};

export default LinkButton;
