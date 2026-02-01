import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { FiltersState } from '../../interfaces/filter';

import CamperList from '../../components/CamperList/CamperList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import CamperSkeleton from '../../ui/CamperSkeleton/CamperSkeleton';

import { useAppDispatch } from '../../hooks/redux';
import { fetchCampers } from '../../store/campersOps';
import { useSelector } from 'react-redux';
import { selectFilteredCampers, selectLoading } from '../../store/campersSlice';
import { resetFilters, selectStateFilter, setFilters } from '../../store/filterSlice';

import s from './CatalogPage.module.css';
import Button from '../../ui/Button/Button';

const CatalogPage: FC = () => {
	const dispatch = useAppDispatch();

	const campers = useSelector(selectFilteredCampers);

	const isLoading = useSelector(selectLoading);

	const appliedFilters = useSelector(selectStateFilter);

	const [localFilters, setLocalFilters] = useState<FiltersState>(appliedFilters);
	const [visibleCount, setVisibleCount] = useState(4);
	const visibleCampers = campers.slice(0, visibleCount);

	useEffect(() => {
		dispatch(fetchCampers());

		return () => {
			dispatch(resetFilters());
			setVisibleCount(4);
		};
	}, [dispatch]);

	const handleLoadMore = () => {
		setVisibleCount(prev => prev + 4);
	};
	const handleSearch = () => {
		dispatch(setFilters(localFilters));
	};

	return (
		<div className='container'>
			<div className={s.wrapper}>
				<div className={s.filtersBox}>
					<FiltersPanel
						filters={localFilters}
						setFilters={setLocalFilters}
						onSearch={handleSearch}
					/>
				</div>
				<div className={s.catalogBox}>
					{isLoading ? (
						<CamperSkeleton count={6} />
					) : (
						<CamperList list={visibleCampers} />
					)}
					<Button
						title='Load more'
						variant='secondary'
						type='button'
						className={s.showMoreBtn}
						handleClick={() => handleLoadMore()}
					/>
				</div>
			</div>
		</div>
	);
};

export default CatalogPage;
