import React from 'react';

import { StyledSection } from '../styled';

const ProjectsList = ({ myProjects }) => {
	return (
		<StyledSection>
			<h1>Projects List</h1>
			<div>
				{myProjects.map(project => (
					<div>
						<img src={project.imgSrc} alt={project.name} />
						<div>
							<h3>
								{project.title}
								<span>
									<a href={project.link}>- Github</a>
								</span>
							</h3>
							<h5>{project.techStack}</h5>
							<p>{project.description}</p>
						</div>
					</div>
				))}
			</div>
		</StyledSection>
	);
};
export default ProjectsList;
