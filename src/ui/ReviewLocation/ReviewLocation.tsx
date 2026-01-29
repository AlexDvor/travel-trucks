import type { FC } from 'react';
import s from './ReviewLocation.module.css';
import type { IReview } from '../../interfaces/camper';
import Icon from '../Icon/Icon';

interface IReviewLocation {
	rating: number;
	reviews: IReview[];
	location: string;
}

const ReviewLocation: FC<IReviewLocation> = ({ rating, reviews, location }) => {
	return (
		<>
			<div className={s.wrapper}>
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
