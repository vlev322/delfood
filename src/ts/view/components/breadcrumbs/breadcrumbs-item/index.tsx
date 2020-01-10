import React from "react";
import { Link, Route } from "react-router-dom";

export const BreadcrumbsItem = ({
	match
}: {
	match: { url: string; isExact: boolean; params: { path: React.ReactNode } };
}) => (
	<span>
		<Link to={match.url || ""} className={match.isExact ? "breadcrumb active" : "breadcrumb"}>
			{match.params.path}
		</Link>
		<Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
	</span>
);
