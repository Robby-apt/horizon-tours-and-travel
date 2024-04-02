import React from 'react';

function Destination(props) {
	return (
		<div key={props.index} className="destination">
			<img src={props.item.image} alt={props.item.name} />
			<div className="destinationInfo">
				<p className="name">{props.item.name}</p>
				<p className="location">{props.item.county}</p>
				<p className="price">{props.item.pricePerPerson}</p>
				<p className="description">{props.item.description}</p>
			</div>
		</div>
	);
}

export default Destination;
