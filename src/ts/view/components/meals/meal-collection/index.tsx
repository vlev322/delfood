import React, { Component } from "react";

import { MealItem } from "../meal-item";
import { MealsService } from "../../../../services/meals/index";
import { CartService } from "../../../../services/cart";

interface IProps {
	name: any;
	day: number;
}

interface IState {
	meals: any;
}

export class MealCollection extends Component<IProps, IState> {
	public state = { meals: [] };

	private _cart = new CartService();

	public componentDidMount(): void {
		const _mealService = new MealsService();
		_mealService.getMealsAsync().then(result => {
			const allMeals = result;
			const mealList: [] = allMeals[this.props.name];
			const meals = mealList.filter((current: { days: number[] }) => current.days.includes(this.props.day));
			this.setState({ meals });
		});

	}

	render() {
	const __onclick = () => console.log('add')
		return (
			<div className="meals">
				{this.state.meals.map((meal: any) => (
					<MealItem _onClick={this._cart.add} key={meal.id} {...meal} />
				))}
			</div>
		);
	}
}
