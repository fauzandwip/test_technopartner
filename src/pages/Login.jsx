import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('support@technopartner.id');
	const [password, setPassword] = useState('1234567');

	const handleOnLogin = async (e) => {
		e.preventDefault();

		try {
			const { data } = await api.post('/oauth/token', {
				grant_type: import.meta.env.VITE_GRANT_TYPE,
				client_secret: import.meta.env.VITE_CLIENT_SECRET,
				client_id: import.meta.env.VITE_CLIENT_ID,
				username: email,
				password,
			});

			// console.log(data);
			localStorage.setItem(
				'access_token',
				`${data.token_type} ${data.access_token}`
			);
			const expiredToken = new Date().getTime() + data.expires_in;
			localStorage.setItem('expired_token', expiredToken);
			navigate('/');
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	return (
		<div className=" w-full h-screen flex flex-col gap-20 bg-slate-50 py-20 px-8">
			<div>
				<img src="logo_technopartner.png" alt="Logo Technopartner" />
			</div>
			<form className="flex flex-col px-10 items-center gap-6">
				{/* email */}
				<div className="flex flex-col gap-2 text-center">
					<label htmlFor="email-form" className=" text-gray-400">
						Email
					</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						name="email"
						id="email-form"
						className=" px-3 py-2 rounded-lg shadow-md bg-white"
					/>
				</div>

				{/* password */}
				<div className="flex flex-col gap-2 text-center">
					<label htmlFor="password-form" className=" text-gray-400">
						Password
					</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						name="password"
						id="password-form"
						className=" px-3 py-2 rounded-lg shadow-md bg-white"
					/>
				</div>

				{/* login button */}
				<input
					onClick={handleOnLogin}
					type="submit"
					value="Login"
					className="w-max px-10 py-2 rounded-lg shadow-md bg-white font-bold active:scale-95 hover:bg-slate-100 cursor-pointer"
				/>
			</form>
		</div>
	);
};

export default Login;
