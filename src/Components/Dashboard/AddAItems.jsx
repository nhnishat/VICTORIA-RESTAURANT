import React from 'react';
import { useForm } from 'react-hook-form';

const AddAItems = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
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
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded"
		>
			<div className="mb-4">
				<label htmlFor="id" className="block text-gray-700">
					ID
				</label>
				<input
					type="text"
					id="id"
					{...register('id', { required: true })}
					className="form-input mt-1 block w-full"
				/>
				{/* {errors.id && <span>This field is required</span>} */}
			</div>
			<div className="mb-4">
				<label htmlFor="name" className="block text-gray-700">
					Name
				</label>
				<input
					type="text"
					id="name"
					{...register('name', { required: true })}
					className="form-input mt-1 block w-full"
				/>
				{/* {errors.name && <span>This field is required</span>} */}
			</div>
			<div className="mb-4">
				<label htmlFor="price" className="block text-gray-700">
					Price
				</label>
				<input
					type="number"
					id="price"
					{...register('price', { required: true })}
					className="form-input mt-1 block w-full"
				/>
				{/* {errors.price && <span>This field is required</span>} */}
			</div>
			<div className="mb-4">
				<label htmlFor="description" className="block text-gray-700">
					Description
				</label>
				<textarea
					id="description"
					{...register('description', { required: true })}
					className="form-textarea mt-1 block w-full"
				></textarea>
				{/* {errors.description && <span>This field is required</span>} */}
			</div>
			<div className="mb-4">
				<label htmlFor="imgUrl" className="block text-gray-700">
					Image URL
				</label>
				<input
					type="text"
					id="imgUrl"
					{...register('imgUrl', { required: true })}
					className="form-input mt-1 block w-full"
				/>
				{/* {errors.imgUrl && <span>This field is required</span>} */}
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				Add Food
			</button>
		</form>
	);
};

export default AddAItems;
