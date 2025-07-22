/** As this is server side function meant to be executed in server, it should not find it way in client.
 * server-only package comes into picture. Using serverSideFunction here will break the app now.
 */
'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTheme } from '@/components/theme-provider';
// import { serverSideFunction } from '@/utils/server-utils';
import { clientSideFunction } from '@/utils/client-utils';

const ClientRoute = () => {
	// const result = serverSideFunction();
	// return <h1> Client Route: {result}</h1>;
	// return <h1> Client Route: </h1>;

	/** Example for third-party package i.e react-slick.
	 * It will work here, but as transitioning with use client has not happened for third party component
	 * it will not work in server component
	 */
	const settings = {
		dots: true,
	};
	const clientResult = clientSideFunction();
	/** Can also use below way by exporting ThemeContext from theme-provider.tsx */
	// const themeContext = useContext(ThemeContext);
	const theme = useTheme();
	return (
		<div className='image-slider-container'>
			<h1 style={{ color: theme.colors.secondary }}>SLIDER IMAGE</h1>
			<Slider {...settings}>
				<div>
					<img src='http://picsum.photos/400/200' />
				</div>
				<div>
					<img src='http://picsum.photos/400/200' />
				</div>
				<div>
					<img src='http://picsum.photos/400/200' />
				</div>
				<div>
					<img src='http://picsum.photos/400/200' />
				</div>
			</Slider>
			<p>Result: {clientResult}</p>
		</div>
	);
};

export default ClientRoute;
