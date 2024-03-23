import IconCloseSharp from './Icons/IconCloseSharp';
import PropTypes from 'prop-types';

const QRCode = ({ onClickClose, qrCodeURL }) => {
	return (
		<div className="w-full h-screen flex flex-col gap-10 bg-white">
			<button
				onClick={onClickClose}
				className="w-full flex justify-end p-4 mb-6"
			>
				<IconCloseSharp heigh="3em" width="3em" />
			</button>
			<div className="flex flex-col items-center px-4 gap-10">
				<h1>Show the QR Code below to the cashier.</h1>
				<img src={qrCodeURL} alt="QR Code" className=" w-52" />
			</div>
		</div>
	);
};

export default QRCode;
QRCode.propTypes = {
	onClickClose: PropTypes.func,
	qrCodeURL: PropTypes.string,
};
