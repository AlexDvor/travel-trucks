import type { FC } from 'react';
import Hero from '../../components/Hero/Hero';

type IHomePage = object;

const HomePage: FC<IHomePage> = () => {
	return (
		<>
			<Hero />
		</>
	);
};

export default HomePage;
