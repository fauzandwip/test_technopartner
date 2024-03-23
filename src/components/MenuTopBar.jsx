import PropTypes from 'prop-types';

const MenuTopBar = ({ categories }) => {
	return (
		<div className="flex w-max bg-white">
			{categories.map((data, index) => {
				return (
					<h1 key={index} className="px-4 py-3">
						{data.category_name}
					</h1>
				);
			})}
		</div>
	);
};

export default MenuTopBar;
MenuTopBar.propTypes = {
	categories: PropTypes.array,
};
