import React from "react";
import CountUp from "react-countup";

import {
	Section,
	SectionText,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 800, text: "YouTube Watch Time (in hrs)" },
	{ number: 30, text: "Projects Completed" },
	{ number: 10, text: "Languages Learned" },
	{ number: 150, text: "Students Taught" },
];

const Acomplishments = () => (
	<Section>
		<SectionText>By the Numbers.</SectionText>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>
						<CountUp end={card.number} duration={3} redraw={true} />
					</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
