import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';

import ApiCamper from '../../api/apiCamper';
import CamperList from '../../components/CamperList/CamperList';

import s from './CatalogPage.module.css';

const CataloPage: FC = () => {
	const [items, setItems] = useState<ICamper[]>([]);

	useEffect(() => {
		const fetch = async () => {
			try {
				const data = await ApiCamper.getData();
				setItems(data.items);
			} catch (error) {
				console.log('🚀 ~ error:', error);
			}
		};

		fetch();
	}, []);

	return (
		<div className='container'>
			<div className={s.wrapper}>
				<div className={s.filtersBox}>
					<p>filters</p>
				</div>
				<div className={s.catalogBox}>
					<CamperList list={items} />
				</div>
			</div>
		</div>
	);
};

export default CataloPage;
