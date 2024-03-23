import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menus = ({ data }) => {
	return (
		<div className="w-full flex flex-col">
			<h1 className="px-4 py-3 font-medium">{data.category_name}</h1>
			<div className="flex flex-col bg-white pr-4 pl-1">
				{data.menu.map((menu, index) => {
					return <MenuItem key={index} menu={menu} />;
				})}
			</div>
		</div>
	);
};

export default Menus;

Menus.propTypes = {
	data: PropTypes.object,
};
