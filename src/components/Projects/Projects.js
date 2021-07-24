import React from "react";

import {
	BlogCard,
	CardInfo,
	CardInfoLang,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// Tip: separate logic from content
// Tip: put images in public/images
// TODO: Put your own projects/title/description in constants.js
// Change title, description, image, tags, source, visit

const Projects = () => (
	<Section id="projects">
		<SectionDivider />
		<br />
		<SectionTitle>Featured Projects</SectionTitle>
		<SectionText>
			I ship real-world products to users that have an impact.
		</SectionText>
		<GridContainer>
			{projects.map(
				({
					id,
					image,
					title,
					description,
					tags,
					source,
					visit,
					languages,
				}) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree title>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<br />
						<CardInfoLang>{languages}</CardInfoLang>
						{/* <div>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={i}>{tag}</Tag>
								))}
							</TagList>
						</div> */}
						<UtilityList>
							<ExternalLinks href={visit}>
								Code &#62;
							</ExternalLinks>
							<ExternalLinks href={source}>
								Preview &#62;
							</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
