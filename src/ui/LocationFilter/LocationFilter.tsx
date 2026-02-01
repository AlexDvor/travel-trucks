import type { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
import type { FiltersState } from '../../interfaces/filter';

import Icon from '../Icon/Icon';

import s from './LocationFilter.module.css';

interface ILocationFilterProps {
	filters: FiltersState;
	setFilters: Dispatch<SetStateAction<FiltersState>>;
}

const LocationFilter: FC<ILocationFilterProps> = ({ filters, setFilters }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilters(prev => ({ ...prev, location: e.target.value }));
	};

	return (
		<div className={s.wrapper}>
			<label className={s.label}>Location</label>
			<div className={s.inputWrapper}>
				<Icon name='icon-map' size={20} className={s.icon} />
				<input
					type='text'
					value={filters.location}
					onChange={handleChange}
					placeholder='City'
					className={s.input}
				/>
			</div>
		</div>
	);
};

export default LocationFilter;
