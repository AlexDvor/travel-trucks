import type { FC, Dispatch, SetStateAction } from 'react';
import type { FiltersState } from '../../interfaces/filter';

import Button from '../../ui/Button/Button';
import LocationFilter from '../../ui/LocationFilter/LocationFilter';
import EquipmentFilter from '../../ui/EquipmentFilter/EquipmentFilter';
import TypeFilter from '../../ui/TypeFilter/TypeFilter';

import s from './FiltersPanel.module.css';

interface IFiltersPanelProps {
	filters: FiltersState;
	setFilters: Dispatch<SetStateAction<FiltersState>>;
	onSearch: () => void;
}

const FiltersPanel: FC<IFiltersPanelProps> = ({ filters, setFilters, onSearch }) => {
	return (
		<aside className={s.panel}>
			<LocationFilter filters={filters} setFilters={setFilters} />
			<EquipmentFilter filters={filters} setFilters={setFilters} />
			<TypeFilter filters={filters} setFilters={setFilters} />
			<Button handleClick={onSearch} title='Search' variant='primary' />
		</aside>
	);
};

export default FiltersPanel;
