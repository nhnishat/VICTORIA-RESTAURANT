import React from 'react';
import useAuth from '../hooks/useAuth';

const UserInfo = () => {
	const { user } = useAuth();

	return (
		<div className="container mx-auto p-4 flex flex-col items-center justify-center">
			<img
				src={user?.photoURL}
				alt={user?.displayName}
				className="rounded h-full w-96 mb-4"
			/>
			<h1 className="text-2xl font-bold text-gray-800 mb-2">
				{user?.displayName}
			</h1>
			<p className="text-lg text-gray-600">{user?.email}</p>
		</div>
	);
};

export default UserInfo;
