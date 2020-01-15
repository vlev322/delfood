import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Cousines } from "./cuisines/index";
import { Breadcrumbs } from "../breadcrumbs";

export const ContentWrapper = () => (
	<div className="content-wrapper">
		<Router>
			<Breadcrumbs />
			<Cousines />
		</Router>
	</div>
);
