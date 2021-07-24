import React from "react";
import { DiFirebase, DiReact, DiAws } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="technologies">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>Code. Design. Create.</SectionText>
		<List>
			<ListItem>
				<DiReact size="6rem" />
				<ListContainer>
					<ListTitle>
						Algorithms, Web &#38; Mobile Development
					</ListTitle>
					<ListParagraph>
						C, C++, Python, HTML, CSS, React, JavaScript, SQL,
						Django, React Native, SwiftUI, Kotlin
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="6rem" />
				<ListContainer>
					<ListTitle>ML, Statistics, Data, Design</ListTitle>
					<ListParagraph>
						PyTorch, OpenCV, Scikit-Learn, Numpy, Pandas, Tesseract,
						R, D3, Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiAws size="6rem" />
				<ListContainer>
					<ListTitle>Development Tools</ListTitle>
					<ListParagraph>
						Bash, Git, Jira, Notion, VSCode, XCode, PyCharm, AWS,
						Firebase
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
