import Link from "next/link";
import React, { useState } from "react";

import {
	ContactDropDown,
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	NavProductsIcon,
	SocialIcons,
	Span,
	SiteName,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
					}}
				>
					<SiteName>weirongw.dev</SiteName>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#experience">
					<NavLink>Experience</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#technologies">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#contact">
					<NavLink>Contact</NavLink>
				</Link>
			</li>
		</Div2>
	</Container>
);

export default Header;
