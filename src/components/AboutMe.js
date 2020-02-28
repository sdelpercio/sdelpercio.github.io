import React from 'react';
import Me from '../images/hawaii.jpg';

import { StyledSection, StyledProfileImg, StyledProfileText } from '../styled';

const AboutMe = () => {
	return (
		<StyledSection>
			<StyledProfileImg src={Me} alt='shawn' />
			<StyledProfileText>
				<h3>About Me</h3>
				<p>
					I am a 26 year old student at Lambda School living in Baltimore,
					Maryland. Originally, I studied natural sciences, obtaining degrees in
					chemistry and environmental science. Now, I have found my passion in
					the endless craft of programming. Recently, creating dynamic web
					applications using Javascript with React is the primary devotion of my
					time. For the rest of my time I enjoy PC gaming, movies, reading,
					hiking and snowboarding when I can.
				</p>
				<button>See my resume</button>
			</StyledProfileText>
		</StyledSection>
	);
};
export default AboutMe;
