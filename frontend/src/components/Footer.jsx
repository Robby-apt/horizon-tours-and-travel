import React from 'react';

function Footer() {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	return (
		<footer>
			<p className="rights">
				Horizon Tours and Travel © {currentYear} - All
				rights reserved
			</p>
		</footer>
	);
}

export default Footer;
