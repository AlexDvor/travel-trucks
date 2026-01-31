import type { FC } from 'react';
import { Link } from 'react-router';
import Icon from '../../ui/Icon/Icon';
import Button from '../../ui/Button/Button';
import s from './NotFoundPage.module.css';

const NotFoundPage: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.card}>
				<Icon name='icon-map' size={48} className={s.icon} />

				<h1 className={s.code}>404</h1>
				<h2 className={s.title}>Page not found</h2>

				<p className={s.text}>
					Looks like this road leads nowhere. Let’s get you back to exploring
					campers.
				</p>

				<Link to='/'>
					<Button title='Go Home' variant='primary' handleClick={() => {}} />
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
