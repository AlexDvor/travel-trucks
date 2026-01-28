import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import { capitalize } from '../../utils/string/capitalize';
import Icon from '../Icon/Icon';
import s from './CarFeatures.module.css';

interface ICarFeatures {
	car: ICamper;
}

// Rename Car Label
const CarFeatures: FC<ICarFeatures> = ({ car }) => {
	const { AC, TV, bathroom, kitchen, transmission, engine } = car;

	const features = [
		{ label: capitalize(transmission), icon: 'icon-diagram', show: true },
		{ label: capitalize(engine), icon: 'icon-fuel-pump', show: true },
		{ label: 'AC', icon: 'icon-wind', show: AC },
		{ label: 'TV', icon: 'icon-tv', show: TV },
		{ label: 'Bathroom', icon: 'icon-ph_shower', show: bathroom },
		{ label: 'Kitchen', icon: 'icon-solar_fridge-outline', show: kitchen },
	];

	return (
		<ul className={s.list}>
			{features
				.filter(item => item.show)
				.map(item => (
					<li className={s.item}>
						<Icon name={item.icon} />
						{item.label}
					</li>
				))}
		</ul>
	);
};

export default CarFeatures;
