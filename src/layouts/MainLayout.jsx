import { Outlet } from 'react-router-dom';
import BottomBar from '../components/BottomBar';

const MainLayout = () => {
	return (
		<div className="w-full min-h-screen">
			<Outlet />
			<div className="bg-white fixed left-0 bottom-0 w-full shadow-top">
				<BottomBar />
			</div>
		</div>
	);
};

export default MainLayout;
