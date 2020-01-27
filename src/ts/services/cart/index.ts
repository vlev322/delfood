interface ICartItem {
	id: number;
	name: string;
	callories: number;
	price: number;
	quantity: number;
}
interface ICartData {
	items: ICartItem[];
}
interface ICart {
	get: () => ICartData;
	add: (item: ICartItem) => void;
	remove: (id: number) => void;
	removeAll: () => void;
	quantity: () => number;
}

export class CartService implements ICart {
	public get() {
		return JSON.parse(localStorage.getItem("cart") || "{}");
	}

	public add({ id, name, callories, price }: ICartItem) {
		const cartData = JSON.parse(localStorage.getItem("cart") || "{}");

		if (cartData.hasOwnProperty(id)) {
			cartData[id].quantity += 1;
		} else {
			cartData[id] = { name, callories, price, quantity: 1 };
		}
		localStorage.setItem("cart", JSON.stringify(cartData));
	}
	public remove(id: number) {
		const cartData = JSON.parse(localStorage.getItem("cart") || "{}");
		delete cartData[id];
		localStorage.setItem("cart", JSON.stringify(cartData));
	}
	public removeAll() {
		localStorage.removeItem("cart");
	}
	public quantity() {
		return localStorage.length;
	}
}
