import React from 'react';

const ChefInfo = () => {
	return (
		<div className="container mx-auto p-4 mt-20">
			<div className="flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="w-full md:w-1/2 mb-4 md:mb-0">
					<img
						src="https://i.ibb.co/HnSNGcD/febrian-zakaria-Si-Qgni-cq-Fg-unsplash.jpg"
						alt="Chef"
						className="w-full h-full md:h-[500px] object-cover rounded-lg shadow-md"
					/>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center p-6 text-center md:text-left">
					<div>
						<h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
							Chef Jummy Cuttar
						</h2>
						<p className="text-lg md:text-xl font-medium text-gray-700">
							Chef John Doe is a culinary maestro with over 20 years of
							experience in the kitchen. Known for his innovative recipes and
							passion for fresh, local ingredients, Chef John has worked in some
							of the world's top restaurants. His dedication to the culinary
							arts and ability to craft exquisite dishes have earned him
							numerous awards and accolades. When he's not in the kitchen, Chef
							John enjoys mentoring young chefs and sharing his love for cooking
							with others.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefInfo;
