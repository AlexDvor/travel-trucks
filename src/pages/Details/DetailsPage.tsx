import type { FC } from 'react';
import { useParams } from 'react-router';

type IDetailsPage = object;

const DetailsPage: FC<IDetailsPage> = () => {
	const { carId } = useParams();
	console.log('🚀 ~ carId:', carId);
	return (
		<>
			<p>fffff</p>
		</>
	);
};

export default DetailsPage;
