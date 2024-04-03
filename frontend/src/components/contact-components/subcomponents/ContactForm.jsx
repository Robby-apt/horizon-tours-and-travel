import React, { useState, useRef } from 'react';
// import { send } from 'emailjs-com';
import emailjs from '@emailjs/browser';
const validator = require('email-validator');

function ContactForm() {
	const contactForm = useRef();
	const [contactInfo, setContactInfo] = useState({
		nameField: ``,
		emailField: ``,
		subjectField: ``,
		messageField: ``,
	});

	function handleChange(event) {
		let { name, value } = event.target;
		setContactInfo((prev) => {
			return { ...prev, [name]: value };
		});
		// console.log(contactInfo);
	}

	// async
	function handleSubmit(event) {
		event.preventDefault();

		if (validator.validate(contactInfo.emailField)) {
			// let dataBody = JSON.stringify(contactInfo);

			// try {
			// 	const url = process.env.REACT_APP_BACKEND;
			// 	let res = await fetch(url, {
			// 		method: 'POST',
			// 		headers: { 'content-type': 'application/json' },
			// 		body: dataBody,
			// 	});
			// 	// get status code
			// 	if (res.status === 200) {
			// 		alert(`The message has been sent successfully`);
			// 		setContactInfo({
			// 			nameField: ``,
			// 			emailField: ``,
			// 			subjectField: ``,
			// 			messageField: ``,
			// 		});
			// 		console.log(contactInfo);
			// 	} else {
			// 		alert(
			// 			`Sorry, something went wrong when sending the message`
			// 		);
			// 	}
			// } catch (err) {
			// 	console.log(err);
			// }

			try {
				emailjs.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_CONTACT_TEMPLATE,
					contactForm.current,
					{ publicKey: process.env.REACT_APP_CONTACT_KEY }
				);
				alert(`The message has been sent successfully`);
			} catch (err) {
				console.log(err);
				alert(`Sorry, something went wrong when sending the message`);
			}
		} else {
			alert(`Kindly enter a valid email`);
		}
	}

	return (
		<div className="contactForm">
			<form ref={contactForm} onSubmit={handleSubmit}>
				<div className="nameInput">
					<label htmlFor="nameField">Name:</label>
					<input
						type="text"
						id="nameField"
						name="nameField"
						value={contactInfo.nameField}
						onChange={handleChange}
						minLength="2"
						required
					/>
				</div>
				<div className="emailInput">
					<label htmlFor="emailField">Email:</label>
					<input
						type="email"
						id="emailField"
						name="emailField"
						value={contactInfo.emailField}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="subjectInput">
					<label htmlFor="subjectField">Subject:</label>
					<input
						type="text"
						id="subjectField"
						name="subjectField"
						value={contactInfo.subjectField}
						onChange={handleChange}
						minLength="5"
						required
					/>
				</div>
				<div className="messageInput">
					<label htmlFor="messageField">Message:</label>
					<textarea
						id="messageField"
						name="messageField"
						cols="30"
						rows="10"
						value={contactInfo.messageField}
						onChange={handleChange}
						minLength="5"
						required
					/>
				</div>
				<button type="submit">SEND</button>
			</form>
		</div>
	);
}

export default ContactForm;
