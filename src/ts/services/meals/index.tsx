import axios from "axios";

export class MealsService {
	async getMealsAsync() {
		const meals = (await axios.get("http://localhost:3000/meals")).data;

		return meals;
	}
}
