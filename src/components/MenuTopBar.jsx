import PropTypes from 'prop-types';

const MenuTopBar = ({ categories }) => {
	return (
		<div className="flex w-max bg-white">
			{categories.map((category, index) => {
				return (
					<h1 key={index} className="px-4 py-3">
						{category}
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
