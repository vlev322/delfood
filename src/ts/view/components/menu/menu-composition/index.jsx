import React from "react";

import MenuItem from "../menu-item";
import SubMenu from "../sub-menu";

export function Menu({ context }) {
	const cx = context.getNavContext();
	const items = cx.getMenu();
	return (
		<div className={"menu"}>
			<ul>
				{items.map(item => (
					<MenuItem key={item} item={item} onClick={cx.onClick(item)}>
						{cx.getMenu(item).length === 0 ? "" : <SubMenu context={context} item={item} />}
					</MenuItem>
				))}
			</ul>
		</div>
	);
}
