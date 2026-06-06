import AboutMe from "./AboutMe.tsx";
import Skills from "./Skills.tsx";
import Project from "./Project.tsx";
import WebsiteImage from "./assets/personal_website_screenshot.jpg";
import ChessImage from "./assets/chess.jpg";
import PersonalSearchDemo from "./assets/personal-search-demo.mp4";

import type { TechnologyEnum } from "./TechnologyGrid.tsx";

import "./Home.css";

const PROJECTS: {
  title: string;
  summary: string;
  media: {
    type: "image" | "video";
    url: string;
  };
  highlights: string[];
  techStack: TechnologyEnum[];
  liveUrl?: string;
  sourceUrl?: string;
}[] = [
  {
    title: "Personal Search Engine - 06/06/2026 Update",
    summary:
      "I kept losing track of documents I'd already saved — PDFs, scans, and photos buried in folders where I couldn't remember the filename. Work in progress: a personal search engine that finds them by meaning, not exact keyword matches.",
    media: {
      type: "video",
      url: PersonalSearchDemo,
    },
    highlights: [
      "Built for the case where you know what you're looking for but not where you filed it — search by intent instead of remembering paths or titles",
      "FastAPI upload endpoint stores files and enqueues jobs to Redis; a worker processes PDFs and images asynchronously",
      "Separate text and image embedding models — vectors stored in PostgreSQL with pgvector",
      "Search encodes the query against both modalities and ranks documents by nearest embedding distance",
      "Docker Compose dev stack: API, worker, Postgres, and Redis — CI via GitHub Actions",
    ],
    techStack: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Node",
      "Python",
      "SQL",
      "Docker",
      "GitHubActions",
      "FastAPI",
    ],
    sourceUrl: "https://github.com/dziedzic-alex/personal-search-engine",
  },
  {
    title: "Personal Website",
    summary:
      "React portfolio on AWS — static hosting, CDN, and fully automated deploys",
    media: {
      type: "image",
      url: WebsiteImage,
    },
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
    media: {
      type: "image",
      url: ChessImage,
    },
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
