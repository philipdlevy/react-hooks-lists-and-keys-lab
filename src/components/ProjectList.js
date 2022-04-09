import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("projects", projects);

  const projectArray = projects.map((project) => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}></ProjectItem>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectArray}</div>
    </div>
  );
}

export default ProjectList;





// function ProjectList({ projects }) {
  //   console.log("projects", projects);
  //   return (
  //     <div id="projects">
  //       <h2>My Projects</h2>
//       <div id="project-list">{/* render ProjectItem components here */}</div>
//     </div>
//   );
// }
