import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
	const { user, LogOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleLogout = () => {
		LogOut();
	};
	const navLink = (
		<>
			<li>
				<Link to="/" className="hover:text-gray-700">
					Home
				</Link>
			</li>
			<li>
				<Link to="/all-foods" className="hover:text-gray-700">
					Foods
				</Link>
			</li>
			<li>
				<Link to="/dashboard" className="hover:text-gray-700">
					Dashboard
				</Link>
			</li>
			<li>
				<Link to="/about" className="hover:text-gray-700">
					About
				</Link>
			</li>
			{user ? (
				<div className="flex items-center gap-4">
					<div className="avatar placeholder">
						<div className="bg-neutral text-neutral-content rounded-full w-12">
							<img src={user?.photoURL} alt="" />
						</div>
					</div>
					<button
						onClick={handleLogout}
						className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded"
					>
						Logout
					</button>
				</div>
			) : (
				<li className="flex items-center">
					<Link to="/login" className="hover:text-gray-700">
						Login
					</Link>
					<span className="mx-2">/</span>
					<Link to="/register" className="hover:text-gray-700">
						Register
					</Link>
				</li>
			)}
		</>
	);
	return (
		<nav className="px-4 py-3 bg-white shadow-md">
			<div className=" flex justify-between items-center">
				<div>
					<Link to="/" className="text-xl font-bold text-blue-600 uppercase">
						<span className="text-yellow-400">victoria</span>
						<br />
						restaurant
					</Link>
				</div>
				<div className="hidden md:block">
					<ul className="flex items-center gap-6 text-lg text-black font-semibold">
						{navLink}
					</ul>
				</div>
				<div className="md:hidden">
					<button onClick={handleToggle}>
						{isOpen ? (
							<FaTimes size={24} className="text-black" />
						) : (
							<FaBars size={24} className="text-black" />
						)}
					</button>
				</div>
			</div>
			<div className={`${isOpen ? 'block' : 'hidden'} my-6 md:hidden`}>
				<ul className="flex flex-col  gap-4 text-lg text-black font-semibold">
					{navLink}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
