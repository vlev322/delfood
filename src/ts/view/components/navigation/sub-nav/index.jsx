import React from "react";

import NavItem from "../nav-item";

export default function SubNav({ context, item }) {
  const cx = context.getNavContext();
  const items = cx.getNav(item);

  return (
    <ul>
      {items.map((item: string | number | undefined) => (
        <NavItem key={item} item={item} onClick={cx.onClick(item)} />
      ))}
    </ul>
  );
}
