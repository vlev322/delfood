import React from "react";
import { Link } from "react-router-dom";

export interface ICuisineProps {
	name: string;
	id: number;
	description: string;
	image: string;
}

export function CuisineItem({ name, image, description }: ICuisineProps): JSX.Element {
	return (
		<div>
			<h1>{name}</h1>
			<img src={"data:image/jpeg;base64," + image} alt="photo cuisine" />
			<p>{description}</p>
			<Link to={`/cuisine/${name}`}>Відкрити меню</Link>
		</div>
	);
}
