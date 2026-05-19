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
    summary: "A personal portfolio to show off my work",
    image: WebsiteImage,
    highlights: [
      "App is just a bundle built with React, TypeScript, and Node",
      "Deployed using Route53 for DNS handling, S3 to host the bundle, and CloudFront for faster serving via CDN",
      "Automated workflows in terms of CD/CI using Terraform and GitHub Actions",
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
