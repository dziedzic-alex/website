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
          I care most about clear behavior, sensible structure, and software that
          stays dependable after it ships. I’m
          building a stronger public portfolio of projects that stretch different
          parts of the stack, because I learn best when I ship something real and
          can stand behind the result. If you want the specifics — tools, shipped
          work, and links to code — they’re in the sections below.
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
