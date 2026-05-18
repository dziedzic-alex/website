import { FaAws } from "react-icons/fa";

import {
  SiTypescript,
  SiReact,
  SiPhp,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiGraphql,
  SiTerraform,
  SiGithub,
} from "react-icons/si";

import type { IconType } from "react-icons";

import "./Skills.css";

const SKILL_INFO: { icon: IconType; label: string; color: string }[] = [
  { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { icon: SiReact, label: "React", color: "#61dafb" },
  { icon: SiPhp, label: "PHP", color: "#777bb4" },
  { icon: SiCplusplus, label: "C++", color: "#00599c" },
  { icon: SiPython, label: "Python", color: "#3776ab" },
  { icon: SiMysql, label: "SQL", color: "#4479a1" },
  { icon: SiGraphql, label: "GraphQL", color: "#e10098" },
  { icon: FaAws, label: "AWS", color: "#ff9900" },
  { icon: SiTerraform, label: "Terraform", color: "#844fba" },
  { icon: SiGithub, label: "GitHub Actions", color: "#ffffff" },
];

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

      <div className="skills-container">
        {SKILL_INFO.map(({ icon: Icon, label, color }) => (
          <div className="skill-chip" key={label}>
            <Icon aria-hidden="true" style={{ color }} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
