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

const SKILL_INFO: { icon: IconType; label: string }[] = [
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiPhp, label: "PHP" },
  { icon: SiCplusplus, label: "C++" },
  { icon: SiPython, label: "Python" },
  { icon: SiMysql, label: "SQL" },
  { icon: SiGraphql, label: "GraphQL" },
  { icon: FaAws, label: "AWS" },
  { icon: SiTerraform, label: "Terraform" },
  { icon: SiGithub, label: "GitHub Actions" },
];

function Skills() {
  return (
    <div className="skills-container">
      {SKILL_INFO.map(({ icon: Icon, label }) => (
        <div className="skill-container" key={label}>
          <Icon size={25} />
          {label}
        </div>
      ))}
    </div>
  );
}

export default Skills;
