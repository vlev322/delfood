import React from "react";
import { useRoutes } from "hookrouter";

import { NotFoundPage } from "./view/components/pages/not-found";
import { About } from "./view/components/pages/about";
import { Contact } from "./view/components/pages/contact";
import { ContentWrapper } from "./view/components/food-collection";

export const routes = {
	"/": () => <ContentWrapper />,
	"/cuisine/*": () => <ContentWrapper />,
	"/about": () => <About />,
	"/contact": () => <Contact />
};

export const NavigationCore = () => {
	const routeResult = useRoutes(routes);

	return routeResult || <NotFoundPage />;
};
