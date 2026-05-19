import AboutMe from "./AboutMe.tsx";
import Skills from "./Skills.tsx";
import Project from "./Project.tsx";
import WebsiteImage from "./assets/personal_website_screenshot.jpg";

import type { TechnologyEnum } from "./TechnologyGrid.tsx";

import "./Home.css";

const PROJECTS: {
  title: string;
  summary: string;
  image: string;
  highlights: string[];
  techStack: TechnologyEnum[];
  liveUrl?: string;
  sourceUrl?: string;
}[] = [
  {
    title: "Personal Website",
    summary:
      "React portfolio on AWS — static hosting, CDN, and fully automated deploys",
    image: WebsiteImage,
    highlights: [
      "Static React site — no server to run in production",
      "AWS edge stack: Route 53 → CloudFront → S3",
      "Terraform-defined infra; GitHub Actions runs CI on PRs and deploys on merge",
    ],
    techStack: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Node",
      "Route53",
      "S3",
      "CloudFront",
      "Terraform",
      "GitHubActions",
    ],
    liveUrl: "https://alexdziedzic.com",
    sourceUrl: "https://github.com/dziedzic-alex/website",
  },
];

function Home() {
  return (
    <div className="home-container">
      <AboutMe />
      <Skills />
      {PROJECTS.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}

export default Home;
