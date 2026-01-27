import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import s from './CamperItem.module.css';

interface ICamperItem {
	item: ICamper;
}

const CamperItem: FC<ICamperItem> = ({ item }) => {
	return (
		<li className={s.card}>
			<p>{item.id}</p>
		</li>
	);
};

export default CamperItem;
