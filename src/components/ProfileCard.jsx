const ProfileCard = () => {
	return (
		<div className="w-full h-full flex p-6 bg-[url('motif.png')]">
			<div
				id="card"
				className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6"
			>
				<div className="flex flex-col gap-1">
					<h1>Good Afternoon,</h1>
					<h1 className=" font-bold">Guntur Saputro</h1>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex gap-4">
						<img
							src="home1.png"
							alt="QR Logo"
							className=" rounded-full shadow-md bg-white"
						/>
						<div className="border border-gray-300 border-dotted"></div>
						<div className="flex flex-col justify-around">
							<p>Saldo</p>
							<p>Points</p>
						</div>
					</div>

					<div className="flex flex-col items-end">
						<p className="font-bold">Rp 279.000</p>
						<p className="font-bold text-teal-400">2.500</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
