import { useSelector } from 'react-redux';
import type { FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import { useAppDispatch } from '../../hooks/redux';
import { toggleFavorite, selectFavoriteIds } from '../../store/favoriteSlice';

import Icon from '../Icon/Icon';

import clsx from 'clsx';
import s from './FavoriteBtn.module.css';
interface FavoriteBtnProps {
	item: ICamper;
}

const FavoriteBtn: FC<FavoriteBtnProps> = ({ item }) => {
	const dispatch = useAppDispatch();

	const favoriteIds = useSelector(selectFavoriteIds);

	const isFavorite = favoriteIds.includes(item.id);

	return (
		<button
			className={s.btn}
			type='button'
			onClick={() => dispatch(toggleFavorite(item))}
		>
			<Icon
				name='icon-heart'
				size={25}
				className={clsx(isFavorite && s.isFavorite)}
			/>
		</button>
	);
};

export default FavoriteBtn;
