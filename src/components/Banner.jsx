import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import IconChevronRight from './Icons/IconChevronRight';

const Banner = ({ data }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) =>
				prevSlide === data.length - 1 ? 0 : prevSlide + 1
			);
		}, 2000);

		return () => clearInterval(interval);
	}, [data]);

	const previousSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;

	return (
		<div className="w-full h-auto flex relative transition-transform ease-in-out">
			{data.map((imgURL, i) => {
				return (
					<div
						key={i}
						className={`absolute flex-shrink-0 top-0 w-full h-full bg-cover bg-center ${
							i === currentSlide
								? 'translate-x-0'
								: i === previousSlide
								? '-translate-x-full'
								: 'translate-x-full'
						}`}
					>
						<img src={imgURL} alt={`Banner ${i}`} className="w-screen" />
						<div className="flex justify-between p-4 bg-white z-50">
							<div className="flex gap-2 items-center">
								{data.map((_, index) => {
									return (
										<div
											key={index}
											className={`w-2 h-2 rounded-full aspect-square ${
												index === currentSlide ? 'bg-black' : 'bg-gray-400'
											}`}
										/>
									);
								})}
							</div>
							<div className="flex gap-2 items-center">
								<p className="text-teal-500 font-medium">View all</p>
								<IconChevronRight width="1em" height="1em" />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Banner;

Banner.propTypes = {
	data: PropTypes.array,
};
