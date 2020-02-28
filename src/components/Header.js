import React from 'react';
import Forest from '../images/header-img.jpg';

import { StyledHeader, StyledHeaderImg, StyledHeaderText } from '../styled';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderImg src={Forest} alt='sparse forest' />
			<StyledHeaderText>
				<h1>Shawn DelPercio</h1>
				<p>Full-Stack Web Developer</p>
			</StyledHeaderText>
		</StyledHeader>
	);
};
export default Header;
