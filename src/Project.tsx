import TechnologyGrid from "./TechnologyGrid.tsx";
import type { TechnologyEnum } from "./TechnologyGrid.tsx";

import "./Project.css";

type Props = {
  title: string;
  summary: string;
  image: string;
  highlights: string[];
  techStack: TechnologyEnum[];
  liveUrl?: string;
  sourceUrl?: string;
};

function Project(props: Props) {
  const { title, summary, highlights, techStack, liveUrl, sourceUrl, image } =
    props;

  return (
    <div className="project-container">
      <h1>{title}</h1>
      <h2>{summary}</h2>
      <img src={image} alt={`Image showcasing ${title} project`} />
      <ul>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <h3>Tech Stack</h3>
      <TechnologyGrid technologies={techStack} />
      <div className="project-links">
        {liveUrl && (
          <>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
            *
          </>
        )}
        {sourceUrl && (
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
