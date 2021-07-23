import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
	SectionHighlight,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

// TODO
// 1. Buttons - need resume and my story links

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello, I'm <br />
				Peter Wu.
			</SectionTitle>
			<SectionText>
				I'm a third-year Computer Science, Data Science, and Business
				student at University of Michigan. My passions lie in
				high-quality software engineering, data visualizations, and
				machine learning.
			</SectionText>

			<Button
				onClick={() => (window.location = "https://www.weirongw.dev")}
			>
				My Story
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
