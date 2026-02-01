import type { ICamper } from '../../interfaces/camper';
import type { Equipment } from '../../interfaces/filter';

export const getMatchEquipment = (eq: Equipment, camper: ICamper) => {
	switch (eq) {
		case 'AC':
			return camper.AC;
		case 'TV':
			return camper.TV;
		case 'Bathroom':
			return camper.bathroom;
		case 'Kitchen':
			return camper.kitchen;
		case 'Automatic':
			return camper.transmission.toLowerCase() === 'automatic';
		default:
			return true;
	}
};
