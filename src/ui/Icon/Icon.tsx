// import sprite from '../../assets/icons.svg';

// const iconNames = [
// 	'icon-Vector',
// 	'icon-Rating',
// 	'icon-Property-1Default',
// 	'icon-bi_grid',
// 	'icon-bi_grid-1x2',
// 	'icon-bi_grid-3x3-gap',
// 	'icon-ph_shower',
// 	'icon-hugeicons_gas-stove',
// 	'icon-ion_water-outline',
// 	'icon-lucide_microwave',
// 	'icon-solar_fridge-outline',
// 	'icon-tv',
// 	'icon-radio',
// 	'icon-vector-small',
// 	'icon-wind',
// ] as const;

// export type IconName = (typeof iconNames)[number];

import React from 'react';

type IconProps = {
	name: string;
	size?: number;
	className?: string;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '', ...props }) => {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			aria-hidden='true'
			{...props}
		>
			<use href={`/icons.svg#${name}`} />
		</svg>
	);
};

export default Icon;
