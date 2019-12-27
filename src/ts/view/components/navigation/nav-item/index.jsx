import React from "react";

export default function NavItem({ item, children, onClick }) {
	return (
		<li onClick={onClick} className={Boolean(children) ? "dropdown" : ""}>
			{item}
			{children}
		</li>
	);
}
