"use client";

import Link from "next/link";
import Image from "next/image";
import { activeProjects, partners, team } from "./content";
import { ProjectCards } from "./project-cards";
import { TeamCards } from "./team-cards";
import { useClearLanguage } from "./site-shell";

export default function Home() {
  const { clear } = useClearLanguage();
  const startPaths = [
    {
      href: "/projects/",
      title: clear ? "Посмотреть занятия" : "Найти занятия",
      description: clear ? "Посмотрите, какие занятия есть в клубе." : "Действующие проекты для детей и взрослых: повседневные навыки, спорт, творчество и общение.",
      action: clear ? "Открыть занятия" : "Посмотреть проекты",
      tone: "coral",
    },
    {
      href: "/contacts/#write",
      title: "Задать вопрос",
      description: clear ? "Напишите или позвоните. Мы поможем выбрать." : "Если вы не знаете, с чего начать, команда клуба поможет сориентироваться.",
      action: clear ? "Написать нам" : "Перейти к контактам",
      tone: "mint",
    },
    {
      href: "/help/",
      title: "Помочь клубу",
      description: clear ? "Можно стать волонтёром или предложить помощь." : "Стать волонтёром, предложить партнёрство или другой полезный формат поддержки.",
      action: "Узнать, как помочь",
      tone: "yellow",
    },
    {
      href: "/registry/",
      title: "Найти документы",
      description: clear ? "Здесь есть документы и отчёты организации." : "Соцреестр, обязательные сведения, отчёты и полезные ссылки собраны отдельно.",
      action: "Открыть документы",
      tone: "lavender",
    },
  ];

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">АНО СК «Одной дорогой» · Коломна</p>
          <h1><span>Социальный</span><span>клуб для людей</span><span>с инвалидностью</span><span className="accent">в Коломне</span></h1>
          <p className="hero-lead">{clear ? "Здесь дети и взрослые с инвалидностью учатся новому, общаются, занимаются спортом и творчеством. Мы поможем выбрать занятия." : "Помогаем детям и взрослым с инвалидностью осваивать повседневные навыки, общаться, заниматься спортом и творчеством. Подскажем, какой проект подойдёт."}</p>
          <div className="button-row"><Link className="button button-dark hero-projects-button" href="/projects/">{clear ? "Выбрать занятия" : "Посмотреть проекты"} <span>↗</span></Link><Link className="button button-light" href="/contacts/#write">{clear ? "Написать нам" : "Задать вопрос"}</Link></div>
        </div>
        <div className="hero-poster" aria-label="Навыки для жизни, общение, спорт и творчество">
          <div className="poster-orbit orbit-one" /><div className="poster-orbit orbit-two" />
          <div className="poster-words"><span>навыки для жизни</span><span>общение</span><span>спорт и движение</span><span>творчество</span></div>
          <div className="poster-note"><b className="accent-script">{clear ? "Мы рядом" : "Нам с вами по пути"}</b><span>{clear ? "Мы готовы помочь" : "Работаем в городском округе Коломна"}</span></div>
        </div>
      </section>

      <section className="section start-section" id="start">
        <div className="start-heading">
          <div className="section-label">С чего начать</div>
          <div><h2>{clear ? "Что вы хотите сделать?" : "Выберите, что вам нужно сейчас"}</h2><p>{clear ? "Нажмите на подходящий вариант." : "Необязательно разбираться в структуре организации. Начните со своей задачи — мы покажем следующий шаг."}</p></div>
        </div>
        <div className="start-grid">
          {startPaths.map((path) => (
            <Link className={`start-card start-card-${path.tone}`} href={path.href} key={path.href}>
              <span>{path.title}</span>
              <p>{path.description}</p>
              <strong>{path.action} <b aria-hidden="true">→</b></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-label">О клубе</div>
        <div className="about-copy">
          <h2>{clear ? "Место, где можно быть собой" : "Обычная жизнь — с нужной поддержкой"}</h2>
          <p>{clear ? "«Одной дорогой» — социальный клуб в Коломне. Специалисты помогают детям и взрослым с инвалидностью." : "Организация создана специалистами по реабилитации и социальной адаптации. Мы помогаем детям и взрослым учиться новому, находить друзей, раскрывать способности и становиться самостоятельнее."}</p>
        </div>
        <div className="about-fact"><strong>2019</strong><span>{clear ? "клуб начал работать" : "год основания организации"}</span></div>
      </section>

      <section className="section projects-section">
        <div className="section-heading"><div className="section-label">Проекты</div><div><h2>{clear ? "Что мы делаем" : "Чтобы в жизни было больше возможностей"}</h2><p>{clear ? "Занятия помогают учиться, общаться, заниматься спортом и творчеством." : "Действующие программы соединяют повседневные навыки, движение, творчество, общение и опыт самостоятельного выбора."}</p></div></div>
        <ProjectCards projects={activeProjects} compact />
        <div className="section-end"><Link className="button button-light" href="/projects/">Все действующие проекты <span>↗</span></Link><Link className="quiet-link" href="/projects/archive/">Архив проектов →</Link></div>
      </section>

      <section className="section outcomes-section">
        <div className="outcomes-intro"><div className="section-label light">Что меняется</div><h2>{clear ? "Каждый учится в своём темпе" : "Самостоятельность складывается из обычных дел"}</h2></div>
        <div className="outcome-list">
          <article><span>01</span><h3>{clear ? "Заботиться о себе" : "Повседневная жизнь"}</h3><p>{clear ? "Готовить, убирать и делать покупки." : "Навыки, которые помогают принимать решения и справляться с ежедневными задачами."}</p></article>
          <article><span>02</span><h3>{clear ? "Быть вместе" : "Общение и отношения"}</h3><p>{clear ? "Знакомиться, говорить и помогать другим." : "Возможность встречаться, договариваться, дружить и быть частью сообщества."}</p></article>
          <article><span>03</span><h3>{clear ? "Пробовать новое" : "Движение и творчество"}</h3><p>{clear ? "Заниматься спортом, ходить в походы и творить." : "Пространство для интереса, усилия, собственного выбора и нового опыта."}</p></article>
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading"><div className="section-label">Команда</div><div><h2>{clear ? "Люди, которые работают в клубе" : "Люди, которые идут рядом"}</h2><p>{clear ? "Специалисты проводят занятия и помогают участникам." : "Команда соединяет опыт в педагогике, социальной реабилитации, спорте, творчестве и сопровождаемом проживании."}</p></div></div>
        <TeamCards people={team} />
      </section>

      <section className="section openness-section">
        <div className="openness-card">
          <span className="section-label">Открытость</span>
          <h2>{clear ? "Документы организации" : "Важная информация — отдельно и понятно"}</h2>
          <p>{clear ? "На отдельной странице есть документы и сведения о социальных услугах." : "Сведения для получателей социальных услуг, документы и отчётность собраны на отдельной странице соцреестра."}</p>
          <Link className="button button-dark" href="/registry/">Перейти в соцреестр <span>↗</span></Link>
        </div>
        <a className="community-card" id="news" href="https://vk.ru/onewaykolomna" target="_blank" rel="noreferrer">
          <span className="section-label">Новости и события</span><h3>{clear ? "Что нового в клубе" : "Новости и ближайшие события"}</h3><p>{clear ? "Там мы рассказываем о занятиях, встречах и новых событиях." : "Актуальные новости, фотографии, анонсы и информация о ближайших событиях публикуются в сообществе организации."}</p><b>Перейти в сообщество ↗</b>
        </a>
      </section>

      <section className="section partners-section">
        <div className="section-heading partners-heading"><div className="section-label">Нам доверяют</div><div><h2>{clear ? "Партнёры клуба" : "Поддержка превращает идеи в возможности"}</h2></div></div>
        <ul className="partner-list">
          {partners.map((partner) => (
            <li className={partner.dark ? "partner-item partner-item-dark" : "partner-item"} key={partner.name}>
              {partner.logo ? (
                <div className="partner-logo" aria-hidden="true">
                  <Image src={partner.logo} alt="" fill sizes="(max-width: 760px) 70vw, (max-width: 1180px) 35vw, 18vw" />
                </div>
              ) : (
                <span className="partner-text-mark">Общественная организация</span>
              )}
              <strong>{partner.name}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="support-banner">
        <div><span className="section-label">Как помочь</span><h2>{clear ? "Вы можете быть рядом" : "Одной дорогой идут вместе"}</h2><p>{clear ? "Можно стать волонтёром или предложить помощь клубу." : "Расскажите о проектах, предложите партнёрство или присоединитесь как волонтёр."}</p></div>
        <Link className="round-link round-link-large" href="/help/" aria-label="Узнать, как помочь">↗</Link>
      </section>
    </>
  );
}
