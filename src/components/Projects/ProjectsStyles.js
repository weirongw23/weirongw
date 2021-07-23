import styled from "styled-components";

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(47, 181, 252, 0.5);
	text-align: center;
	width: 400px;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
	width: 100px;
	height: 4px;
	margin: 10px auto;
	border: 0;
	background: #57bad0;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: "Droid Serif", serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: left;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
	color: #ffffff;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #007aff;
	border-radius: 15px;
	transition: all 0.2s ease-in-out;
	&:hover {
		background: #2fb5fc;
		transform: scale(1.1);
	}
`;

export const TagList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 3rem;
`;
export const Tag = styled.li`
	color: #d8bfbf;
	font-size: 2rem;
`;
