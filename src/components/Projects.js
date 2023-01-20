import React from "react";
import { Link } from "react-router-dom";

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
                src="/images/Project_1_Screenshot.jpg"
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
                src="/images/Project_1_Screenshot.jpg"
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
