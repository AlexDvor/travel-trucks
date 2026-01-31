import { useEffect, useState, type FC } from 'react';
import { NavLink, Outlet, useParams } from 'react-router';
import type { ICamper } from '../../interfaces/camper';

import ApiCamper from '../../api/apiCamper';
import ReviewLocation from '../../ui/ReviewLocation/ReviewLocation';

import s from './DetailsPage.module.css';
import clsx from 'clsx';

type IDetailsPage = object;

const DetailsPage: FC<IDetailsPage> = () => {
	const [car, setCar] = useState<ICamper | null>(null);

	const { carId } = useParams();

	const isActive = ({ isActive }: { isActive: boolean }) =>
		clsx(s.link, isActive && s.active);

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

	return (
		<div className='container'>
			{car && (
				<div className={s.section}>
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
									<img
										src={item.thumb}
										alt={car.name}
										width={292}
										height={312}
									/>
								</li>
							))}
					</ul>

					<p className={s.description}>{car.description}</p>
				</div>
			)}

			<div className={s.navThumb}>
				<NavLink className={isActive} to='features'>
					Features
				</NavLink>
				<NavLink className={isActive} to='review' state={car?.reviews}>
					Reviews
				</NavLink>
			</div>
			<Outlet />
		</div>
	);
};

export default DetailsPage;
