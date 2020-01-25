import React from "react";

import { Link } from "react-router-dom";

import ukrainian from "../../../../../style/img/backgrounds/ukrainian.jpg";
import italian from "../../../../../style/img/backgrounds/italian.jpg";
import greek from "../../../../../style/img/backgrounds/greek.jpg";
import chinese from "../../../../../style/img/backgrounds/chinese.jpg";

const cuisinesBg: { [key: string]: string } = {
	ukrainian,
	italian,
	greek,
	chinese
};
type props = {
	days: string[];
	name: string;
};

export const DaysPreview = ({ days, name }: props): JSX.Element => {
	const styles = {
		backgroundImage: `url(${cuisinesBg[name]})`,
		backgroundSize: "cover",
		backgroundPosition: "center"
	};
	return (
		<div style={styles} className={`days cuisine-${name}`}>
			<div>
				{days.map((day: string) => (
					<div key={day}>{<Link to={`/cuisine/${name}/${day}`}>{day}</Link>}</div>
				))}
			</div>
		</div>
	);
};
