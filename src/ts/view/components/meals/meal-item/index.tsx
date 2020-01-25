import React from "react";
import { IMeal } from "../_interface";

interface IProps extends IMeal {
	image: string;
	_onClick: ({}) => void;
}

export function MealItem({ id, name, description, callories, image, price, _onClick }: IProps): JSX.Element {
	const orderMeal = () => {
		_onClick({
			id,
			name,
			callories,
			price
		});
	};
	return (
		<div>
			<h3>{name}</h3>
			<p>
				<span>Desctiption meal: </span>
				{description}
			</p>
			<p>
				<span>Quantity calories: </span>
				{callories} ({callories * 4} kJ)
			</p>
			<p>
				<span>Price: </span>
				{price} UAH
			</p>
			<section className="btn-wrapper">
				<a className="buy-btn" onClick={orderMeal}>
					Order it
				</a>
			</section>
		</div>
	);
}
