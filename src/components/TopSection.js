import React from "react";

import mail from "../images/Mail.png";
import linkedin from "../images/linkedin.png";
import "./TopSection.css";

// {
//   /* <img src={logo} className="App-logo" alt="logo" />; */
// }

export default function TopSection() {
  return (
    <div className="top--main">
      <div className="top--image"></div>
      <div className="top--text">
        <h1 className="top--title">Aws Ahmed</h1>
        <h3 className="top--subtitle">Software Developer</h3>
        <a className="top--link" href="https://awsyaseen.netlify.app/">
          awsyaseen
        </a>
      </div>
      <div className="top--buttons">
        <a
          className="top--buttons-button top--button-email"
          href="mailto:aws.yaseen.22@gmail.com?subject=Let's connect"
          target="_blank"
        >
          <img src={mail} />
          Email
        </a>
        <a
          className="top--buttons-button top--button-linkedin"
          href="https://www.linkedin.com/in/aws-ahmed"
          target="_blank"
        >
          <img src={linkedin} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
