import React from "react";
import "../css/footer.css";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <div id="footer">
      <h2>Feel free to contact me!</h2>
      <p>Better every day.</p>
      <ul className="links">
        <li className="profile-link">
          <a
            href="https://www.facebook.com/filip.katusin/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook className="icon" />
            <p>Facebook</p>
          </a>
        </li>
        <li className="profile-link" id="profile-link">
          <a
            href="https://www.linkedin.com/in/filip-katu%C5%A1in-09949490/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className="icon" />
            <p>Linkedin</p>
          </a>
        </li>
        <li className="profile-link">
          <a
            href="mailto:filip.katusin@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="icon" />
            <p>Email</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
