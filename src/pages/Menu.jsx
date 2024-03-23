import MenuTopBar from '../components/MenuTopBar';
import Menus from '../components/Menus';

const Menu = () => {
	const categories = [
		'Seasonal Product',
		'Best Seller',
		'Coffe',
		'Cold Brew',
		'Chocolate',
	];

	const menus = [
		{
			name: 'Latte Freddo',
			description:
				'A rich Espresso with perfectly steamed milk, topped with delicate foamed milk, served in brown sugar on top of the coffee.',
			photo: 'https://soal.staging.id/img/Latte Freddo.png',
			price: 39000,
		},
		{
			name: 'Caramel Macchiato',
			description:
				'A delightful signature of Maxx Coffee. A creamy blend of vanilla and intense Espresso, topped with smooth velvety foam and caramel sauce.',
			photo: 'https://soal.staging.id/img/Caramel Macchiato.png',
			price: 50000,
		},
		{
			name: 'Green Tea Latte',
			description:
				'A perfect combination between Maxx Coffees special green tea and fresh milk.',
			photo: 'https://soal.staging.id/img/Green Tea Latte.png',
			price: 47000,
		},
	];

	return (
		<div className="flex flex-col w-full min-h-screen bg-slate-100">
			{/* menu title */}
			<div className="w-full text-center py-4 bg-white">
				<h1 className=" text-lg font-bold">MENU</h1>
			</div>

			{/* top bar */}
			<MenuTopBar categories={categories} />

			{/* products per categories */}
			<Menus menus={menus} />
			<Menus menus={menus} />
		</div>
	);
};

export default Menu;
