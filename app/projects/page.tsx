"use client";

import Link from "next/link";
import { activeProjects } from "../content";
import { ProjectCards } from "../project-cards";
import { PageHomeLink, useClearLanguage } from "../site-shell";

export default function ProjectsPage() {
  const { clear } = useClearLanguage();
  return (
    <>
      <section className="page-hero page-hero-projects" id="top">
        <PageHomeLink />
        <div className="section-label">Действующие проекты</div>
        <h1>{clear ? "Занятия и проекты клуба" : "Разные возможности для активной жизни"}</h1>
        <p>{clear ? "Здесь можно узнать, чем занимаются участники клуба." : "В проектах можно общаться, осваивать повседневные навыки, заниматься спортом и творчеством."}</p>
      </section>
      <section className="section project-index">
        <ProjectCards projects={activeProjects} />
        <div className="section-end">
          <Link className="quiet-link" href="/projects/archive/">Завершённые проекты →</Link>
        </div>
      </section>
    </>
  );
}
