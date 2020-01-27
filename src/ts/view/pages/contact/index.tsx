import React from "react";

export const Contact = () => (
	<div className="page-wrapper contact">
		<div className="contact-main">
			<h2>General:</h2>
			<p>
				<a href="mailto:example@ua.com">info@baterries.com</a>
			</p>
			<h2>
				Executive Chef: Ken L. Polk
				<p>
					<a href="mailto:example@ua.com">Contact Chef - chefken@batterandberries.com</a>
				</p>
			</h2>
			<h2>Days of Operation:</h2> <p> Seven Days a Week</p>
			<h2>WINTER HOURS:</h2> <p> FRIDAY- MONDAY 8:00 AM- 3:00 PM, TUESDAY- THURSDAY 9:00 AM- 2:00 PM</p>
			<h3>Address:</h3>
			<p> 2748 N. Lincoln Ave. Chicago IL. Call us- 1(773) 248-7710</p>
		</div>
		<div className="contact-map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13344.416747463541!2d-87.74853970944699!3d41.847007840652395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e33aee39c98a7%3A0xe54abe570fc14005!2sAMC%20Cicero%2014!5e0!3m2!1sen!2sus!4v1580050159504!5m2!1sen!2sus"
				width="350"
				height="250"
			></iframe>
			<div className="contact-social">
				<h2>Follow us on Social media:</h2>
				<h2>We're social!</h2>
				<div>
					<p>
						<a href="#">Google+</a>
					</p>
					<p>
						<a href="#">Instagram</a>
					</p>
					<p>
						<a href="#">Twitter</a>
					</p>
					<p>
						<a href="#">Facebook</a>
					</p>
				</div>
			</div>
		</div>
	</div>
);
