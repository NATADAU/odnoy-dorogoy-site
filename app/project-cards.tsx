"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Project } from "./content";
import { useClearLanguage } from "./site-shell";

export function ProjectCards({ projects, compact = false, archived = false }: { projects: Project[]; compact?: boolean; archived?: boolean }) {
  const { clear } = useClearLanguage();
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = overflow;
    };
  }, [active]);

  return (
    <>
      <div className={`project-grid ${compact ? "project-grid-compact" : ""} ${archived ? "project-grid-archive" : ""}`}>
        {projects.map((project, index) => (
          <article className={`project-card tone-${project.tone}`} id={project.slug} key={project.slug}>
            <div className="project-card-meta"><span>{String(index + 1).padStart(2, "0")}</span><i>{archived ? "Завершён" : "Действующий проект"}</i></div>
            <div><h3>{project.title}</h3><p>{clear ? project.clearSummary : project.summary}</p></div>
            <button type="button" onClick={() => setActive(project)}>Подробнее <span aria-hidden="true">↗</span></button>
          </article>
        ))}
      </div>
      {active && (
        <div className="dialog-backdrop" role="presentation" onClick={() => setActive(null)}>
          <section className={`project-dialog tone-${active.tone}`} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={(event) => event.stopPropagation()}>
            <div className="dialog-top"><span>{archived ? "Архив проектов" : "Проект клуба"}</span><button type="button" onClick={() => setActive(null)}>Закрыть <b aria-hidden="true">×</b></button></div>
            <div className="dialog-grid">
              <div><p className="dialog-kicker">{archived ? "Завершённый проект" : "Подробнее о проекте"}</p><h3 id="project-dialog-title">{active.title}</h3></div>
              <div className="dialog-copy">
                <p>{clear ? active.clearDescription : active.description}</p>
                <ul>{active.points.map((point) => <li key={point}>{point}</li>)}</ul>
                {!archived && <Link className="button button-dark" href="/contacts/" onClick={() => setActive(null)}>{clear ? "Спросить об участии" : "Узнать об участии"} <span>↗</span></Link>}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
