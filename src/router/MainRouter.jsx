import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import { getToken } from '../helpers/token';

const router = createBrowserRouter([
	{
		path: '/',
		loader: () => (getToken() ? null : redirect('/login')),
		children: [
			{
				path: '',
				element: <Home />,
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
