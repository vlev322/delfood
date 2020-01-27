import React, { useState, useEffect } from "react";
import { CartItem, ICartItem } from "../cart-item";
import { CartService } from "../../../../services/cart";

export const CartPreview = () => {
	const _cart = new CartService();
	const initialState: any = [];
	const [goodItems, setGoods] = useState(initialState);
	const [amount, setAmount] = useState(0);

	const getGoods = () => {
		const goods = [];
		let _amount = 0;
		for (const good in _cart.get()) {
			if (_cart.get().hasOwnProperty(good)) {
				const goodItem = { ..._cart.get()[good], id: good };
				goods.push(<CartItem key={goodItem.price} {...goodItem} />);
				_amount += goodItem.price * goodItem.quantity;
			}
		}
		return { goods, _amount };
	};
	useEffect(() => {
		setGoods(getGoods().goods);
		setAmount(getGoods()._amount);
	}, []);
	const orderMeals = () => {
		_cart.removeAll();
		setGoods([]);
	};
	return (
		<>
			{goodItems.length !== 0 ? (
				<div>
					<div className="cart">
						<div className="cart-header">
							<div>Name</div>
							<div>Callories</div>
							<div>Quantity</div>
							<div>Price</div>
						</div>
						<div className="cart-goods">{goodItems}</div>
						<div className="sammury">
							<h1>Amount: {amount} UAH</h1>
						</div>
						<a className="buy-btn" onClick={orderMeals}>
							Order it
						</a>
					</div>
				</div>
			) : (
				<div className="cart">
					<h1>Cart is empty!</h1>
				</div>
			)}
		</>
	);
};
