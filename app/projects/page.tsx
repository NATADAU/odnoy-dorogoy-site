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
        <p>{clear ? "Здесь можно узнать, чем занимаются участники клуба." : "Каждый проект даёт собственный маршрут к общению, самостоятельности, движению и творчеству."}</p>
      </section>
      <section className="section project-index"><ProjectCards projects={activeProjects} /></section>
      <section className="archive-teaser"><div><span className="section-label">История клуба</span><h2>{clear ? "Завершённые проекты" : "Сохраняем опыт, на котором выросли"}</h2><p>{clear ? "В архиве есть проекты, которые уже закончились." : "Завершённые программы остаются частью истории организации и помогают видеть пройденный путь."}</p></div><Link className="button button-light" href="/projects/archive/">Открыть архив <span>↗</span></Link></section>
    </>
  );
}
