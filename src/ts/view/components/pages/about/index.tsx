import React from "react";

import breackfast from "../../../../../style/img/about/breackfast.jpg";
import lunch from "../../../../../style/img/about/lunch.jpg";
import brunch from "../../../../../style/img/about/brunch.jpg";
import { Gallery } from "../../gallery";

export const About = () => (
	<section className="page-wrapper">
		<article>
			<h2>Breakfast</h2>
			<p>
				Breakfast is our claim to fame! With our World Famous French Toast Flight which combines our four signature
				flavors of batter dipped Brioche , you are sure to find your favorite! We also make things from scratch around
				these parts, with our hand shredded B&B Cheese Crusted Hash Browns, house made B&B Maple Chicken & Apple or B&B
				Spicy Pork sausage; you can taste the Love!
			</p>
			<img src={breackfast} alt="food img" />
		</article>
		<article>
			<h2>Lunch</h2>
			<p>
				We also have an eclectic mix of menu items for featuring collaborations with local specialty artisans including;
				La Colombe “Louisiane” Coffee , Delilah’s Chicago Bar, Burnt City Brewing, and Love Cork Screw.
			</p>
			<img src={lunch} alt="food img" />
		</article>
		<article>
			<h2>Brunch</h2>
			<p>
				Brunch at Batter & Berries is like none other! With items like our French Toast Flight, Cluck & Gaufre (goof),
				La Colombe Brisket or The PortaBella Hash, there is something for everyone to love!
			</p>
			<img src={brunch} alt="food img" />
		</article>
		<article>
			<h2>Were here for you!</h2>
			<p>
				Batter & Berries was founded by Dr. Tanya & Craig Richardson in 2012 as an eclectic breakfast, lunch and brunch
				restaurant. The purpose was simple: provide a world-class dining experience like no other. By providing guests
				with unique food options and an upbeat & invigorating atmosphere, we have done just that.
			</p>
			<p>
				What makes us special is our approach to serving you, our guests, we serve you the way we want to be served;
				with love. Most of our menu items are made in house, each day. Every egg is cracked by hand, our sausages are
				hand made from locally sourced poultry & Maple Leaf Farms Pork, and our potatoes are shredded fresh every day.
				We use 100% Pure Maple Syrup, nothing artificial. Our French Toast batters and sauces are made with fresh fruit,
				which leaves an unmistakeable impression on the palate.
			</p>
			<p>
				Batter & Berries is a melting pot, and community hub. We also are very proud to partner with other local
				artisans, craftspeople, and businesses to further provide selections you simply won’t get anywhere else.
				Collaborations include; La Colombe Coffee Roasters, Burnt City Brewing, Delilah’s Bar, Love Cork Screw, Brown
				Sugar Bakery, Noir D’ Ebene Patisserie, CCap, After School Matters, Chicago Public Schools Culinary Arts, to
				name a few. Simply put, we love what we do here, and hope you will too!
			</p>
		</article>
		<Gallery />
	</section>
);
