import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.nav`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	padding: 1rem;
	padding-top: 2rem;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(2, 60px);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
`;

export const SiteName = styled.p`
	font-size: 3rem;
	font-weight: 800;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
		Space Grotesk;
	background: -webkit-linear-gradient(#3182ce, #63b3ed);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.1);
		background-color: #2a2a72;
		background-image: linear-gradient(315deg, #3182ce 0%, #63b3ed 74%);
		cursor: pointer;
	}
`;

export const Div1 = styled.div`
	margin-left: 40px;
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: column;
	align-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;
export const Div2 = styled.div`
	/* grid-area: 1 / 2 / 2 / 4; */
	grid-area: 1 / 4 / 3 / 6;
	display: flex;
	justify-content: space-around;
	width: 30%auto;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 2 / 2 / 3 / 5;
		/* grid-area: 2 / 2 / 3 / 5; */
	}
`;
export const Div3 = styled.div`
	grid-area: 1 / 5 / 2 / 6;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
	}
`;

// Navigation Links
export const NavLink = styled.a`
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #0096ff;
		opacity: 1;
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
	transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// Social Icons

export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 8px;
	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
