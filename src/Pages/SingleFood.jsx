import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleFood = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3000/recipe/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setRecipe(data);
			});
	}, [id]);

	const { name, imgUrl, price, description } = recipe;

	return (
		<>
			<div className="my-16">
				<h1 className="text-3xl font-bold underline text-center">{name}</h1>
			</div>
			<div className="my-20 px-4 sm:px-6 lg:px-8 flex justify-center">
				<div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex justify-between gap-7 mt-5 px-10">
					<figure className="w-full lg:w-1/2">
						<img
							src={imgUrl}
							alt={name}
							className="w-full h-64 lg:h-full object-cover"
						/>
					</figure>
					<div className="p-6 lg:w-1/2 flex flex-col justify-center">
						<h2 className="text-3xl font-semibold mb-4">{name}</h2>
						<p className="text-2xl text-gray-700 mb-4">${price}</p>
						<p className="text-gray-600 mb-6">{description}</p>
						<button className="self-start bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
							Order Now
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleFood;
