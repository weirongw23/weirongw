import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper id="contact">
			<LinkList>
				<LinkColumn>
					<LinkTitle>
						Copyright © Peter Wu, 2021. All Rights Reserved.
					</LinkTitle>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Let's Connect.</LinkTitle>
					<LinkItem href="mailto:weirongw@umich.edu">
						Say Hello {">"}
						{">"}
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>
						I'm an always growing developer, designer, and creator.
					</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/weirongw23">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/weirongw/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.instagram.com/weirongw/">
						<AiFillInstagram size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
