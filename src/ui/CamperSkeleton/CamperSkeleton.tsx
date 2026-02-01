import type { FC } from 'react';

import s from './CamperSkeleton.module.css';

interface ICamperSkeletonProps {
	count?: number;
}

const CamperSkeleton: FC<ICamperSkeletonProps> = ({ count = 6 }) => {
	return (
		<>
			{Array.from({ length: count }).map((_, i) => (
				<li key={i} className={s.card}>
					<div className={s.imageLayout} />

					<div className={s.info}>
						<div className={s.titleBox}>
							<div className={s.title} />
							<div className={s.price} />
						</div>

						<div className={s.reviewRow} />

						<div className={s.description} />

						<div className={s.featuresRow}>
							<div />
							<div />
							<div />
							<div />
						</div>

						<div className={s.button} />
					</div>
				</li>
			))}
		</>
	);
};

export default CamperSkeleton;
