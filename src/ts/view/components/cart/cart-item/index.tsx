import React from "react";

interface ICartItem {
	id: number;
	name: string;
	callories: number;
	price: number;
	quantity: number;
}

export const CartItem = ({ id, name, callories, price, quantity }: ICartItem) => {
	return (
		<div>
			<div>id</div>
			<div>name</div>
			<div>callories</div>
			<div>price</div>
			<div>quantity</div>
		</div>
	);
};
