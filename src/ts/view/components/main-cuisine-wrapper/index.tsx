import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Cousines } from "./cuisines/index";
import { Breadcrumbs } from "../breadcrumbs";

export const ContentWrapper = () => (
	<Router>
		<Breadcrumbs />
		<Cousines />

	</Router>
);
