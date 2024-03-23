import TabIcon from './TabIcon';

const BottomBar = () => {
	return (
		<div className="w-full h-max flex justify-around p-4">
			<TabIcon title={'Home'} imgUrl={'home1.png'} alt={'Home Tab Icon'} />
			<TabIcon
				title={'Menu'}
				imgUrl={'menu2.png'}
				alt={'Disable Menu Tab Icon'}
				color="text-gray-400"
			/>
		</div>
	);
};

export default BottomBar;
