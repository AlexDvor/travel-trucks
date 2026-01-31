import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import { lazy, Suspense } from 'react';

import Header from './components/Header/Header';
import Loader from './ui/Loader/Loader';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const CatalogPage = lazy(() => import('./pages/Catalog/CatalogPage'));
const DetailsPage = lazy(() => import('./pages/Details/DetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));
const Features = lazy(() => import('./components/Features/Features'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/catalog' element={<CatalogPage />} />
						<Route path='/catalog/:carId' element={<DetailsPage />}>
							<Route index element={<Navigate to='features' replace />} />
							<Route path='features' element={<Features />} />
							<Route path='review' element={<Reviews />} />
						</Route>

						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</main>
		</>
	);
}

export default App;
