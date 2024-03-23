import PropTypes from 'prop-types';

const TabIcon = ({ title, imgUrl, alt, color = 'text-black' }) => {
	return (
		<div className={'flex flex-col items-center ' + color}>
			<img src={imgUrl} alt={alt} className=" h-8" />
			<h1 className=" font-medium text-sm">{title}</h1>
		</div>
	);
};

export default TabIcon;

TabIcon.propTypes = {
	title: PropTypes.string,
	imgUrl: PropTypes.string,
	alt: PropTypes.string,
	color: PropTypes.string,
};
