import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navSection">
			<div className="info">
				<div className="navEmail">
					<i className="fa-solid fa-envelope" />
					<p>horizontourandtravel3@gmail.com</p>
				</div>

				<div className="navPhone">
					<i class="fa-solid fa-phone" />
					<p>0748629493</p>
				</div>
			</div>
			<nav className="navbar">
				<a href="/" className="brandName">
					Horizon Tours and Travel
				</a>
				<div className="navLinks">
					<Link to={'/'}>Home</Link>
					<a href="/#popular">Popular destinations</a>
					<Link to={'/contact'}>Contact</Link>
					{/* <a href="/login">Login</a> */}
					<Link to={'/booking'}>Book a tour</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
