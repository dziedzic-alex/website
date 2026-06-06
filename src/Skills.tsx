import TechnologyGrid from "./TechnologyGrid.tsx";

import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-heading">
        <h2>Skills & Tools</h2>
        <p>
          A selection of languages, frameworks, and tools I've used across
          professional and personal projects.
        </p>
      </div>

      <TechnologyGrid
        technologies={[
          "TypeScript",
          "React",
          "PHP",
          "Cpp",
          "Python",
          "SQL",
          "GraphQL",
          "AWS",
          "Terraform",
          "GitHubActions",
          "Docker",
          "FastAPI",
        ]}
      />
    </section>
  );
}

export default Skills;
