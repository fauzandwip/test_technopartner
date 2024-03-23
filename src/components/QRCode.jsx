import IconCloseSharp from './Icons/IconCloseSharp';

const QRCode = () => {
	return (
		<div className="w-full h-screen flex flex-col gap-10">
			<div className="w-full flex justify-end p-4 mb-6">
				<IconCloseSharp heigh="3em" width="3em" />
			</div>
			<div className="flex flex-col items-center px-4 gap-10">
				<h1>Show the QR Code below to the cashier.</h1>
				<img src="home1.png" alt="QR Code" className=" w-52" />
			</div>
		</div>
	);
};

export default QRCode;
