import React from "react";

interface IProps {
	id: number;
	name: string;
	description: string;
	callories: number;
	image: string;
	_onClick: ({}) => void;
}

export function MealItem({ id, name, description, callories, image, _onClick }: IProps): JSX.Element {
	const orderMeal = () => {
		_onClick({
			[id]:name
		})
	}
	return (
		<div data-id={id}>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{callories}</p>
			<p>{image}</p>
			<button onClick={orderMeal}>Order it</button>
		</div>
	);
}
