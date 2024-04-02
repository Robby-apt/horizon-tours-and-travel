import React from 'react';

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
					<a href="/">Home</a>
					<a href="/#popular">Popular destinations</a>
					<a href="/contact">Contact</a>
					{/* <a href="/login">Login</a> */}
					<a href="/booking">Book a tour</a>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
