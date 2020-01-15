import React from "react";

import { Switch, Route } from "react-router-dom";

import { DaysPreview } from "../../days";
import { MealCollection } from "..";
import { getDays } from "../../../../services/days";

export const MealsPreview = ({ cuisines }: any) => {
	const days = getDays();
	return (
		<Switch>
			{cuisines.map(({ name }: any) => (
				<Route key={name} path={`/cuisine/${name}`}>
					<h2>{name}</h2>
					<DaysPreview name={name} days={days} />
					{days.map((day, index) => (
						<Route path={`/cuisine/${name}/${day}`} key={day}>
							<MealCollection day={index} name={name} />
						</Route>
					))}
				</Route>
			))}
		</Switch>
	);
};
