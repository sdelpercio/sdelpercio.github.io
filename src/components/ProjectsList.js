import React from 'react';

const ProjectsList = ({ myProjects }) => {
	return (
		<div>
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
		</div>
	);
};
export default ProjectsList;
