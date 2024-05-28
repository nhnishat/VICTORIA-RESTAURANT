import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Banner = () => {
	return (
		<Carousel
			showArrows={true}
			autoPlay={true}
			infiniteLoop
			showThumbs={false}
			showStatus={false}
			interval={3000}
			className="myCarousel"
		>
			<div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
				<img
					src="https://i.ibb.co/y8k2YZs/lily-banse-YHSwy6uqvk-unsplash.jpg"
					alt="Legend 2"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
				<img
					src="https://i.ibb.co/myZsRc5/brooke-lark-Hl-Ncigv-Ui4-Q-unsplash.jpg"
					alt="Legend 3"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
				<img
					src="https://i.ibb.co/K5dM7YR/amirali-mirhashemian-sc5s-TPMr-Vfk-unsplash.jpg"
					alt="Legend 4"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
				<img
					src="https://i.ibb.co/k0KyzR5/caroline-attwood-bp-PTl-XWTOvg-unsplash.jpg"
					alt="Legend 5"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="h-[300px] md:h-[500px] lg:h-[700px] w-full">
				<img
					src="https://i.ibb.co/9ZR1rtD/lily-banse-YHSwy6uqvk-unsplash-1.jpg"
					alt="Legend 6"
					className="w-full h-full object-cover"
				/>
			</div>
		</Carousel>
	);
};

export default Banner;
