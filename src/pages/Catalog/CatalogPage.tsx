import { useEffect } from 'react';

import type { FC } from 'react';
import type { FiltersState } from '../../interfaces/filter';

import CamperList from '../../components/CamperList/CamperList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import CamperSkeleton from '../../ui/CamperSkeleton/CamperSkeleton';

import { useAppDispatch } from '../../hooks/redux';
import { fetchCampers } from '../../store/campersOps';
import { useSelector } from 'react-redux';
import { selectCampers, selectLoading } from '../../store/campersSlice';

import { selectStateFilter, setFilters, updateFilters } from '../../store/filterSlice';

import s from './CatalogPage.module.css';

const CatalogPage: FC = () => {
	const dispatch = useAppDispatch();

	const carList = useSelector(selectCampers);
	const isLoading = useSelector(selectLoading);
	const filters = useSelector(selectStateFilter);

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	const setFiltersState: React.Dispatch<
		React.SetStateAction<FiltersState>
	> = updater => {
		if (typeof updater === 'function') {
			dispatch(updateFilters(updater(filters)));
		} else {
			dispatch(setFilters(updater));
		}
	};

	const handleSearch = () => {
		console.log('Search with filters:', filters);
	};

	return (
		<div className='container'>
			<div className={s.wrapper}>
				<div className={s.filtersBox}>
					<FiltersPanel
						filters={filters}
						setFilters={setFiltersState}
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
