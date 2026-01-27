import type { FC } from 'react';
import logo from '../../assets/icons/logo.svg';

const Logo: FC = () => {
	return (
		<div style={{ width: 136, height: 15 }}>
			<img src={logo} alt='logo' />
		</div>
	);
};

export default Logo;
