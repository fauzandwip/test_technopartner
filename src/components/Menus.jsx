import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menus = ({ menus }) => {
	return (
		<div className="w-full flex flex-col">
			<h1 className="px-4 py-3">Seasonal Product</h1>
			<div className="flex flex-col bg-white pr-4 pl-1">
				{menus.map((menu, index) => {
					return <MenuItem key={index} menu={menu} />;
				})}
			</div>
		</div>
	);
};

export default Menus;

Menus.propTypes = {
	menus: PropTypes.array,
};
