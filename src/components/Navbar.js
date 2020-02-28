import React, { useState } from 'react';

import { StyledNav } from '../styled';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(true);

	if (scrolled === false) {
		return;
	}

	return (
		<StyledNav>
			<i class='fas fa-bars fa-5x'></i>
			<h1>Shawn DelPercio</h1>
			<div>
				<h3>
					Email: <span>sdelperc@gmail.com</span>
				</h3>
				<h3>
					Phone: <span>(302)-757-1349</span>
				</h3>
			</div>
			<div>
				<i class='fab fa-linkedin fa-3x'></i>
				<i class='fab fa-github-square fa-3x'></i>
			</div>
		</StyledNav>
	);
};
export default Navbar;
