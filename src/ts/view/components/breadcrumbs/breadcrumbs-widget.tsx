import React from "react";
import { Route } from "react-router-dom";

import { BreadcrumbsItem } from "./breadcrumbs-item";

export const Breadcrumbs = () => (
	<div className="breadcrumbs container-fluid breadcrumbs">
		<Route path="/:path" component={BreadcrumbsItem} />
	</div>
);
