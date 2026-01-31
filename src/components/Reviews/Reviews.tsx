import ReviewList from '../../ui/Review/ReviewList/ReviewList';
import { useLocation } from 'react-router';

const Reviews = () => {
	const location = useLocation();
	const reviewList = location.state;

	return (
		<>
			<ReviewList reviews={reviewList} />
		</>
	);
};

export default Reviews;
