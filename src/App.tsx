import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Navigate } from 'react-router';

import CataloPage from './pages/Catalog/CatalogPage';
import DetailsPage from './pages/Details/DetailsPage';
import HomePage from './pages/Home/HomePage';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/catalog' element={<CataloPage />} />

					<Route path='/catalog/:carId' element={<DetailsPage />}>
						<Route index element={<Navigate to='features' replace />} />
						<Route path='features' element={<Features />} />
						<Route path='review' element={<Reviews />} />
					</Route>

					{/* <Route path='*' element={<NotFoundPage />} /> */}
				</Routes>
			</main>
		</>
	);
}

export default App;

{
	/* <Routes>
	<Route path='/' element={<HomePage />} />
	<Route path='/movies' element={<MoviesPage />} />
	<Route path='/movies/:movieId' element={<MovieDetailsPage />}>
		<Route path='cast' element={<MovieCast />} />
		<Route path='review' element={<MovieReviews />} />
	</Route>
	<Route path='*' element={<NotFoundPage />} />
</Routes>; */
}
