import React from 'react';
import { useForm } from 'react-hook-form';

const AddAItems = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		data.price = parseFloat(data.price);
		console.log(data);
		fetch('http://localhost:3000/recipe', {
			method: 'POST',
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
			<h1 className="text-5xl font-bold text-center">Add a Product</h1>
			<div className="my-20">
				<form onSubmit={handleSubmit(onSubmit)} className="px-8">
					<div className="mb-4">
						<label htmlFor="id" className="block text-gray-700">
							ID*
						</label>
						<input
							type="text"
							id="id"
							{...register('id', { required: true })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700">
							Name*
						</label>
						<input
							type="text"
							id="name"
							{...register('name', { required: true })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="price" className="block text-gray-700">
							Price*
						</label>
						<input
							type="number"
							id="price"
							{...register('price', { required: true })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="description" className="block text-gray-700">
							Description*
						</label>
						<textarea
							id="description"
							{...register('description', { required: true })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						></textarea>
					</div>
					<div className="mb-4">
						<label htmlFor="imgUrl" className="block text-gray-700">
							Image URL*
						</label>
						<input
							type="text"
							id="imgUrl"
							{...register('imgUrl', { required: true })}
							className="bg-gray-100 p-4 w-full border border-black rounded-lg"
						/>
					</div>
					<div className="mt-2 flex justify-center items-center">
						<input
							className="btn mt-4 w-full bg-red-500 text-white p-4"
							type="submit"
							value="Add product"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAItems;
