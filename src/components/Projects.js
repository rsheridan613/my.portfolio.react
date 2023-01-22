import React from "react";
import { Link } from "react-router-dom";
import project1screenshot from "../images/Project_1_Screenshot.png";
import project2screenshot from "../images/Project_2_Screenshot.png";

function Projects() {
  return (
    <div>
      <div class="container" id="projects">
        <div class="projects projects-copy">
          <div class="project-img">
            <Link
              href="https://ryanstephens6.github.io/distance-from-ISS/"
              target="_blank"
            >
              <img
                src={project1screenshot}
                alt="Screenshot of 'Where ISS It?'"
              />
            </Link>
          </div>
          <div class="project-img">
            <Link
              href="https://ryanstephens6.github.io/distance-from-ISS/"
              target="_blank"
            >
              <img
                src={project2screenshot}
                alt="Screenshot of 'Guardian Guide'"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
