import React from "react";

export interface ICartItem {
	id: number;
	name: string;
	callories: number;
	price: number;
	quantity: number;
}

export const CartItem = ({ id, name, callories, price, quantity }: ICartItem) => {
	const isComplex = id >= 100 ? "complex-dinner" : "";
	return (
		<div className={isComplex}>
			<div>{name}</div>
			<div>{callories}</div>
			<div>{quantity}</div>
			<div>{price}</div>
		</div>
	);
};
