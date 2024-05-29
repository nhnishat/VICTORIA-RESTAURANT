import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content my-20 w-full">
				<Outlet />
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}
					<li>
						<Link to="">User Info</Link>
					</li>
					<li>
						<Link to="/dashboard/manage-food">Manage Food</Link>
					</li>
					<li>
						<Link to="/dashboard/add-item">Add A Food</Link>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DashBoardLayout;
