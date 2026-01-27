import type { FC } from 'react';
import s from './Hero.module.css';

const Hero: FC = () => {
	return (
		<section className='container paddingNone'>
			<div className={s.backgroundThumb}>
				<h1></h1>
				<p></p>
			</div>
		</section>
	);
};

export default Hero;
