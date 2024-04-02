import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactMediaAndForm from '../components/contact-components/subcomponents/ContactMediaAndForm';

function Contact() {
	return (
		<div id="contact">
			<Navbar />
			<ContactMediaAndForm />
			<Footer />
		</div>
	);
}

export default Contact;
