import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ICuisineProps, CuisineItem } from "../cuisine-item";
import { CuisineService } from "../../../../services";
import { MealCollection } from "../../meals/meal-collection";
import { getDays } from "../../../../services/days/index";
import { Breadcrumbs } from "../../breadcrumbs";

export class Cousines extends Component {
	public state = { cuisines: [] as ICuisineProps[], days: [] = [] };

	public componentDidMount(): void {
		const _cuisineService = new CuisineService();
		_cuisineService.getCuisinesAsync().then(result => {
			let cuisines = result as ICuisineProps[];
			this.setState({ cuisines: cuisines });
		});
	}

	render() {
		const days = getDays();
		return (
			<>
				<Router>
					<Breadcrumbs />
					<div className="cuisines">
						{this.state.cuisines.map(cuisine => (
							<div key={cuisine.name}>
								<CuisineItem key={cuisine.id} {...cuisine} />
								<Link to={`/cuisine/${cuisine.name}`}>Відкрити меню</Link>
							</div>
						))}
					</div>
					<Switch>
						{this.state.cuisines.map(({ name }) => (
							<Route key={name} path={`/cuisine/${name}`}>
								<h2>{name}</h2>
								<div className="days">
									{days.map((day, index) => (
										<div key={day}>{<Link to={`/cuisine/${name}/${day}`}>{day}</Link>}</div>
									))}
								</div>
								{days.map((day, index) => (
									<Route path={`/cuisine/${name}/${day}`} key={day}>
										<MealCollection day={index} name={name} />
									</Route>
								))}
							</Route>
						))}
					</Switch>
				</Router>
			</>
		);
	}
}
