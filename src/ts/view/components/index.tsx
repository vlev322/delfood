import React, { Component } from "react";
import { NavigationCore } from "../../router";
import { Navigation } from "./navigation";

export class IndexComposition extends Component {
	public render(): JSX.Element {
		return (
			<div className="wrapper">
				<main>
					<Navigation />
					<NavigationCore />
				</main>
			</div>
		);
	}
}
