import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import { capitalize } from '../../utils/string/capitalize';
import Icon from '../Icon/Icon';
import s from './CarFeatures.module.css';
import clsx from 'clsx';

interface ICarFeatures {
	car: ICamper | null;
	className?: string;
}

const CarFeatures: FC<ICarFeatures> = ({ car, className }) => {
	if (!car) return null;
	const { AC, TV, bathroom, kitchen, transmission, engine, radio } = car;
	console.log('🚀 ~ car:', car);

	// const features = [
	// 	{ label: capitalize(transmission), icon: 'icon-diagram', show: true },
	// 	{ label: capitalize(engine), icon: 'icon-fuel', show: true },
	// 	{ label: 'AC', icon: 'icon-wind', show: AC },
	// 	{ label: 'TV', icon: 'icon-tv', show: TV },
	// 	{ label: 'Bathroom', icon: 'icon-shower', show: bathroom },
	// 	{ label: 'Kitchen', icon: 'icon-fridge', show: kitchen },
	// 	{ label: 'Radio', icon: 'icon-radio-list', show: radio },
	// ];

	const features = () => {
		if (!car) return [];
		const arr = [
			{ label: capitalize(transmission), icon: 'icon-diagram', show: true },
			{ label: capitalize(engine), icon: 'icon-fuel', show: true },
			{ label: 'AC', icon: 'icon-wind', show: AC },
			{ label: 'TV', icon: 'icon-tv', show: TV },
			{ label: 'Bathroom', icon: 'icon-shower', show: bathroom },
			{ label: 'Kitchen', icon: 'icon-fridge', show: kitchen },
			{ label: 'Radio', icon: 'icon-radio-list', show: radio },
		];
		return arr;
	};

	return (
		<ul className={clsx(s.list, className)}>
			{features().length > 0 &&
				features()
					.filter(item => item.show)
					.map((item, idx) => (
						<li className={s.item} key={idx}>
							<Icon name={item.icon} />
							{item.label}
						</li>
					))}
		</ul>
	);
};

export default CarFeatures;
