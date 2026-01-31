import { useLocation, useOutletContext } from 'react-router';
import type { ICamper } from '../../interfaces/camper';
import { capitalize } from '../../utils/string/capitalize';
import CarFeatures from '../../ui/CarFeatures/CarFeatures';
import s from './Features.module.css';

const Features = () => {
	const location = useLocation();
	const { car } = useOutletContext();
	console.log('🚀 ~ car:', car);

	// const car = location.state as ICamper;
	console.log('🚀 ~ car:', car);

	const fields = ['form', 'length', 'height', 'width', 'tank', 'consumption'] as const;

	// const listDetails = fields.map(key => ({
	// 	name: capitalize(key),
	// 	value: car[key],
	// }));

	const listDetails = () => {
		if (!car) return [];
		return fields.map(key => ({ name: capitalize(key), value: car[key] }));
	};

	return (
		<div className={s.container}>
			<CarFeatures car={car} className={s.margin} />

			<div className={s.infoThumb}>
				<h4 className={s.title}>Vehicle details</h4>
				<ul className={s.list}>
					{listDetails().length > 0 &&
						listDetails().map(item => (
							<li className={s.item}>
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
