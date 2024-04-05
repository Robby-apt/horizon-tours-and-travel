import React from 'react';
import ContactMedia from './subcomponents/ContactMedia';
import ContactForm from './subcomponents/ContactForm';

function ContactMediaAndForm() {
	return (
		<div className="contactLinksAndForm">
			<ContactMedia />
			<ContactForm />
		</div>
	);
}

export default ContactMediaAndForm;
