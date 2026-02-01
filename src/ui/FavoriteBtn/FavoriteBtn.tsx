import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';

import Icon from '../Icon/Icon';

import s from './FavoriteBtn.module.css';
interface FavoriteBtnProps {
	item: ICamper;
}

const FavoriteBtn: FC<FavoriteBtnProps> = ({ item }) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

	return (
		<button className={s.btn} type='button' onClick={handleClick}>
			<Icon name='icon-heart' size={25} />
		</button>
	);
};

export default FavoriteBtn;
