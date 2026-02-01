import { useEffect, useState, type FC } from 'react';
import { NavLink, Outlet, useParams } from 'react-router';

import type { ICamper } from '../../interfaces/camper';
import ApiCamper from '../../api/apiCamper';

import ReviewLocation from '../../ui/ReviewLocation/ReviewLocation';
import BookingForm from '../../components/BookingForm/BookingForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import DetailsSkeleton from '../../components/DetailsSkeleton/DetailsSkeleton';

import clsx from 'clsx';
import s from './DetailsPage.module.css';
import axios from 'axios';

const DetailsPage: FC = () => {
	const [car, setCar] = useState<ICamper | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const { carId } = useParams();

	useEffect(() => {
		const fetchCarById = async () => {
			if (!carId) return;

			try {
				setIsLoading(true);
				setError(null);
				const carData = await ApiCamper.getCarById(carId);
				setCar(carData);
			} catch (err: unknown) {
				setCar(null);
				if (axios.isAxiosError(err)) {
					setError(err.response?.data?.message || err.message);
				} else if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('Unexpected error occurred');
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchCarById();
	}, [carId]);

	const isActive = ({ isActive }: { isActive: boolean }) =>
		clsx(s.link, isActive && s.active);

	return (
		<div className='container'>
			{isLoading && <DetailsSkeleton />}

			{!isLoading && error && <ErrorMessage message={error} />}

			{!isLoading && !error && car && (
				<>
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
							{car.gallery.map((item, idx) => (
								<li className={s.imageThumb} key={idx}>
									<img src={item.thumb} alt={car.name} />
								</li>
							))}
						</ul>

						<p className={s.description}>{car.description}</p>
					</div>

					<div className={s.navThumb}>
						<NavLink className={isActive} to='features'>
							Features
						</NavLink>
						<NavLink className={isActive} to='review'>
							Reviews
						</NavLink>
					</div>

					<div className={s.detailsThumb}>
						<Outlet context={{ car }} />
						<BookingForm />
					</div>
				</>
			)}
		</div>
	);
};

export default DetailsPage;
