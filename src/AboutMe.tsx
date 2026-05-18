import MountainPic from "./assets/mountain_pic.jpg";

import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-heading">
        <h1>Hello, I'm Alex</h1>
      </div>
      <div className="about-me-copy">
        <h2>Software engineer building reliable, user-focused products.</h2>
        <p>
          I build software with an eye for clarity, reliability, and long-term
          maintainability. My work spans frontend, backend, infrastructure, and
          automation, and I enjoy owning features from idea to polished
          implementation.
        </p>
        <p>
          I’m currently expanding my portfolio with projects like a C++ console
          chess game, this site, and a larger feature-focused project coming
          soon.
        </p>
      </div>
      <img
        className="about-me-image"
        src={MountainPic}
        alt="Me on a mountain"
      />
    </div>
  );
}

export default AboutMe;
