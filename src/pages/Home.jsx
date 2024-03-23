import Banner from '../components/Banner';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';

const Home = () => {
	return (
		<div className="w-full h-screen flex flex-col bg-slate-100">
			{/* header */}
			<div className=" h-20 bg-white">
				<Header />
			</div>

			{/* profile card */}
			<div className="bg-white">
				<ProfileCard />
			</div>

			{/* banner */}
			<div className="h-52">
				<Banner />
			</div>

			{/* bottom bar */}
			<div className=" fixed left-0 bottom-0 w-full shadow-top">
				<BottomBar />
			</div>
		</div>
	);
};

export default Home;
