import PropTypes from 'prop-types';

const MenuItem = ({ menu }) => {
	return (
		<div className="w-full flex py-2 gap-2">
			<img src={menu.photo} alt={menu.name} className="h-20 p-1" />
			<div>
				<h1 className="font-medium">{menu.name}</h1>
				<p className=" text-[10px] text-gray-400">{menu.description}</p>
			</div>
			<h1 className="font-medium text-sm">{menu.price}</h1>
		</div>
	);
};

export default MenuItem;

MenuItem.propTypes = {
	menu: PropTypes.object,
};
