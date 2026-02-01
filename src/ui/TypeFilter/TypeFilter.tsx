import FilterButton from '../FilterButton/FilterButton';

import type { FC, Dispatch, SetStateAction } from 'react';
import type { FiltersState, VehicleForm } from '../../interfaces/filter';

import s from './TypeFilter.module.css';

type TCarBody = {
	label: VehicleForm;
	icon: string;
};

const typeList: TCarBody[] = [
	{ label: 'Van', icon: 'icon-grid-1x2' },
	{ label: 'Fully Integrated', icon: 'icon-grid-2x2' },
	{ label: 'Alcove', icon: 'icon-grid-3x3' },
];

interface ITypeFilterProps {
	filters: FiltersState;
	setFilters: Dispatch<SetStateAction<FiltersState>>;
}

const TypeFilter: FC<ITypeFilterProps> = ({ filters, setFilters }) => {
	return (
		<div className={s.wrapper}>
			<h4 className={s.title}>Type</h4>
			<div className={s.grid}>
				{typeList.map((type, idx) => (
					<FilterButton
						key={idx}
						active={filters.form === type.label}
						onClick={() =>
							setFilters(prev => ({ ...prev, form: type.label }))
						}
						iconName={type.icon}
					>
						{type.label}
					</FilterButton>
				))}
			</div>
		</div>
	);
};

export default TypeFilter;
