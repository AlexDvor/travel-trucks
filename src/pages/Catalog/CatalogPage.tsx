import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';

import ApiCamper from '../../api/apiCamper';
import CamperList from '../../components/CamperList/CamperList';

import s from './CatalogPage.module.css';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import type { FiltersState } from '../../interfaces/filter';

const initialFilters: FiltersState = {
	location: '',
	equipment: [],
	type: '',
};

const CataloPage: FC = () => {
	const [items, setItems] = useState<ICamper[]>([]);
	const [filters, setFilters] = useState<FiltersState>(initialFilters);

	const handleSearch = () => {
		console.log(filters);
	};

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
					<FiltersPanel
						filters={filters}
						setFilters={setFilters}
						onSearch={handleSearch}
					/>
				</div>
				<div className={s.catalogBox}>
					<CamperList list={items} />
				</div>
			</div>
		</div>
	);
};

export default CataloPage;
