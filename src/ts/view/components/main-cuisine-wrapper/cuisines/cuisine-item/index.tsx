import React from "react";
import { Link } from "react-router-dom";

export interface ICuisineProps {
	name: string;
	id: number;
	description: string;
	image: string;
}

export const CuisineItem = ({ name, image, description }: ICuisineProps): JSX.Element => (
	<div>
		<h1>{name}</h1>
		<section>
			<img src={image} alt="photo cuisine" />
		</section>
		{/* <img src={"data:image/jpeg;base64," + image} alt="photo cuisine" /> */}
		<p>{description}</p>
		<Link to={`/cuisine/${name}`}>Open menu</Link>
	</div>
);
