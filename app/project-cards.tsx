"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "./content";
import { projectImages } from "./media";
import { useClearLanguage } from "./site-shell";

export function ProjectCards({ projects, compact = false, archived = false }: { projects: Project[]; compact?: boolean; archived?: boolean }) {
  const { clear } = useClearLanguage();
  const [active, setActive] = useState<Project | null>(null);

  const closeActive = useCallback(() => {
    setActive(null);
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (projects.some((project) => project.slug === hash)) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, [projects]);

  useEffect(() => {
    const openFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const project = projects.find((item) => item.slug === hash);
      if (project) setActive(project);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [projects]);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") closeActive(); };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = overflow;
    };
  }, [active, closeActive]);

  return (
    <>
      <div className={`project-grid ${compact ? "project-grid-compact" : ""} ${archived ? "project-grid-archive" : ""}`}>
        {projects.map((project) => {
          const projectImage = projectImages[project.slug];
          return (
            <article className={`project-card tone-${project.tone}`} id={project.slug} key={project.slug}>
              <div className="project-card-meta"><i>{archived ? "Завершён" : project.status ?? "Действующий проект"}</i></div>
              {projectImage ? (
                <div className="project-photo"><Image src={projectImage} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
              ) : (
                <div className="project-photo project-photo-placeholder" aria-hidden="true"><span>{project.title}</span></div>
              )}
              <div><h3>{project.title}</h3><p>{clear ? project.clearSummary : project.summary}</p></div>
              <button type="button" onClick={() => setActive(project)}>Подробнее <span aria-hidden="true">↗</span></button>
            </article>
          );
        })}
      </div>
      {active && (
        <div className="dialog-backdrop" role="presentation" onClick={closeActive}>
          <section className={`project-dialog tone-${active.tone}`} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={(event) => event.stopPropagation()}>
            <div className="dialog-top"><span>{archived ? "Архив проектов" : "Проект клуба"}</span><button type="button" onClick={closeActive}>Закрыть <b aria-hidden="true">×</b></button></div>
            <div className="dialog-grid">
              <div><p className="dialog-kicker">{archived ? "Завершённый проект" : active.status ?? "Подробнее о проекте"}</p><h3 id="project-dialog-title">{active.title}</h3>{projectImages[active.slug] ? <div className="dialog-project-photo"><Image src={projectImages[active.slug]!} alt="" fill sizes="(max-width: 720px) 100vw, 48vw" /></div> : <div className="dialog-project-photo project-photo-placeholder" aria-hidden="true"><span>{active.title}</span></div>}</div>
              <div className="dialog-copy">
                <p>{clear ? active.clearDescription : active.description}</p>
                <ul>{active.points.map((point) => <li key={point}>{point}</li>)}</ul>
                {active.support && <p className="project-support">{active.support}</p>}
                {!archived && <Link className="button button-dark" href="/contacts/" onClick={closeActive}>{clear ? "Спросить об участии" : "Узнать об участии"} <span>↗</span></Link>}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
