import React from "react";
import Button from "./common/Button";

export default function Navigation() {
	return (
		<nav>
			<div className="logo">logo</div>

			<div className="menu">
				<ul className="menu-list">
					<li className="menu-listItem">Features</li>
					<li className="menu-listItem">News</li>
				</ul>
			</div>
			<div className="cta-btn">
                <Button size="small" variant="ghost">Signup</Button>
                <Button size="small" variant="fill">Log in</Button>
			</div>
		</nav>
	);
}
