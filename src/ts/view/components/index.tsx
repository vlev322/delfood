import React, { Component } from "react";
import { HeaderComposition } from "./header";
import { ContentWrapper } from "./food-collection";

export class IndexComposition extends Component {
	public render(): JSX.Element {
		return (
			<div className="wrapper">
				<main>
					<HeaderComposition />
					<ContentWrapper />
				</main>
			</div>
		);
	}
}
