import React from "react";
import "../css/footer.scss";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <div id="footer">
      <h2>Feel free to contact me!</h2>
      <p className="quote">"Better every day."</p>
      <ul className="links">
        <li>
          <a
            className="profile-link"
            href="https://www.facebook.com/filip.katusin/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook className="icon" />
            Facebook
          </a>
        </li>
        <li>
          <a
            className="profile-link"
            href="https://www.linkedin.com/in/filip-katu%C5%A1in-09949490/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className="icon" />
            Linkedin
          </a>
        </li>
        <li>
          <a
            className="profile-link"
            href="mailto:filip.katusin@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="icon" />
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
