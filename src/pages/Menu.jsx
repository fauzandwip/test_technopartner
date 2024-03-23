import { useEffect, useState } from 'react';
import MenuTopBar from '../components/MenuTopBar';
import Menus from '../components/Menus';
import api from '../api';
import { getToken } from '../helpers/token';

const Menu = () => {
	const [dataMenus, setDataMenus] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

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
				// console.log(data);
				setDataMenus(data.result.categories);
				const categoryNames = [...data.result.categories].map(
					(el) => el.category_name
				);
				setSelectedCategory(data.result.categories[0].category_name);
				setCategories(categoryNames);
			} catch (error) {
				console.log(error);
			}
		};
		getMenus();
	}, []);

	return (
		<div className="flex flex-col w-full min-h-screen bg-slate-100  pb-32">
			{/* menu title */}
			<div className="w-full text-center py-4 bg-white">
				<h1 className=" text-lg font-bold">MENU</h1>
			</div>

			{/* top bar */}
			<div className="overflow-x-scroll">
				<MenuTopBar
					categories={categories}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					dataMenus={dataMenus}
					setDataMenus={setDataMenus}
				/>
			</div>

			{/* products per categories */}
			<div>
				{dataMenus.map((data, index) => {
					return <Menus key={index} data={data} />;
				})}
			</div>
		</div>
	);
};

export default Menu;
