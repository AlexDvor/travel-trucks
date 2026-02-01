import type { FC } from 'react';
import s from './DetailsSkeleton.module.css';

const DetailsSkeleton: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.section}>
				<div className={s.title} />
				<div className={s.review} />
				<div className={s.price} />

				<ul className={s.grid}>
					{Array.from({ length: 4 }).map((_, i) => (
						<li key={i} className={s.imageThumb} />
					))}
				</ul>

				<div className={s.description} />
				<div className={s.descriptionShort} />
			</div>

			<div className={s.navThumb}>
				<div className={s.tab} />
				<div className={s.tab} />
			</div>

			<div className={s.detailsThumb}>
				<div className={s.featuresBlock} />
				<div className={s.formBlock} />
			</div>
		</div>
	);
};

export default DetailsSkeleton;
