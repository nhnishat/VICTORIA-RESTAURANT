import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageFood = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/recipe')
			.then((res) => res.json())
			.then((data) => {
				setRecipes(data);
			});
	}, []);

	const handleDeleted = (id) => {
		console.log(id);
		fetch(`http://localhost:3000/recipe/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>UpDate</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{/* map over recipes and render rows */}
					{recipes.map((recipe) => (
						<tr key={recipe.id}>
							<td>{recipe.name}</td>
							<td>{recipe.description}</td>
							<td>
								<button className="btn bg-green-500 btn-xs">
									<Link to={`recipe-update/${recipe.id}`}>Edit</Link>
								</button>
							</td>
							<td>
								<button
									onClick={() => handleDeleted(recipe.id)}
									className="btn bg-red-600 text-white btn-xs"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManageFood;
