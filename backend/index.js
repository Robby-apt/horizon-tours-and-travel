require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3001;

// config of app dependencies
const appUsage = [
	bodyParser.urlencoded({ extended: true }),
	bodyParser.json(),
	cors(),
];

app.use(appUsage);

// nodemailer config
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.SENDER,
		pass: process.env.PASSWORD,
	},
});

// get form data from contact form
app.post('/contact', (req, res) => {
	const { nameField, emailField, subjectField, messageField } = req.body;

	// const mailOptions = {
	// 	from: process.env.SENDER,
	// 	to: process.env.RECEIVER,
	// 	subject: subjectField,
	// 	html: `<h1>Message from: ${nameField}</h1>
	//     <h2>Sender's email: ${emailField}</h2>
	//     <p>${messageField}</p>`,
	// };

	// transporter.sendMail(mailOptions, (err, info) => {
	// 	let output = err || info.response;
	// 	console.log(output);
	// 	res.send(output);
	// });
	console.log(req.body);
});

// get form data from booking form
app.post('/booking', (req, res) => {
	const {
		fName,
		lName,
		phone,
		email,
		destination,
		startDate,
		numberOfPeople,
		totalFee,
	} = req.body;

	let name = `${fName} ${lName}`;

	// const mailOptions = {
	// 	from: process.env.SENDER,
	// 	to: process.env.RECEIVER,
	// 	subject: `Client booking a tour`,
	// 	html: `<h1>Message from: ${name}</h1>
	//     <h2>Sender's email: ${email}</h2>
	//     <h2>Sender's phone: ${phone}</h2>
	//     <p>Booking a tour to <strong>${destination}</strong> for <strong>${numberOfPeople}</strong> people
	//      starting from <strong>${startDate}</strong></p>
	//      <p>This will amount to a total of <strong>${totalFee}</strong></p>`,
	// };

	// transporter.sendMail(mailOptions, (err, info) => {
	// 	let output = err || info.response;
	// 	console.log(output);
	// 	res.send(output);
	// });
	console.log(req.body);
});

app.listen(port, () => {
	console.log(`Hello from port ${port}`);
});
