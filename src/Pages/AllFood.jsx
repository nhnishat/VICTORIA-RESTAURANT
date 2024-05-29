import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
					Most delicious Food in the world
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{recipes.map(({ id, name, imgUrl, price, description }) => (
					<div
						key={id}
						className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden"
					>
						<figure className="relative">
							<img
								className="w-full h-56 object-cover"
								src={imgUrl}
								alt={name}
							/>
							<figcaption className="absolute bottom-0 bg-gray-900 bg-opacity-50 text-white p-2 w-full text-center">
								{name}
							</figcaption>
						</figure>
						<div className="p-4">
							<h2 className="text-2xl font-bold mb-2">{name}</h2>
							<p className="text-lg font-semibold text-gray-800 mb-2">
								Price: ${price.toFixed(2)}
							</p>
							<p className="text-gray-600 mb-4">{description}</p>
							<div className="flex justify-end">
								<Link
									to={`single-card/${id}`}
									className="btn btn-primary px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
								>
									Show Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllFood;
