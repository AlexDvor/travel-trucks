import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { FiltersState } from '../../interfaces/filter';

import CamperList from '../../components/CamperList/CamperList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import CamperSkeleton from '../../ui/CamperSkeleton/CamperSkeleton';
import Button from '../../ui/Button/Button';

import { useAppDispatch } from '../../hooks/redux';
import { fetchCampers } from '../../store/campersOps';
import { useSelector } from 'react-redux';
import { resetFilters, selectStateFilter, setFilters } from '../../store/filterSlice';

import { useCampersState } from '../../hooks/useCampersState';

import s from './CatalogPage.module.css';

const CatalogPage: FC = () => {
	const dispatch = useAppDispatch();

	const { campers, isLoading, error } = useCampersState();

	const appliedFilters = useSelector(selectStateFilter);

	const [localFilters, setLocalFilters] = useState<FiltersState>(appliedFilters);

	const [visibleCount, setVisibleCount] = useState(4);

	const visibleCampers = campers.slice(0, visibleCount);

	const canLoadMore = visibleCount < campers.length;

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
		setVisibleCount(4);
	};
	console.log(error);
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
					{isLoading && campers.length === 0 && <CamperSkeleton count={6} />}

					{!isLoading && error && <ErrorMessage />}

					{!isLoading && !error && campers.length === 0 && (
						<ErrorMessage message='No campers found for selected filters.' />
					)}

					{!isLoading && !error && campers.length > 0 && (
						<>
							<CamperList list={visibleCampers} />

							{canLoadMore && (
								<Button
									title='Load more'
									variant='secondary'
									type='button'
									className={s.showMoreBtn}
									handleClick={handleLoadMore}
								/>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CatalogPage;
