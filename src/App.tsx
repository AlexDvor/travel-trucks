import Header from './components/Header/Header';

import './App.css';
import CataloPage from './pages/Catalog/CatalogPage';
import HomePage from './pages/Home/HomePage';

function App() {
	return (
		<>
			<Header />
			<main>
				<HomePage />
				<CataloPage />
			</main>
		</>
	);
}

export default App;
