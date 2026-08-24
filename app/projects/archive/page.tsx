"use client";

import Link from "next/link";
import { archivedProjects } from "../../content";
import { ProjectCards } from "../../project-cards";
import { PageHomeLink, useClearLanguage } from "../../site-shell";

export default function ArchivePage() {
  const { clear } = useClearLanguage();
  return (
    <>
      <section className="page-hero page-hero-archive" id="top">
        <PageHomeLink />
        <div className="section-label">Архив проектов</div>
        <h1>{clear ? "Проекты, которые завершились" : "Завершённые проекты остаются частью пути"}</h1>
        <p>{clear ? "Здесь мы сохраняем историю работы клуба." : "Здесь собраны завершённые программы, их результаты и опыт, который важен для дальнейшей работы клуба."}</p>
      </section>
      <section className="section project-index archive-index"><ProjectCards projects={archivedProjects} archived /></section>
      <section className="simple-cta"><p>Посмотрите проекты, которые работают сейчас.</p><Link className="button button-dark" href="/projects/">Действующие проекты <span>↗</span></Link></section>
    </>
  );
}
