import { createBrowserRouter } from 'react-router-dom';
import AddAItems from '../Components/Dashboard/AddAItems';
import EditFood from '../Components/Dashboard/EditFood';
import ManageFood from '../Components/Dashboard/ManageFood';
import UserInfo from '../Components/Dashboard/UserInfo';
import DashBoardLayout from '../Components/Layout/DashBoardLayout';
import Main from '../Components/Layout/Main';
import About from '../Pages/About';
import AllFood from '../Pages/AllFood';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/all-foods',
				element: <AllFood />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<DashBoardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: 'user-info',
				element: (
					<PrivateRoute>
						<UserInfo />
					</PrivateRoute>
				),
			},
			{
				path: 'manage-food',
				element: (
					<PrivateRoute>
						<ManageFood />
					</PrivateRoute>
				),
			},
			{
				path: 'add-item',
				element: (
					<PrivateRoute>
						<AddAItems />
					</PrivateRoute>
				),
			},
			{
				path: 'recipe-update/:id',
				element: (
					<PrivateRoute>
						element: <EditFood />
					</PrivateRoute>
				),
			},
		],
	},
]);
