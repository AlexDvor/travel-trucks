import type { ICamper } from '../../interfaces/camper';
import ReviewList from '../../ui/Review/ReviewList/ReviewList';
import { useOutletContext } from 'react-router';

const Reviews = () => {
	const { car } = useOutletContext<{ car: ICamper }>();

	return <>{<ReviewList reviews={car.reviews} />}</>;
};

export default Reviews;
