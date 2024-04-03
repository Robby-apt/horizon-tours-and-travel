import React from 'react';

function ContactMedia() {
	return (
		<div className="contactMedia">
			<div className="mediaContainer">
				<p className="socialIntro">
					Feel free to contact us with any issue or question
					<br />
					you may have about our services in general.
					<br />
					<br />
					We love hearing from you.
				</p>

				<div className="phoneAndEmail">
					<div className="contactEmail">
						<i className="fa-solid fa-envelope" />
						<p>horizontourandtravel3@gmail.com</p>
					</div>

					<div className="contactPhone">
						<i className="fa-solid fa-phone" />
						<p>0748629493</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactMedia;
