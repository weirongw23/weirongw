import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#resume">
					<NavLink>Resume</NavLink>
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
			{/* <NavProductsIcon /> */}
			{/* <li>
				<Link href="#writing">
					<NavLink>Writing</NavLink>
				</Link>
			</li> */}
		</Div2>
	</Container>
);

export default Header;
