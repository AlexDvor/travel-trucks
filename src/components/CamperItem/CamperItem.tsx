import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import s from './CamperItem.module.css';
import CarFeatures from '../../ui/CarFeatures/CarFeatures';

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
					<p>{`€${item.price}`}</p>
				</div>
				<div className={s.infoBox}>
					<p>
						{item.rating} {`(${item.reviews.length} Reviews)`}
					</p>
					<p>{item.location}</p>
				</div>

				<p>{`${item.description.slice(0, 70)}...`}</p>

				<CarFeatures car={item} />
			</div>
		</li>
	);
};

export default CamperItem;
