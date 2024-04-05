import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [isResNavActive, setIsResNavActive] = useState(false);

	return (
		<div className="navSection">
			<div className="info">
				<div className="navEmail">
					<i className="fa-solid fa-envelope" />
					<p>horizontourandtravel3@gmail.com</p>
				</div>

				<div className="navPhone">
					<i className="fa-solid fa-phone" />
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
					<Link to={'/booking'}>Book a tour</Link>
				</div>

				<div className="navIcons">
					{isResNavActive ? (
						<i
							className="fa-solid fa-xmark"
							onClick={() => {
								setIsResNavActive(false);
							}}
						/>
					) : (
						<i
							className="fa-solid fa-bars"
							onClick={() => {
								setIsResNavActive(true);
							}}
						/>
					)}
				</div>

				{isResNavActive ? (
					<div className="navLinksResponsive">
						<Link to={'/'}>Home</Link>
						<a href="/#popular">Popular destinations</a>
						<Link to={'/contact'}>Contact</Link>
						<Link to={'/booking'}>Book a tour</Link>
					</div>
				) : null}
			</nav>
		</div>
	);
}

export default Navbar;
