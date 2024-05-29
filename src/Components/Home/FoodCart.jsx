import React from 'react';
import { Link } from 'react-router-dom';

const FoodCart = ({ recipe }) => {
	const { id, name, price, imgUrl, description } = recipe;
	return (
		<div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
			<figure className="relative">
				<img className="w-full h-56 object-cover" src={imgUrl} alt={name} />
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
					<button className="btn btn-primary px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
						<Link to={`food-details/${id}`}>Show Details</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCart;
