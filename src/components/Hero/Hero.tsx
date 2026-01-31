import type { FC } from 'react';
import LinkButton from '../../ui/LinkButton/LinkButton';
import s from './Hero.module.css';

const Hero: FC = () => {
	return (
		<section className='container paddingNone'>
			<div className={s.backgroundThumb}>
				<h1 className={s.title}>Campers of your dreams</h1>
				<p className={s.subtitle}>
					You can find everything you want in our catalog{' '}
				</p>
				<LinkButton title='View Now' path='/catalog' />
			</div>
		</section>
	);
};

export default Hero;
