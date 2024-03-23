import PropTypes from 'prop-types';

const MenuTopBar = ({
	categories,
	selectedCategory,
	setSelectedCategory,
	dataMenus,
	setDataMenus,
}) => {
	const handleOnClickCategory = (categoryName) => {
		setSelectedCategory(categoryName);
		const category = [...dataMenus].find(
			(el) => el.category_name === categoryName
		);
		const newArr = [...dataMenus].filter(
			(el) => el.category_name !== categoryName
		);

		newArr.unshift(category);
		setDataMenus(newArr);
	};

	return (
		<div className="flex min-w-max bg-white">
			{categories.map((categoryName, index) => {
				return (
					<div
						onClick={() => handleOnClickCategory(categoryName)}
						key={index}
						className={
							selectedCategory === categoryName
								? 'px-4 py-3 font-medium text-black border-b-4 border-black'
								: 'px-4 py-3 font-medium text-gray-400 '
						}
					>
						{categoryName}
					</div>
				);
			})}
		</div>
	);
};

export default MenuTopBar;
MenuTopBar.propTypes = {
	categories: PropTypes.array,
	selectedCategory: PropTypes.string,
	setSelectedCategory: PropTypes.func,
	dataMenus: PropTypes.array,
	setDataMenus: PropTypes.func,
};
