import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="footer container" id="contacts">
        <ul class="contacts container">
          <li>
            LinkdIn:
            <a class="contact-link" href="tel:7205305544">
              (720) 530-5544
            </a>
          </li>
          <li>
            GitHub:
            <a
              class="contact-link"
              href="https://github.com/rsheridan613"
              target="_blank"
            >
              rsheridan613
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
