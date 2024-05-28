import React from 'react';
import Banner from '../Components/Home/Banner';
import ChefInfo from '../Components/Home/ChefInfo';
import FoodItem from '../Components/Home/FoodItem';

const Home = () => {
	return (
		<div>
			<Banner />
			<FoodItem />
			<ChefInfo />
		</div>
	);
};

export default Home;
