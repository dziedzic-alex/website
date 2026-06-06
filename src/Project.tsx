import TechnologyGrid from "./TechnologyGrid.tsx";
import type { TechnologyEnum } from "./TechnologyGrid.tsx";

import "./Project.css";

interface Props {
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
}

function Project(props: Props) {
  const { title, summary, highlights, techStack, liveUrl, sourceUrl, media } =
    props;

  return (
    <article className="project-container">
      <header className="project-header">
        <div className="project-header-top">
          <h2 className="project-title">{title}</h2>
          {(liveUrl ?? sourceUrl) && (
            <div className="project-links">
              {liveUrl && (
                <a
                  className="project-link"
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live
                </a>
              )}
              {sourceUrl && (
                <a
                  className="project-link"
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source
                </a>
              )}
            </div>
          )}
        </div>
        <p className="project-summary">{summary}</p>
      </header>

      <div className="project-media">
        {media.type === "image" && (
          <img
            className="project-media"
            src={media.url}
            alt={`Screenshot of ${title}`}
          />
        )}
        {media.type === "video" && (
          <video
            className="project-media"
            src={media.url}
            controls
            autoPlay
            loop
            muted
            playsInline
            aria-label={`Video of ${title}`}
          />
        )}
      </div>

      <div className="project-details">
        <section className="project-section">
          <h3 className="project-section-label">Highlights</h3>
          <ul className="project-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="project-section">
          <h3 className="project-section-label">Tech stack</h3>
          <TechnologyGrid technologies={techStack} />
        </section>
      </div>
    </article>
  );
}

export default Project;
