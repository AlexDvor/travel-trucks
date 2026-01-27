import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import { capitalize } from '../../utils/string/capitalize';

interface ICarFeatures {
	car: ICamper;
}

const CarFeatures: FC<ICarFeatures> = ({ car }) => {
	const { AC, TV, bathroom, kitchen, transmission, engine } = car;
	return (
		<>
			<p>{capitalize(transmission)}</p>
		</>
	);
};

export default CarFeatures;
