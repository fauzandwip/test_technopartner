import Banner from '../components/Banner';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import QRCode from '../components/QRCode';
import { useEffect, useState } from 'react';
import api from '../api';
import { getToken } from '../helpers/token';

const Home = () => {
	const [homeDetail, setHomeDetail] = useState({
		greeting: '',
		name: '-',
		saldo: '-',
		point: '-',
		qrcode: '',
		banner: [],
	});

	useEffect(() => {
		const getProfile = async () => {
			try {
				const { data } = await api.get('/api/home', {
					headers: {
						Authorization: getToken(),
					},
				});
				console.log(data);
				setHomeDetail(data.result);
			} catch (error) {
				console.log(error);
			}
		};
		getProfile();
	}, []);
	const [showQR, setShowQR] = useState(false);
	return (
		<div className="w-full h-screen flex flex-col bg-slate-100">
			{/* header */}
			<div className=" h-20 bg-white">
				<Header />
			</div>

			{/* profile card */}
			<div className="bg-white">
				<ProfileCard onClickQR={() => setShowQR(true)} profile={homeDetail} />
			</div>

			{/* banner */}
			<div className="h-52">
				<Banner />
			</div>

			{/* bottom bar */}
			<div className=" fixed left-0 bottom-0 w-full shadow-top">
				<BottomBar />
			</div>

			{showQR && (
				<div className="fixed w-full h-screen">
					<QRCode
						onClickClose={() => setShowQR(false)}
						qrCodeURL={homeDetail.qrcode}
					/>
				</div>
			)}
		</div>
	);
};

export default Home;
