import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ICuisineProps, CuisineItem } from "../cuisine-item";
import { CuisineService } from "../../../../../services";
import { getDays } from "../../../../../services/days/index";
import { MealCollection } from "../../../meals";
import { DaysPreview } from "../../../days";

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
								<DaysPreview days={days}/>
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
