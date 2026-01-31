import type { FC } from 'react';
import s from './CardSkeleton.module.css';

const CardSkeleton: FC<{ count: number }> = ({ count }) => {
	return (
		<>
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className={s.cardSkeleton} />
			))}
		</>
	);
};

export default CardSkeleton;
