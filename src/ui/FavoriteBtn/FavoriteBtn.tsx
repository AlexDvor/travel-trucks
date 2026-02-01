import { useState, type FC } from 'react';
import type { ICamper } from '../../interfaces/camper';
import { useAppDispatch } from '../../hooks/redux';
import {
	addFavoriteItem,
	deleteFavoriteItem,
	selectFavoriteCampers,
} from '../../store/favoriteSlice';
import Icon from '../Icon/Icon';

import s from './FavoriteBtn.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
interface FavoriteBtnProps {
	item: ICamper;
}

const FavoriteBtn: FC<FavoriteBtnProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const [isFavorite, setIsFavorite] = useState(false);
	const favoriteList = useSelector(selectFavoriteCampers);

	const handleClick = () => {
		const hasSameItem = favoriteList.some(car => car.id === item.id);

		try {
			if (hasSameItem) {
				setIsFavorite(false);
				dispatch(deleteFavoriteItem(item.id));
				return;
			}
			dispatch(addFavoriteItem(item));
			setIsFavorite(true);
		} catch (error) {
			setIsFavorite(false);
			console.log('🚀 ~ error:', error);
		}
	};

	return (
		<button className={s.btn} type='button' onClick={handleClick}>
			<Icon
				name='icon-heart'
				size={25}
				className={clsx(isFavorite && s.isFavorite)}
			/>
		</button>
	);
};

export default FavoriteBtn;
