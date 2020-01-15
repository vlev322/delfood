import React from "react";

import { Link } from "react-router-dom";

export const DaysPreview = ({ days, name }: any): JSX.Element => {
	return (
		<div className="days">
			{days.map((day: string) => (
				<div key={day}>{<Link to={`/cuisine/${name}/${day}`}>{day}</Link>}</div>
			))}
		</div>
	);
};
