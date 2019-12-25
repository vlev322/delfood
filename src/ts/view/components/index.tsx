import React, { Component } from "react";
import { HeaderComposition } from "./header";

export class IndexComposition extends Component {
	public render(): JSX.Element {
		return (
			<div className="wrapper">
				<main>
					<HeaderComposition />
					<div className="test-class">Hello World</div>
				</main>
			</div>
		);
	}
}
