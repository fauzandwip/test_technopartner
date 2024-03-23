const Login = () => {
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
						type="password"
						name="password"
						id="password-form"
						className=" px-3 py-2 rounded-lg shadow-md bg-white"
					/>
				</div>

				{/* login button */}
				<input
					type="submit"
					value="Login"
					className="w-max px-10 py-2 rounded-lg shadow-md bg-white font-bold"
				/>
			</form>
		</div>
	);
};

export default Login;
