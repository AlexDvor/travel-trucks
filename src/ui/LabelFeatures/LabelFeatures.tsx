import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import { capitalize } from '../../utils/string/capitalize';

import Icon from '../Icon/Icon';

import clsx from 'clsx';

import s from './LabelFeatures.module.css';

interface ILabelFeatures {
	car: ICamper | null;
	className?: string;
	length?: number;
}

const LabelFeatures: FC<ILabelFeatures> = ({ car, className, length }) => {
	if (!car) return null;
	const { AC, TV, bathroom, kitchen, transmission, engine, radio } = car;

	const features = [
		{ label: capitalize(transmission), icon: 'icon-diagram', show: true },
		{ label: capitalize(engine), icon: 'icon-fuel', show: true },
		{ label: 'AC', icon: 'icon-wind', show: AC },
		{ label: 'TV', icon: 'icon-tv', show: TV },
		{ label: 'Bathroom', icon: 'icon-shower', show: bathroom },
		{ label: 'Kitchen', icon: 'icon-fridge', show: kitchen },
		{ label: 'Radio', icon: 'icon-radio-list', show: radio },
	];

	const listLabel = length ? features.slice(0, length) : features;

	return (
		<ul className={clsx(s.list, className)}>
			{listLabel.length > 0 &&
				listLabel
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

export default LabelFeatures;
