import React from "react";
import { Link } from "react-router-dom";
import project1screenshot from "../images/Project_1_Screenshot.png";
import project2screenshot from "../images/Project_2_Screenshot.png";

function Projects() {
  return (
    <div>
      <div className="container" id="projects">
        <div className="projects projects-copy">
          <a
            href="https://ryanstephens6.github.io/distance-from-ISS/"
            target="_blank"
          >
            <img
              className="project-img"
              src={project1screenshot}
              alt="Screenshot of 'Where ISS It?'"
            />
          </a>

          <a href="https://guardian-guide-1222.herokuapp.com/" target="_blank">
            <img
              className="project-img"
              src={project2screenshot}
              alt="Screenshot of 'Guardian Guide'"
            />
          </a>

          <a href="https://guardian-guide-1222.herokuapp.com/" target="_blank">
            <img
              className="project-img"
              src={project2screenshot}
              alt="Screenshot of 'Guardian Guide'"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
