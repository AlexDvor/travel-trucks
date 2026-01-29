import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import { capitalize } from '../../utils/string/capitalize';
import Icon from '../Icon/Icon';
import s from './CarFeatures.module.css';

interface ICarFeatures {
	car: ICamper;
}

const CarFeatures: FC<ICarFeatures> = ({ car }) => {
	const { AC, TV, bathroom, kitchen, transmission, engine } = car;

	const features = [
		{ label: capitalize(transmission), icon: 'icon-diagram', show: true },
		{ label: capitalize(engine), icon: 'icon-fuel', show: true },
		{ label: 'AC', icon: 'icon-wind', show: AC },
		{ label: 'TV', icon: 'icon-tv', show: TV },
		{ label: 'Bathroom', icon: 'icon-shower', show: bathroom },
		{ label: 'Kitchen', icon: 'icon-fridge', show: kitchen },
	];

	return (
		<ul className={s.list}>
			{features
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
