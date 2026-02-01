import { useSelector } from 'react-redux';
import { selectCampers, selectError, selectLoading } from '../store/campersSlice';
import type { RootState } from '../store/store';

export const useCampersState = () => {
	const campers = useSelector((state: RootState) => selectCampers(state));
	const isLoading = useSelector((state: RootState) => selectLoading(state));
	const error = useSelector((state: RootState) => selectError(state));

	return {
		campers,
		isLoading,
		error,
	};
};
