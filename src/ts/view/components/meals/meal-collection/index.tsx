import React, { Component, useEffect, useState } from "react";

import { MealItem } from "../meal-item";
import { MealsService } from "../../../../services/meals/index";
import { CartService } from "../../../../services/cart";
import { IMeal } from "../_interface";

interface IProps {
	name: string;
	day: number;
}

interface IState {
	meals: IMeal[];
}

export const MealCollection = ({ name, day }: IProps) => {
	const initialState: IState = { meals: [] };

	const _cart = new CartService();

	const [meals, setMeals] = useState(initialState);

	useEffect(() => {
		const _mealService = new MealsService();
		_mealService.getMealsAsync().then(result => {
			const mealList: IMeal[] = result[name];
			const meals = mealList.filter((current: { days: number[] }) => current.days.includes(day));
			setMeals({ meals });
		});
	}, []);

	const _orderComplexMeal = (): void => {
		console.log(meals);

		meals.meals.map((meal: any) => _cart.add({ ...meal, id: meal.id + 100 }));
	};
	return (
		<div className="meals">
			<div>
				{meals.meals.length !== 0 ? (
					meals.meals.map((meal: any) => <MealItem _onClick={_cart.add} key={meal.id} {...meal} />)
				) : (
					<>
						<h2>On this day meals doesn't exist..</h2>
						<p>Please, select another day.</p>
					</>
				)}
				<br />
				<h2>Also, you can order complex dinner on this day</h2>
				<section className="btn-wrapper">
					<a className="buy-btn" onClick={_orderComplexMeal}>
						Order complex dinner
					</a>
				</section>
			</div>
		</div>
	);
};
