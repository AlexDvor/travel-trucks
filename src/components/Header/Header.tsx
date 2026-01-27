import type { FC } from 'react';
import { Link } from 'react-router';
import Logo from '../../ui/Logo/Logo';
import s from './Header.module.css';

type IHeader = object;

const IHeader: FC<IHeader> = () => {
	return (
		<header className='container'>
			<div className={s.wrapper}>
				<div>
					<Logo />
				</div>

				<nav className={s.navThumb}>
					<ul className={s.navList}>
						<li>
							<Link to={''}>Home</Link>
						</li>
						<li>
							<Link to={''}>Catalog</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default IHeader;
