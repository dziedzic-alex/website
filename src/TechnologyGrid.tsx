import {
  SiCplusplus,
  SiCss,
  SiHtml5,
  SiNodedotjs,
  SiTypescript,
  SiTerraform,
  SiGithub,
  SiCmake,
} from "react-icons/si";
import { SiReact, SiPhp, SiPython, SiMysql, SiGraphql } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import type { IconType } from "react-icons";

import "./TechnologyGrid.css";

export type TechnologyEnum =
  | "TypeScript"
  | "React"
  | "HTML"
  | "CSS"
  | "Node"
  | "PHP"
  | "Cpp"
  | "CMake"
  | "Python"
  | "SQL"
  | "GraphQL"
  | "AWS"
  | "Route53"
  | "S3"
  | "CloudFront"
  | "Terraform"
  | "GitHubActions";

const TECHNOLOGY_INFO: Record<
  TechnologyEnum,
  { icon: IconType; label: string; color: string }
> = {
  TypeScript: { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  React: { icon: SiReact, label: "React", color: "#61dafb" },
  HTML: { icon: SiHtml5, label: "HTML", color: "#e34f26" },
  CSS: { icon: SiCss, label: "CSS", color: "#663399" },
  Node: { icon: SiNodedotjs, label: "Node.js", color: "#5fa04e" },
  PHP: { icon: SiPhp, label: "PHP", color: "#777bb4" },
  Cpp: { icon: SiCplusplus, label: "C++", color: "#00599c" },
  CMake: { icon: SiCmake, label: "CMake", color: "#064f8c" },
  Python: { icon: SiPython, label: "Python", color: "#3776ab" },
  SQL: { icon: SiMysql, label: "SQL", color: "#4479a1" },
  GraphQL: { icon: SiGraphql, label: "GraphQL", color: "#e10098" },
  AWS: { icon: FaAws, label: "AWS", color: "#ff9900" },
  Route53: { icon: FaAws, label: "Route 53", color: "#ff9900" },
  S3: { icon: FaAws, label: "S3", color: "#ff9900" },
  CloudFront: { icon: FaAws, label: "CloudFront", color: "#ff9900" },
  Terraform: { icon: SiTerraform, label: "Terraform", color: "#844fba" },
  GitHubActions: { icon: SiGithub, label: "GitHub Actions", color: "#ffffff" },
};

interface Props {
  technologies: TechnologyEnum[];
}

function TechnologyGrid(props: Props) {
  const { technologies } = props;

  return (
    <div className="technology-grid-container">
      {technologies.map((technology) => {
        const { icon: Icon, label, color } = TECHNOLOGY_INFO[technology];
        return (
          <div className="technology-chip" key={technology}>
            <Icon aria-hidden="true" style={{ color }} />
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TechnologyGrid;
