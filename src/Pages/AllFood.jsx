import { useEffect, useState } from 'react';
import FoodCart from '../Components/Home/FoodCart';

const AllFood = () => {
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
					<span className="text-yellow-300">Our All</span>
					<br />
					Food Menu
				</h1>
				<p className="text-lg md:text-xl font-semibold">
					Most delicus Food in the world
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{recipes?.map((recipe) => (
					<FoodCart key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default AllFood;
