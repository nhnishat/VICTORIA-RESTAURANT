import { useEffect, useState } from 'react';
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
		<div>
			<h1 className="text-5xl font-bold text-center">Add a Product</h1>
			<div className="overflow-x-auto my-20 px-16">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Price</th>
							<th>Discription</th>
							<th>UpDate</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{recipes.map((recipe, index) => (
							<tr key={recipe.id}>
								<td>{index + 1}</td>
								<td>{recipe.name}</td>
								<td>{recipe.price}</td>
								<td>{recipe.description}</td>
								<td>
									<button className="btn bg-green-500 text-white btn-xs">
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
		</div>
	);
};

export default ManageFood;
