import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import { getToken } from '../helpers/token';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		loader: () => (getToken() ? null : redirect('/login')),
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/home',
				loader: () => redirect('/'),
			},
			{
				path: '/menu',
				element: <Menu />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
