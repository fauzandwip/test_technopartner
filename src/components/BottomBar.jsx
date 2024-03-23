import TabIcon from './TabIcon';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const clickHome = () => navigate('/home');
	const clickMenu = () => navigate('/menu');

	return (
		<div className="w-full h-max flex justify-around p-3">
			{/* Home Menu */}
			{location.pathname === '/' ? (
				<TabIcon
					onClick={clickHome}
					title={'Home'}
					imgUrl={'home1.png'}
					alt={'Home Tab Icon'}
				/>
			) : (
				<TabIcon
					onClick={clickHome}
					title={'Home'}
					imgUrl={'home2.png'}
					alt={'Disable Home Tab Icon'}
					color="text-gray-400"
				/>
			)}

			{/* Tab Menu */}
			{location.pathname === '/menu' ? (
				<TabIcon
					onClick={clickMenu}
					title={'Menu'}
					imgUrl={'menu1.png'}
					alt={'Menu Tab Icon'}
				/>
			) : (
				<TabIcon
					onClick={clickMenu}
					title={'Menu'}
					imgUrl={'menu2.png'}
					alt={'Disable Menu Tab Icon'}
					color="text-gray-400"
				/>
			)}
		</div>
	);
};

export default BottomBar;
