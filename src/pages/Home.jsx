import Banner from '../components/Banner';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import QRCode from '../components/QRCode';
import { useEffect, useState } from 'react';
import api from '../api';
import { getToken } from '../helpers/token';

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showQR, setShowQR] = useState(false);

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
				setIsLoading(true);
				const { data } = await api.get('/api/home', {
					headers: {
						Authorization: getToken(),
					},
				});
				setHomeDetail(data.result);
				setIsLoading(false);
			} catch (error) {
				setError(error);
				setIsLoading(false);
				console.log(error);
			}
		};
		getProfile();
	}, []);

	if (error) {
		return <div>{error.response.data.message}</div>;
	}

	return (
		<div className="w-full h-screen flex flex-col bg-slate-100 overflow-x-hidden">
			{/* header */}
			<div className=" h-20 bg-white">
				<Header />
			</div>
			{/* profile card */}
			{isLoading ? (
				<div className="w-full h-1/3 flex p-6 bg-[url('motif.png')] bg-cover">
					<div
						id="card"
						className="w-full bg-white flex justify-center items-center rounded-2xl shadow-md"
					>
						<span className="loading loading-spinner loading-lg text-accent"></span>
					</div>
				</div>
			) : (
				<div className="bg-white">
					<ProfileCard onClickQR={() => setShowQR(true)} profile={homeDetail} />
				</div>
			)}

			{/* banner */}
			<div className="h-max bg-cyan-500">
				<Banner data={homeDetail.banner} />
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
