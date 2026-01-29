import { useEffect, useState, type FC } from 'react';
import { useParams } from 'react-router';
import type { ICamper } from '../../interfaces/camper';

import ApiCamper from '../../api/apiCamper';
import ReviewLocation from '../../ui/ReviewLocation/ReviewLocation';

import s from './DetailsPage.module.css';

type IDetailsPage = object;

const DetailsPage: FC<IDetailsPage> = () => {
	const [car, setCar] = useState<ICamper | null>(null);
	const { carId } = useParams();

	useEffect(() => {
		const fetchCarById = async () => {
			if (!carId) return;

			try {
				const car = await ApiCamper.getCarById(carId);
				if (!car) return;
				setCar(car);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};

		fetchCarById();
	}, [carId]);
	console.log('car', car);
	return (
		<div className='container'>
			{car && (
				<>
					<h2 className={s.title}>{car.name}</h2>
					<ReviewLocation
						location={car.location}
						rating={car.rating}
						reviews={car.reviews}
						className={s.review}
					/>
					<p className={s.price}>{`€${car.price}.00`}</p>

					<ul className={s.grid}>
						{car.gallery.length > 0 &&
							car.gallery.map((item, idx) => (
								<li className={s.imageThumb} key={idx}>
									<img src={item.original} alt={car.name} />
								</li>
							))}
					</ul>

					<p className={s.description}>{car.description}</p>
				</>
			)}
		</div>
	);
};

export default DetailsPage;
