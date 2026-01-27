import type { FC } from 'react';
import s from './Hero.module.css';
import Button from '../../ui/Button/Button';

const Hero: FC = () => {
	return (
		<section className='container paddingNone'>
			<div className={s.backgroundThumb}>
				<h1 className={s.title}>Campers of your dreams</h1>
				<p className={s.subtitle}>
					You can find everything you want in our catalog{' '}
				</p>
				<Button title='View Now' variant='primary' handleClick={() => {}} />
			</div>
		</section>
	);
};

export default Hero;
