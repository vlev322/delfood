import React, { Component, Fragment } from "react";

// import { Router } from "./router";
// import { Sidebar } from "./sidebar";

export class IndexComposition extends Component {
	public render(): JSX.Element {
		return (
			<Fragment>
				{/* <Sidebar />
				<Router />*/}
				<div className="test-class">Hello World</div>
			</Fragment>
		);
	}
}
