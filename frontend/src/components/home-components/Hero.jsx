import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
	return (
		<div id="heroText">
			<h1>
				Explore the magical country
				<br />
				that is Kenya
			</h1>
			<Link to={'/booking'}>Book a tour</Link>
		</div>
	);
}

export default Hero;
