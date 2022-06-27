import React from "react";

import "./Footer.css";

import twitter from "../images/Twitter Icon.png";
import github from "../images/GitHub Icon.png";
import linkedin from "../images/Linkedin Icon.png";
export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://twitter.com/awsyaseen22" target="_blank">
        <img src={twitter} />
      </a>
      <a href="https://github.com/AwsYaseen22" target="_blank">
        <img src={github} />
      </a>
      <a href="https://www.linkedin.com/in/aws-ahmed" target="_blank">
        <img src={linkedin} />
      </a>
    </div>
  );
}
