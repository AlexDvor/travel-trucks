import type { FC } from 'react';
import type { IReview } from '../../interfaces/camper';
import Icon from '../Icon/Icon';
import clsx from 'clsx';
import s from './ReviewLocation.module.css';

interface IReviewLocation {
	rating: number;
	reviews: IReview[];
	location: string;
	className?: string;
}

const ReviewLocation: FC<IReviewLocation> = ({
	rating,
	reviews,
	location,
	className,
}) => {
	return (
		<>
			<div className={clsx(s.wrapper, className)}>
				<div className={s.rating}>
					<Icon
						name='icon-star'
						style={{ '--color1': 'gold' } as React.CSSProperties}
						size={16}
						className={s.ratingIcon}
					/>
					<p>
						{rating} {`(${reviews.length} Reviews)`}
					</p>
				</div>
				<div className={s.location}>
					<Icon name='icon-map' size={16} className={s.locationIcon} />
					<p>{location}</p>
				</div>
			</div>
		</>
	);
};

export default ReviewLocation;
