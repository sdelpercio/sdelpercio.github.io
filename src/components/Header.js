import React from 'react';
import Forest from '../images/header-img.jpg';

const Header = () => {
	return (
		<div>
			<img src={Forest} alt='sparse forest' />
			<div>
				<h1>Shawn DelPercio</h1>
				<p>Full-Stack Web Developer</p>
			</div>
		</div>
	);
};
export default Header;
