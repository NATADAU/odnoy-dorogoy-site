"use client";

import Link from "next/link";
import { archivedProjects } from "../../content";
import { ProjectCards } from "../../project-cards";
import { useClearLanguage } from "../../site-shell";

export default function ArchivePage() {
  const { clear } = useClearLanguage();
  return (
    <>
      <section className="page-hero page-hero-archive" id="top">
        <div className="section-label">Архив проектов</div>
        <h1>{clear ? "Проекты, которые завершились" : "Завершённые проекты остаются частью пути"}</h1>
        <p>{clear ? "Здесь мы сохраняем историю работы клуба." : "Архив отделён от действующих программ: он сохраняет результаты и опыт, но не создаёт впечатления, что запись ещё открыта."}</p>
      </section>
      <section className="section project-index archive-index"><ProjectCards projects={archivedProjects} archived /></section>
      <section className="simple-cta"><p>{clear ? "Посмотрите проекты, которые работают сейчас." : "Вернуться к актуальным возможностям клуба."}</p><Link className="button button-dark" href="/projects/">Действующие проекты <span>↗</span></Link></section>
    </>
  );
}
