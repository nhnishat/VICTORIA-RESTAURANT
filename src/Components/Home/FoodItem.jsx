import React, { useEffect, useState } from 'react';
import FoodCart from './FoodCart';

const FoodItem = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/recipe')
			.then((res) => res.json())
			.then((data) => {
				setRecipes(data);
			});
	}, []);

	return (
		<div className="container mx-auto p-4">
			<div className="text-center my-10 p-5">
				<h1 className="font-bold text-3xl md:text-4xl uppercase">
					Our <span className="text-yellow-300">Food</span>
				</h1>
				<p className="text-lg md:text-xl font-semibold">
					Most Ordered Food Items
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{recipes
					?.slice(0, 3)
					.reverse()
					.map((recipe) => (
						<FoodCart key={recipe.id} recipe={recipe} />
					))}
			</div>
		</div>
	);
};

export default FoodItem;
