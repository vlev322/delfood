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
		<div data-id={id}>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{callories}</p>
			<p>{image}</p>
			<p>{price}</p>
			<button onClick={orderMeal}>Order it</button>
		</div>
	);
}
