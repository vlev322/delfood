import React from "react";
import { useRoutes } from "hookrouter";

import { NotFoundPage } from "./view/pages/not-found";
import { About } from "./view/pages/about";
import { Contact } from "./view/pages/contact";
import { ContentWrapper } from "./view/components/main-cuisine-wrapper";
import { CartPreview } from "./view/pages/cart";

export const routes = {
	"/": () => <ContentWrapper />,
	"/cuisine/*": () => <ContentWrapper />,
	"/about": () => <About />,
	"/contact": () => <Contact />,
	"/cart": () => <CartPreview />
};

export const NavigationCore = () => {
	const routeResult = useRoutes(routes);

	return routeResult || <NotFoundPage />;
};
