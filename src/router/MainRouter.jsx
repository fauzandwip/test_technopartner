import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Menu from '../pages/Menu';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '',
				element: <Home />,
				// loader: () => redirect('/login'),
			},
			{
				path: '/menu',
				element: <Menu />,
				// loader: () => redirect('/login'),
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
