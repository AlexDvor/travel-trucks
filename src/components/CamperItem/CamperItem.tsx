import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import s from './CamperItem.module.css';
import CarFeatures from '../../ui/CarFeatures/CarFeatures';
import ReviewLocation from '../../ui/ReviewLocation/ReviewLocation';
import FavoriteBtn from '../../ui/FavoriteBtn/FavoriteBtn';

interface ICamperItem {
	item: ICamper;
}

const CamperItem: FC<ICamperItem> = ({ item }) => {
	return (
		<li className={s.card}>
			<div className={s.imageLayout}>
				<img src={item.gallery[0].thumb} />
			</div>
			<div className={s.info}>
				<div className={s.titleBox}>
					<h2>{item.name}</h2>
					<div className={s.priceBox}>
						<p>{`€${item.price}`}</p>
						<FavoriteBtn />
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

				<CarFeatures car={item} />
			</div>
		</li>
	);
};

export default CamperItem;
