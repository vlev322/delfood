import React from "react";

interface IProps {
	id: number;
	name: string;
	description: string;
	callories: number;
	image: string;
	price: number;
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
