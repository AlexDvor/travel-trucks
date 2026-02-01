import type { FC } from 'react';
import type { IReview } from '../../../interfaces/camper';

import Icon from '../../Icon/Icon';

import { getStars } from '../../../utils/getStars';

import s from './ReviewItem.module.css';

interface ReviewItemProps {
	item: IReview;
}

const ReviewItem: FC<ReviewItemProps> = ({ item }) => {
	const activeIconsByStar = getStars(item.reviewer_rating);

	return (
		<li>
			<div className={s.userInfoThumb}>
				<div className={s.avatar}>{item.reviewer_name[0]}</div>
				<div className={s.userInfo}>
					<h4 className={s.name}>{item.reviewer_name}</h4>
					<ul className={s.listIcon}>
						{activeIconsByStar.map((item, i) => (
							<li className={s.icon} key={i}>
								<Icon
									name='icon-star'
									style={
										{
											'--color1': item ? 'gold' : 'lightgray',
										} as React.CSSProperties
									}
									size={16}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>

			<p className={s.comment}>{item.comment}</p>
		</li>
	);
};

export default ReviewItem;
