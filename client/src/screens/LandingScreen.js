import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
	duration: 2000,
});

function LandingScreen() {
	return (
		<div className='row landing'>
			<div className='col-md-12 text-center'>
				<h2 data-aos='zoom-in' style={{ color: 'ede9fe', fontSize: '100px' }}>
					HOTEL BOOKING
				</h2>
				<h1 data-aos='zoom-out' style={{ color: 'ede9fe' }}>
					Welcome to our Website!!
				</h1>
				<Link to='/home'>
					<button className='btn btn-primary landingBtn'>Lets Go !!</button>
				</Link>
			</div>
		</div>
	);
}

export default LandingScreen;
