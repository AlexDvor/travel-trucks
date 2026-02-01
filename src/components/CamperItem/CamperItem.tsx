import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';

import LabelFeatures from '../../ui/LabelFeatures/LabelFeatures';
import LinkButton from '../../ui/LinkButton/LinkButton';
import ReviewLocation from '../../ui/ReviewLocation/ReviewLocation';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';

import s from './CamperItem.module.css';

interface ICamperItem {
	item: ICamper;
}

const CamperItem: FC<ICamperItem> = ({ item }) => {
	return (
		<li>
			<div className={s.card}>
				<div className={s.imageLayout}>
					<img src={item.gallery[0].thumb} />
				</div>
				<div className={s.info}>
					<div className={s.titleBox}>
						<h2>{item.name}</h2>
						<div className={s.priceBox}>
							<p>{`€${item.price}.00`}</p>
							<FavoriteBtn item={item} />
						</div>
					</div>

					<ReviewLocation
						location={item.location}
						rating={item.rating}
						reviews={item.reviews}
					/>

					<p
						className={s.shortDescription}
					>{`${item.description.slice(0, 70)}...`}</p>

					<LabelFeatures car={item} length={4} />

					<LinkButton
						path={`/catalog/${item.id}`}
						title='Show More'
						className={s.bottomBtn}
					/>
				</div>
			</div>
		</li>
	);
};

export default CamperItem;
