import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateFood = () => {
	const [recipes, setRecipes] = useState([]);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const { id } = useParams();

	useEffect(() => {
		fetch('http://localhost:3000/recipe')
			.then((res) => res.json())
			.then((data) => {
				setRecipes(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	useEffect(() => {
		if (recipes.length > 0) {
			const recipe = recipes.find((recipe) => recipe.id === id);
			if (recipe) {
				setValue('name', recipe.name);
				setValue('price', recipe.price);
				setValue('description', recipe.description);
				setValue('imgUrl', recipe.imgUrl);
			}
		}
	}, [recipes, id, setValue]);

	const onSubmit = (data) => {
		data.price = parseFloat(data.price);
		console.log('Form Data:', data);
		fetch(`http://localhost:3000/recipe/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<div>
			<h1 className="text-5xl font-bold text-center">Update a Product</h1>
			<div className="my-20">
				<form onSubmit={handleSubmit(onSubmit)} className="px-8">
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700">
							Name
						</label>
						<input
							type="text"
							id="name"
							{...register('name', { required: 'Name is required' })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						/>
						{errors.name && (
							<p className="text-red-500">{errors.name.message}</p>
						)}
					</div>
					<div className="mb-4">
						<label htmlFor="price" className="block text-gray-700">
							Price
						</label>
						<input
							type="number"
							id="price"
							{...register('price', { required: 'Price is required' })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						/>
						{errors.price && (
							<p className="text-red-500">{errors.price.message}</p>
						)}
					</div>
					<div className="mb-4">
						<label htmlFor="imgUrl" className="block text-gray-700">
							Image URL
						</label>
						<input
							type="text"
							id="imgUrl"
							{...register('imgUrl', { required: 'Image URL is required' })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						/>
						{errors.imgUrl && (
							<p className="text-red-500">{errors.imgUrl.message}</p>
						)}
					</div>
					<div className="mb-4">
						<label htmlFor="description" className="block text-gray-700">
							Description
						</label>
						<textarea
							id="description"
							{...register('description', {
								required: 'Description is required',
							})}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						></textarea>
						{errors.description && (
							<p className="text-red-500">{errors.description.message}</p>
						)}
					</div>
					<div className="mt-2 flex justify-center items-center">
						<input
							className="btn mt-4 w-full bg-red-500 text-white p-4"
							type="submit"
							value="Update product"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateFood;
