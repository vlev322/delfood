export interface IMeal {
	id: number;
	name: string;
	description: string;
	callories: number;
	price: number;
	days: number[];
}
export interface ICartItem {
	id: number;
	name: string;
	callories: number;
	price: number;
	quantity: number;
}
