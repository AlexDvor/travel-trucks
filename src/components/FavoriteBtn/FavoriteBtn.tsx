import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/redux';
import type { ICamper } from '../../interfaces/camper';
import { selectFavoriteIds, toggleFavorite } from '../../store/favoriteSlice';

import Icon from '../../ui/Icon/Icon';

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
				className={clsx(s.icon, isFavorite && s.isFavorite)}
			/>
		</button>
	);
};

export default FavoriteBtn;
