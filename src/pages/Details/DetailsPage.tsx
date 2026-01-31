import { useEffect, useState, type FC } from 'react';
import { NavLink, Outlet, useParams } from 'react-router';
import type { ICamper } from '../../interfaces/camper';

import ApiCamper from '../../api/apiCamper';

import ReviewLocation from '../../ui/ReviewLocation/ReviewLocation';
import BookingForm from '../../components/BookingForm/BookingForm';

import clsx from 'clsx';
import s from './DetailsPage.module.css';

//Fix jsx component

const DetailsPage: FC = () => {
	const [car, setCar] = useState<ICamper | null>(null);

	const { carId } = useParams();

	useEffect(() => {
		const fetchCarById = async () => {
			if (!carId) return;
			try {
				const car = await ApiCamper.getCarById(carId);
				setCar(car);
			} catch (error) {
				setCar(null);
				console.log('🚀 ~ error:', error);
			}
		};

		fetchCarById();
	}, [carId]);

	const isActive = ({ isActive }: { isActive: boolean }) =>
		clsx(s.link, isActive && s.active);

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
				<NavLink className={isActive} to='review'>
					Reviews
				</NavLink>
			</div>

			<div className={s.detailsThumb}>
				{car && <Outlet context={{ car }} />}
				<BookingForm />
			</div>
		</div>
	);
};

export default DetailsPage;
