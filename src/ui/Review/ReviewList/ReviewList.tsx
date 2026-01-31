import type { FC } from 'react';
import type { IReview } from '../../../interfaces/camper';

import ReviewItem from '../ReviewItem/ReviewItem';

import s from './ReviewList.module.css';

interface ReviewListProps {
	reviews: IReview[];
}

const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
	return (
		<ul className={s.list}>
			{reviews.map((item, idx) => (
				<ReviewItem item={item} key={idx} />
			))}
		</ul>
	);
};

export default ReviewList;
