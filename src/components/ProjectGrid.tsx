import Link from "next/link";
import { ProjectArt } from "./ProjectArt";
import { site } from "@/data/site";

export function ProjectGrid({
  headingLevel = "h3",
  limit,
}: {
  headingLevel?: "h2" | "h3";
  limit?: number;
}) {
  const Heading = headingLevel;
  return (
    <div className="project-grid">
      {site.projects.slice(0, limit).map((project, index) => (
        <article
          className={`project-card project-${index + 1}`}
          key={project.slug}
          id={project.slug}
        >
          <Link
            className="project-art-link"
            href={`/portofolio/${project.slug}`}
            aria-label={`Lihat konsep ${project.name}`}
          >
            <ProjectArt project={project} />
          </Link>
          <div className="project-information">
            <div className="project-title-row">
              <Heading>
                <Link href={`/portofolio/${project.slug}`}>
                  {project.name}
                </Link>
              </Heading>
              <span className="project-industry">
                {project.industry} / {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p>
              {project.headline}
            </p>
            <div className="project-services">
              {project.services.map((service) => (
                <span key={service}>
                  {service}
                </span>
              ))}
            </div>
            <Link className="text-link" href={`/portofolio/${project.slug}`}>
              Lihat konsep proyek
              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

