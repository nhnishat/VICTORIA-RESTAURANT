import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleSingin from '../Components/GoogleSingin/GoogleSingin';
import useAuth from '../Components/hooks/useAuth';

const Register = () => {
	const { createUsers, updateUserProfile } = useAuth();
	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// Handle form submission
		createUsers(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				reset();
				console.log(loggedUser);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'user login in successfully',
					showConfirmButton: false,
					timer: 1500,
				});
				// navigate(from, { replace: true });
				updateUserProfile(data.name, data.imageUrl);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
			<div className="text-center md:text-left md:w-1/2 p-8">
				<h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-4">
					Login Now!
				</h1>
				<p className="text-xl md:text-2xl font-semibold text-gray-700">
					Please provide the right email and password
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto md:mx-0 md:w-1/2"
			>
				<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

				<div className="mb-6">
					<label htmlFor="name" className="block text-gray-700 mb-2">
						Name
					</label>
					<input
						type="text"
						id="name"
						{...register('name', { required: 'Name is required' })}
						className="w-full p-3 border border-gray-300 rounded"
					/>
					{errors.name && (
						<p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
					)}
				</div>

				<div className="mb-6">
					<label htmlFor="imageUrl" className="block text-gray-700 mb-2">
						Image URL
					</label>
					<input
						type="url"
						id="imageUrl"
						{...register('imageUrl', { required: 'Image URL is required' })}
						className="w-full p-3 border border-gray-300 rounded"
					/>
					{errors.imageUrl && (
						<p className="text-red-600 text-sm mt-1">
							{errors.imageUrl.message}
						</p>
					)}
				</div>

				<div className="mb-6">
					<label htmlFor="email" className="block text-gray-700 mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						{...register('email', { required: 'Email is required' })}
						className="w-full p-3 border border-gray-300 rounded"
					/>
					{errors.email && (
						<p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
					)}
				</div>

				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-700 mb-2">
						Password
					</label>
					<input
						type="password"
						id="password"
						{...register('password', { required: 'Password is required' })}
						className="w-full p-3 border border-gray-300 rounded"
					/>
					{errors.password && (
						<p className="text-red-600 text-sm mt-1">
							{errors.password.message}
						</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
				>
					Submit
				</button>
				<GoogleSingin />
				<p className="mx-auto p-3">
					<small>
						Already have an account?{' '}
						<Link to="/login" className="text-orange-600 underline">
							Login Now
						</Link>
					</small>
				</p>
			</form>
		</div>
	);
};

export default Register;
