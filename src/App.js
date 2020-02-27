import React from 'react';

// components
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ResumeButton from './components/ResumeButton';
import ProjectsList from './components/ProjectsList';

// images
import Nasa from './images/nasa-apod.png';

function App() {
	const myProjects = [
		{
			title: 'NASA Photo of the Day',
			imgSrc: Nasa,
			link: 'https://github.com/sdelpercio/nasa-photo-of-the-day',
			techStack: 'React.js, Axios, Styled-components',
			description:
				'This was a study on making ajax asynchronous calls with Axios to the NASA Photo of the Day API in a React App. I challenged myself to create a masonry effect for the fetched images, which turned out well considering the difference in resolution and dimensions of the images. Then, I finished by styling the app with the Styled-components ui library.'
		},
		{
			title: '',
			imgSrc: '',
			link: '',
			techStack: '',
			description: ''
		},
		{
			title: '',
			imgSrc: '',
			link: '',
			techStack: '',
			description: ''
		}
	];

	return (
		<div>
			<Navbar />
			<Header />
			<AboutMe />
			<ResumeButton />
			<ProjectsList myProjects={myProjects} />
		</div>
	);
}

export default App;
