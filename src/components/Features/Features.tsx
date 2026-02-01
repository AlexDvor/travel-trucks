import { useOutletContext } from 'react-router';
import type { ICamper } from '../../interfaces/camper';

import CarFeatures from '../../ui/LabelFeatures/LabelFeatures';

import { capitalize } from '../../utils/string/capitalize';

import s from './Features.module.css';

const Features = () => {
	const { car } = useOutletContext<{ car: ICamper }>();

	const fields = ['form', 'length', 'height', 'width', 'tank', 'consumption'] as const;

	const listDetails = fields.map(key => ({
		name: capitalize(key),
		value: car[key],
	}));

	return (
		<div className={s.container}>
			<CarFeatures car={car} className={s.margin} />

			<div className={s.infoThumb}>
				<h4 className={s.title}>Vehicle details</h4>
				<ul className={s.list}>
					{listDetails.length > 0 &&
						listDetails.map((item, idx) => (
							<li className={s.item} key={idx}>
								<p>{item.name}</p>
								<p>{item.value}</p>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Features;
