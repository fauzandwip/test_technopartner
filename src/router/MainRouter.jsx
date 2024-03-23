import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from '../pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '',
				loader: () => redirect('/login'),
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
