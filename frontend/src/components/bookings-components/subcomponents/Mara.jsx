import React from 'react';

function Mara() {
	return (
		<div className="destination">
			<img
				src="/images/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"
				alt="Maasai Mara"
			/>
			<div className="destinationInfo">
				<p className="name">Maasai Mara</p>
				<p className="location">Narok</p>
				<p className="price">Ksh 20,000 per person</p>
				<p className="description">
					Enjoy Kenya's diverse wildlife as you get to see them in
					their natural habitat.
					<br />
					Depending on the time of year of your visit, you may get to
					observe the wildebeast migration, one of the wonders of the
					world.
				</p>
			</div>
		</div>
	);
}

export default Mara;
