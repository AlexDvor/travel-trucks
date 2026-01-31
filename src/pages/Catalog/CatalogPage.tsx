import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import type { FiltersState } from '../../interfaces/filter';

import ApiCamper from '../../api/apiCamper';
import CamperList from '../../components/CamperList/CamperList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';

import s from './CatalogPage.module.css';

const initialFilters: FiltersState = {
	location: '',
	equipment: [],
	type: '',
};

const CataloPage: FC = () => {
	const [carList, setCarList] = useState<ICamper[]>([]);
	const [filters, setFilters] = useState<FiltersState>(initialFilters);

	const handleSearch = () => {
		console.log(filters);
	};

	useEffect(() => {
		const fetch = async () => {
			try {
				const data = await ApiCamper.getData();
				setCarList(data.items);
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
					<CamperList list={carList} />
				</div>
			</div>
		</div>
	);
};

export default CataloPage;
