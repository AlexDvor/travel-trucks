import type { FC, Dispatch, SetStateAction } from 'react';
import type { Equipment, FiltersState } from '../../interfaces/filter';

import FilterButton from '../FilterButton/FilterButton';

import s from './EquipmentFilter.module.css';

type TEquipmentList = {
	label: Equipment;
	icon: string;
};

const equipmentList: TEquipmentList[] = [
	{ label: 'AC', icon: 'icon-wind' },
	{ label: 'Automatic', icon: 'icon-diagram' },
	{ label: 'Kitchen', icon: 'icon-fridge' },
	{ label: 'TV', icon: 'icon-tv' },
	{ label: 'Bathroom', icon: 'icon-shower' },
];

interface IEquipmentFilterProps {
	filters: FiltersState;
	setFilters: Dispatch<SetStateAction<FiltersState>>;
}

const EquipmentFilter: FC<IEquipmentFilterProps> = ({ filters, setFilters }) => {
	const handleToggleClick = (item: Equipment) => {
		setFilters(prev => ({
			...prev,
			equipment: prev.equipment.includes(item)
				? prev.equipment.filter(i => i !== item)
				: [...prev.equipment, item],
		}));
	};

	return (
		<div className={s.wrapper}>
			<h4 className={s.title}>Vehicle equipment</h4>
			<div className={s.grid}>
				{equipmentList.map((item, idx) => (
					<FilterButton
						key={idx}
						iconName={item.icon}
						active={filters.equipment.includes(item.label)}
						onClick={() => handleToggleClick(item.label)}
					>
						{item.label}
					</FilterButton>
				))}
			</div>
		</div>
	);
};

export default EquipmentFilter;
