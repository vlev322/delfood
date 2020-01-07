interface ICartData {
	[key: string]: {}[];
}
interface ICartItem {
	item: {}[];
}
interface ICart {
	get: () => ICartData;
	add: (item: ICartItem) => void;
	remove: () => void;
	removeAll: () => void;
	quantity: () => number;
}

export class CartService implements ICart {
	constructor() {
		localStorage.setItem("cart", JSON.stringify({}));
	}
	public get() {
		return JSON.parse(localStorage.getItem("cart") || "{}");
		// return {
		// 	monday: [
		// 		{
		// 			ukrainian: [
		// 				{
		// 					id: 2,
		// 					name: "Голубці",
		// 					description: "Reprehenderit nulla exercitation deserunt dolor consectetur culpa deserunt anim minim.",
		// 					callories: 541,
		// 					image: "Qui adipisicing minim adipisicing enim culpa mollit esse reprehenderit.",
		// 					days: [0, 3, 4]
		// 				}
		// 			]
		// 		}
		// 	]
		// };
	}

	public add(item: ICartItem) {	
		localStorage.setItem("cart", JSON.stringify(item));
	}
	public remove() {}
	public removeAll() {
		localStorage.removeItem("cart");
	}
	public quantity() {
		return localStorage.length;
	}
}
