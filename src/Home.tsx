import AboutMe from "./AboutMe.tsx";
import Skills from "./Skills.tsx";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <AboutMe />
      <Skills />
    </div>
  );
}

export default Home;
