import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer container" id="contacts">
        <ul className="contacts container">
          <li>
            <a
              id="linkedin"
              className="contact-link"
              href="https://www.linkedin.com/in/ryan-sheridan-998709261/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              id="github"
              className="contact-link"
              href="https://github.com/rsheridan613"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
