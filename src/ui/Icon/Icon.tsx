import React from 'react';

type IconProps = {
	name: string;
	size?: number;
	className?: string;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({ name, size = 20, className = '', ...props }) => {
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
