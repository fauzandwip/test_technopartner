import { useEffect, useState } from 'react';
import MenuTopBar from '../components/MenuTopBar';
import Menus from '../components/Menus';
import api from '../api';
import { getToken } from '../helpers/token';

const Menu = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getMenus = async () => {
			try {
				const { data } = await api.post(
					'/api/menu',
					{
						show_all: 1,
					},
					{
						headers: {
							Authorization: getToken(),
						},
					}
				);
				console.log(data);
				setCategories(data.result.categories);
			} catch (error) {
				console.log(error);
			}
		};
		getMenus();
	}, []);

	return (
		<div className="flex flex-col w-full min-h-screen bg-slate-100">
			{/* menu title */}
			<div className="w-full text-center py-4 bg-white">
				<h1 className=" text-lg font-bold">MENU</h1>
			</div>

			{/* top bar */}
			<MenuTopBar categories={categories} />

			{/* products per categories */}
			<div>
				{categories.map((data, index) => {
					return <Menus key={index} data={data} />;
				})}
			</div>
		</div>
	);
};

export default Menu;
