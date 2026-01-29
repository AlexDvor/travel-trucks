import type { FC } from 'react';
import { NavLink } from 'react-router';
import Logo from '../../ui/Logo/Logo';
import s from './Header.module.css';
import clsx from 'clsx';

type IHeader = object;

const IHeader: FC<IHeader> = () => {
	const getActiveClass = ({ isActive }: { isActive: boolean }) =>
		clsx(s.link, isActive && s.activeLink);

	return (
		<header className={s.header}>
			<div className='container'>
				<div className={s.wrapper}>
					<div>
						<Logo />
					</div>

					<nav className={s.navThumb}>
						<ul className={s.navList}>
							<li>
								<NavLink className={getActiveClass} to={'/'}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink className={getActiveClass} to={'/catalog'}>
									Catalog
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default IHeader;
