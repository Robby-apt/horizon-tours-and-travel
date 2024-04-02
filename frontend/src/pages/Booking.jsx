import React from 'react';
import Navbar from '../components/Navbar';
import BookingForm from '../components/bookings-components/BookingForm';
import Footer from '../components/Footer';

function Booking() {
	return (
		<div id="booking">
			<Navbar />
			<BookingForm />
			<Footer />
		</div>
	);
}

export default Booking;
