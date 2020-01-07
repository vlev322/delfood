import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ICuisineProps, CuisineItem } from "../cuisine-item";
import { CuisineService } from "../../../../services";
import { MealCollection } from "../../meals/meal-collection";
import { getDays } from "../../../../services/days/index";

export class Cousines extends Component {
	public state = { data: [] as ICuisineProps[] };

	public componentDidMount(): void {
		const _cuisineService = new CuisineService();
		_cuisineService.getCuisinesAsync().then(result => {
			let data = result as ICuisineProps[];
			this.setState({ data });
		});
	}
	render() {
		const days = getDays();
		return (
			<Router>
				<div className="cuisines">
					{this.state.data.map(cuisine => (
						<CuisineItem key={cuisine.id} {...cuisine} />
					))}
				</div>

				<div className="days">
					{days.map((day, index) => (
						<div key={day}>
							<h1>{day}</h1>
							<Switch>
								{this.state.data.map(({ name, id }) => (
									<Route key={name} path={`/cuisine/${name}`}>
										<MealCollection day={index} name={name} />
									</Route>
								))}
							</Switch>
						</div>
					))}
				</div>
			</Router>
		);
	}
}
