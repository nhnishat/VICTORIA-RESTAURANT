import React from 'react';

const About = () => {
	return (
		<div className="container mx-auto p-4 my-20">
			<div className="flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="w-full md:w-1/2 mb-4 md:mb-0">
					<img
						src="https://i.ibb.co/rmskFgD/dev-asangbam-Sj-G7-MA4n8-S0-unsplash.jpg"
						alt="Restaurant Interior"
						className="w-full h-full md:h-[500px] object-cover rounded-lg shadow-md"
					/>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center p-6 text-center md:text-left">
					<div>
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
							Welcome to VICTORIA RESTAURANT
						</h2>
						<p className="text-lg md:text-xl font-medium text-gray-700">
							Nestled in the heart of [City], VICTORIA RESTAURANT offers an
							unparalleled dining experience. Our exquisite menu is crafted from
							the finest ingredients, ensuring every dish is a culinary
							masterpiece. Whether you're celebrating a special occasion or
							simply enjoying a night out, our elegant ambiance and impeccable
							service promise an unforgettable evening.
						</p>
						<p className="mt-4 text-gray-700">
							Come join us at VICTORIA RESTAURANT and indulge in a world of
							flavor and luxury.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
