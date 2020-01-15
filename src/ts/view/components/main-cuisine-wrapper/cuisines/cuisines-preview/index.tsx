import React, { Component } from "react";

import { ICuisineProps, CuisineItem } from "../cuisine-item";
import { CuisineService } from "../../../../../services";
import { MealsPreview } from "../../../meals/meals-preview";

export class Cousines extends Component {
	public state = { cuisines: [] as ICuisineProps[], days: [] = [] };

	public componentDidMount(): void {
		const _cuisineService = new CuisineService();
		_cuisineService.getCuisinesAsync().then(result => {
			let cuisines = result as ICuisineProps[];
			this.setState({ cuisines: cuisines });
		});
	}

	render() {
		const cuisines = this.state.cuisines;
		return (
			<>
				<div className="cuisines">
					{cuisines.map(cuisine => (
						<CuisineItem key={cuisine.id} {...cuisine} />
					))}
				</div>
				<MealsPreview cuisines={cuisines} />
			</>
		);
	}
}
