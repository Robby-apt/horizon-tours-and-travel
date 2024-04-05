import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
const validator = require('email-validator');

function BookingForm() {
	const bookingForm = useRef();
	const [bookingInfo, setBookingInfo] = useState({
		fName: ``,
		lName: ``,
		phone: ``,
		email: ``,
		destination: ``,
		startDate: ``,
		numberOfPeople: ``,
		totalFee: ``,
	});

	function clearForm() {
		setBookingInfo({
			fName: ``,
			lName: ``,
			phone: ``,
			email: ``,
			destination: ``,
			startDate: ``,
			numberOfPeople: ``,
			totalFee: ``,
		});
	}

	function handleChange(event) {
		let { name, value } = event.target;
		setBookingInfo((prev) => {
			return { ...prev, [name]: value };
		});
	}

	// async
	function handleSubmit(event) {
		event.preventDefault();

		if (validator.validate(bookingInfo.email)) {
			try {
				emailjs.sendForm(
					process.env.REACT_APP_BOOKING_ID,
					process.env.REACT_APP_BOOKING_TEMPLATE,
					bookingForm.current,
					{ publicKey: process.env.REACT_APP_BOOKING_PUBLIC_KEY }
				);
				alert(`The message has been sent successfully`);
				clearForm();
			} catch (err) {
				console.log(err);
				alert(`Sorry, something went wrong when sending the message`);
			}
		} else {
			alert(`Kindly enter a valid email`);
		}
	}

	return (
		<div className="bookingForm">
			<form ref={bookingForm} onSubmit={handleSubmit}>
				<div className="nameField field">
					<div className="fNameField">
						<label htmlFor="fName">First Name:</label>
						<input
							type="text"
							id="fName"
							name="fName"
							value={bookingInfo.fName}
							onChange={handleChange}
							minLength="2"
							required
						/>
					</div>
					<div className="lNameField">
						<label htmlFor="fName">Last Name:</label>
						<input
							type="text"
							id="lName"
							name="lName"
							value={bookingInfo.lName}
							onChange={handleChange}
							minLength="2"
							required
						/>
					</div>
				</div>

				<div className="contactField field">
					<div className="phoneField">
						<label htmlFor="phone">Phone Number:</label>
						<input
							type="number"
							id="phone"
							name="phone"
							value={bookingInfo.phone}
							onChange={handleChange}
							minLength="10"
							required
						/>
					</div>
					<div className="emailField">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={bookingInfo.email}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div className="detailsField field">
					<div className="destination">
						<label htmlFor="destination">Destination:</label>
						<select
							type="text"
							id="destination"
							name="destination"
							value={bookingInfo.destination}
							onChange={handleChange}
							required
						>
							<option value="Amboseli">
								Amboseli - Ksh 15,000/person
							</option>
							<option value="Hell's Gate">
								Hell's Gate - Ksh 10,000/person
							</option>
							<option value="Maasai Mara">
								Maasai Mara - Ksh 20,000/person
							</option>
							<option value="Tsavo">
								Tsavo - Ksh 15,000/person
							</option>
							<option value="Watamu Marine Park">
								Watamu Marine Park - Ksh 50,000/person
							</option>
						</select>
					</div>
					<div className="startDate">
						<label htmlFor="startDate">Start Date:</label>
						<input
							type="date"
							id="startDate"
							name="startDate"
							value={bookingInfo.startDate}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div className="paymentField field">
					<div className="numPeople">
						<label htmlFor="numberOfPeople">
							Number of People:
						</label>
						<input
							type="number"
							id="numberOfPeople"
							name="numberOfPeople"
							value={bookingInfo.numberOfPeople}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="total">
						<label htmlFor="totalFee">Total Fee:</label>
						<input
							type="text"
							id="totalFee"
							name="totalFee"
							value={bookingInfo.totalFee}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div className="conclusion">
					<p>
						Kindly use M-Pesa, Airtel Money or T-Kash to make
						payments to the following number:
						<br /> <span>0748629493</span>
					</p>

					<button type="submit">Book Tour</button>
				</div>
			</form>
		</div>
	);
}

export default BookingForm;
