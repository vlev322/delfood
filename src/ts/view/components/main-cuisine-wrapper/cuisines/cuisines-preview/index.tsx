import React, { Component } from "react";

import { ICuisineProps, CuisineItem } from "../cuisine-item";
import { CuisineService } from "../../../../../services";
import { MealsPreview } from "../../../meals/meals-preview";
import { MouseScroll } from "../../../mouse-scroll";

import cuisinesBg from "../../../../../../style/img/backgrounds/cuisines.jpg";
export class Cousines extends Component {
	public state = { cuisines: [] as ICuisineProps[], days: [] = [] };

	public componentDidMount(): void {
		const _cuisineService = new CuisineService();
		_cuisineService.getCuisinesAsync().then(result => {
			let cuisines = result as ICuisineProps[];
			this.setState({ cuisines: cuisines });
		});
	}

	public styles = {
		backgroundImage: `url(${cuisinesBg})`,
		backgroundSize: "cover",
		backgroundPosition: "center"
	};
	render() {
		const cuisines = this.state.cuisines;
		return (
			<>
				<div style={this.styles}>
					<div className="cuisines">
						<div className="scrollWrapper">
							<MouseScroll />
						</div>
						{cuisines.map(cuisine => (
							<CuisineItem key={cuisine.id} {...cuisine} />
						))}
					</div>
				</div>
				<MealsPreview cuisines={cuisines} />
			</>
		);
	}
}
