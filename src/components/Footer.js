import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="footer container" id="contacts">
        <ul class="contacts container">
          <li>
            <a
              class="contact-link"
              href="https://www.linkedin.com/in/ryan-sheridan-998709261/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              class="contact-link"
              href="https://github.com/rsheridan613"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
