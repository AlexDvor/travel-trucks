import type { FC } from 'react';
import s from './Loader.module.css';

const Loader: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.spinner} />
			<p className={s.text}>Loading page...</p>
		</div>
	);
};

export default Loader;
