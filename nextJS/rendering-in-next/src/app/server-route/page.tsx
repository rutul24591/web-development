// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import { serverSideFunction } from '@/utils/server-utils';
// import { clientSideFunction } from '@/utils/client-utils';

import Slider from '@/components/imageSlider';

const ServerRoute = () => {
	const result = serverSideFunction();
	// const clientResult = clientSideFunction();
	return (
		<>
			<h1> Server Route: {result}</h1>
			{/* <p>Client Route: {clientResult}</p> */}
			<Slider />
		</>
	);
	/** Below code encapsulated into ImageSlider component */
	// const settings = {
	// 	dots: true,
	// };
	// return (
	// 	<div className='image-slider-container'>
	// 		<Slider {...settings}>
	// 			<div>
	// 				<img src='http://picsum.photos/400/200' />
	// 			</div>
	// 			<div>
	// 				<img src='http://picsum.photos/400/200' />
	// 			</div>
	// 			<div>
	// 				<img src='http://picsum.photos/400/200' />
	// 			</div>
	// 			<div>
	// 				<img src='http://picsum.photos/400/200' />
	// 			</div>
	// 		</Slider>
	// 	</div>
	// );
};

export default ServerRoute;
