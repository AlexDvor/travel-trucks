import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import CamperItem from '../CamperItem/CamperItem';
import s from './CamperList.module.css';

interface ICamperList {
	list: ICamper[];
}

const CamperList: FC<ICamperList> = ({ list }) => {
	console.log('🚀 ~ list:', list);
	return (
		<ul className={s.list}>
			{list.length > 0 &&
				list.map((item, idx) => <CamperItem item={item} key={item.id || idx} />)}
		</ul>
	);
};

export default CamperList;
