import React from 'react';

const Navbar = () => {
	return (
		<nav>
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
		</nav>
	);
};
export default Navbar;
