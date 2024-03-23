import { toLocaleID, toLocaleIDCurrency } from '../helpers/number';
import PropTypes from 'prop-types';

const ProfileCard = ({ profile, onClickQR }) => {
	return (
		<div className="w-full h-full flex p-6 bg-[url('motif.png')]">
			<div
				id="card"
				className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6"
			>
				<div className="flex flex-col gap-1">
					<h1>{profile?.greeting},</h1>
					<h1 className=" font-bold">{profile?.name}</h1>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex gap-4">
						<button
							onClick={onClickQR}
							className=" rounded-full shadow-lg bg-white h-20 p-3 active:scale-90 transition-all"
						>
							<img src={profile?.qrcode} alt="QR Logo" className="h-full" />
						</button>
						<div className="border border-gray-300 border-dotted"></div>
						<div className="flex flex-col justify-around">
							<p>Saldo</p>
							<p>Points</p>
						</div>
					</div>

					<div className="flex flex-col items-end">
						<p className="font-bold">{toLocaleIDCurrency(profile?.saldo)}</p>
						<p className="font-bold text-teal-400">
							{toLocaleID(profile?.point)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;

ProfileCard.propTypes = {
	onClickQR: PropTypes.func,
	profile: PropTypes.object,
};
