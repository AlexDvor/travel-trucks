import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { FiltersState } from '../../interfaces/filter';

import CamperList from '../../components/CamperList/CamperList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import CamperSkeleton from '../../ui/CamperSkeleton/CamperSkeleton';

import { useAppDispatch } from '../../hooks/redux';
import { fetchCampers } from '../../store/campersOps';
import { useSelector } from 'react-redux';
import { selectCampers, selectLoading } from '../../store/campersSlice';

import s from './CatalogPage.module.css';

const initialFilters: FiltersState = {
	location: '',
	equipment: [],
	type: '',
};

const CatalogPage: FC = () => {
	const carList = useSelector(selectCampers);
	const isLoading = useSelector(selectLoading);
	const dispatch = useAppDispatch();
	const [filters, setFilters] = useState<FiltersState>(initialFilters);

	const handleSearch = () => {
		console.log(filters);
	};

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

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
					{isLoading ? (
						<CamperSkeleton count={6} />
					) : (
						<CamperList list={carList} />
					)}
				</div>
			</div>
		</div>
	);
};

export default CatalogPage;
