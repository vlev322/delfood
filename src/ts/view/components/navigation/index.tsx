import React from "react";

import { A } from "hookrouter";

export const Navigation = () => {
	return (
		<div className="wrapper-navigation">
			<div className="menu">
				<ul>
					<li>
						<A href="/">Main</A>
					</li>
					<li className="dropdown">
						<A href="/about">About</A>
						<ul>
							<li>
								<A href="/">We today</A>
							</li>
							<li>
								<A href="/">Feed</A>
							</li>
							<li>
								<A href="/">Placing</A>
							</li>
						</ul>
					</li>
					<li>
						<A href="/contact">Contact</A>
					</li>
				</ul>
				<div className="search">
					<div className="d5">
						<form>
							<input type="text" placeholder="Search here..." />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
