import AboutMe from "./AboutMe.tsx";
import Skills from "./Skills.tsx";
import Project from "./Project.tsx";
import WebsiteImage from "./assets/personal_website_screenshot.jpg";
import ChessImage from "./assets/chess.jpg";

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
  {
    title: "Console Chess",
    summary:
      "Two-player terminal chess in C++, built around inheritance and polymorphism for piece movement",
    image: ChessImage,
    highlights: [
      "Two players in the terminal — full turns with check and checkmate detection",
      "Six piece types inherit from an abstract Piece class, each overriding move rules with virtual methods",
      "Board, game loop, and player input split across separate classes, with pawn promotion on the back rank",
    ],
    techStack: ["Cpp", "CMake"],
    sourceUrl: "https://github.com/dziedzic-alex/chess",
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
