import React from "react";

import NavItem from "../nav-item";
import SubNav from "../sub-nav";

export function Navigation({ context }) {
	const cx = context.getNavContext();
	const items = cx.getNav();
	return (
		<div className={"menu"}>
			<ul>
				{items.map(item => (
					<NavItem key={item} item={item} onClick={cx.onClick(item)}>
						{cx.getNav(item).length === 0 ? "" : <SubNav context={context} item={item} />}
					</NavItem>
				))}
			</ul>
		</div>
	);
}
