import React from "react";

export interface ICartItem {
	id: number;
	name: string;
	callories: number;
	price: number;
	quantity: number;
}

export const CartItem = ({ id, name, callories, price, quantity }: ICartItem) => {
	return (
		<div>
			<div>{name}</div>
			<div>{callories}</div>
			<div>{quantity}</div>
			<div>{price}</div>
		</div>
	);
};
