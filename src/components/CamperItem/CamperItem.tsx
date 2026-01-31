import type { FC } from 'react';
import { Link } from 'react-router';
import type { ICamper } from '../../interfaces/camper';
import Button from '../../ui/Button/Button';
import FavoriteBtn from '../../ui/FavoriteBtn/FavoriteBtn';
import LabelFeatures from '../../ui/LabelFeatures/LabelFeatures';
import ReviewLocation from '../../ui/ReviewLocation/ReviewLocation';
import s from './CamperItem.module.css';

interface ICamperItem {
	item: ICamper;
}

const CamperItem: FC<ICamperItem> = ({ item }) => {
	return (
		<li>
			<Link to={`/catalog/${item.id}`} className={s.card}>
				<div className={s.imageLayout}>
					<img src={item.gallery[0].thumb} />
				</div>
				<div className={s.info}>
					<div className={s.titleBox}>
						<h2>{item.name}</h2>
						<div className={s.priceBox}>
							<p>{`€${item.price}.00`}</p>
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

					<LabelFeatures car={item} length={4} />

					<Button
						title='Show More'
						variant='primary'
						handleClick={() => {}}
						className={s.bottomBtn}
					/>
				</div>
			</Link>
		</li>
	);
};

export default CamperItem;
