import React from "react";
import { DiSwift, DiFirebase, DiReact } from "react-icons/di";
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
					<ListTitle>Algorithms and Web</ListTitle>
					<ListParagraph>
						C, C++, Python, HTML, CSS, React, JavaScript, SQL,
						Django
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="6rem" />
				<ListContainer>
					<ListTitle>ML, Data, Design</ListTitle>
					<ListParagraph>
						PyTorch, OpenCV, Scikit-Learn, Numpy, Pandas, D3, Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiSwift size="6rem" />
				<ListContainer>
					<ListTitle>Mobile</ListTitle>
					<ListParagraph>SwiftUI, Kotlin</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
