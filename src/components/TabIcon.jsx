import PropTypes from 'prop-types';

const TabIcon = ({ onClick, title, imgUrl, alt, color = 'text-black' }) => {
	return (
		<button onClick={onClick} className={'flex flex-col items-center ' + color}>
			<img src={imgUrl} alt={alt} className=" h-8" />
			<h1 className=" font-medium text-sm">{title}</h1>
		</button>
	);
};

export default TabIcon;

TabIcon.propTypes = {
	onClick: PropTypes.func,
	title: PropTypes.string,
	imgUrl: PropTypes.string,
	alt: PropTypes.string,
	color: PropTypes.string,
};
