import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Cousines } from "./cuisines/index";
import { Breadcrumbs } from "../breadcrumbs";
import { HeaderComposition } from "../header";

export const ContentWrapper = () => (
	<div className="content-wrapper">
		<HeaderComposition />
		<Router>
			<Breadcrumbs />
			<Cousines />
		</Router>
		<a href="#home" className="toTop">
			To top ☝
		</a>
	</div>
);
