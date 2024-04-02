import React from 'react';
import Amboseli from './subcomponents/Amboseli';
import HellsGate from './subcomponents/HellsGate';
import Mara from './subcomponents/Mara';
import Tsavo from './subcomponents/Tsavo';
import Watamu from './subcomponents/Watamu';

function DestinationDisplay() {
	return (
		<div className="destinationDisplay">
			<Amboseli />
			<HellsGate />
			<Mara />
			<Tsavo />
			<Watamu />
		</div>
	);
}

export default DestinationDisplay;
