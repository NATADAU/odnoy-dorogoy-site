"use client";

import Link from "next/link";
import { activeProjects, partners, team } from "./content";
import { ProjectCards } from "./project-cards";
import { TeamCards } from "./team-cards";
import { useClearLanguage } from "./site-shell";

export default function Home() {
  const { clear } = useClearLanguage();

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">АНО СК «Одной дорогой» · Коломна</p>
          <h1>{clear ? <><span>Вместе</span><span className="accent">проще</span><span>жить самостоятельно</span></> : <><span>Активная жизнь.</span><span className="accent">Больше</span><span>самостоятельности.</span></>}</h1>
          <p className="hero-lead">{clear ? "Здесь люди с инвалидностью учатся новому, занимаются спортом и творчеством, встречаются с друзьями." : "Сопровождаем людей с инвалидностью и их близких. Создаём возможности для общения, спорта, творчества и обычной жизни."}</p>
          <div className="button-row"><Link className="button button-dark" href="/projects/">{clear ? "Посмотреть занятия" : "Наши проекты"} <span>↗</span></Link><Link className="button button-light" href="/contacts/">{clear ? "Задать вопрос" : "Связаться с нами"}</Link></div>
        </div>
        <div className="hero-poster" aria-label="Сопровождение, развитие, реализация и равные возможности">
          <div className="poster-orbit orbit-one" /><div className="poster-orbit orbit-two" />
          <div className="poster-words"><span>сопровождение</span><span>развитие</span><span>реализация</span><span>равные возможности</span></div>
          <div className="poster-note"><b className="accent-script">{clear ? "Мы рядом" : "Нам с вами по пути"}</b><span>{clear ? "Мы готовы помочь" : "Работаем в городском округе Коломна"}</span></div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-label">О клубе</div>
        <div className="about-copy">
          <h2>{clear ? "Место, где можно быть собой" : "Обычная жизнь — с нужной поддержкой"}</h2>
          <p>{clear ? "«Одной дорогой» — социальный клуб в Коломне. Специалисты помогают детям и взрослым с инвалидностью." : "Организация создана специалистами по реабилитации и социальной адаптации. Мы помогаем детям и взрослым учиться новому, находить друзей, раскрывать способности и становиться самостоятельнее."}</p>
        </div>
        <div className="about-fact"><strong>2019</strong><span>{clear ? "клуб начал работать" : "год основания организации"}</span></div>
      </section>

      <section className="section projects-section">
        <div className="section-heading"><div className="section-label">Проекты</div><div><h2>{clear ? "Что мы делаем" : "Чтобы в жизни было больше возможностей"}</h2><p>{clear ? "Занятия помогают учиться, общаться, заниматься спортом и творчеством." : "Действующие программы соединяют повседневные навыки, движение, творчество, общение и опыт самостоятельного выбора."}</p></div></div>
        <ProjectCards projects={activeProjects} compact />
        <div className="section-end"><Link className="button button-light" href="/projects/">Все действующие проекты <span>↗</span></Link><Link className="quiet-link" href="/projects/archive/">Архив проектов →</Link></div>
      </section>

      <section className="section outcomes-section">
        <div className="outcomes-intro"><div className="section-label light">Что меняется</div><h2>{clear ? "Каждый учится в своём темпе" : "Самостоятельность складывается из обычных дел"}</h2></div>
        <div className="outcome-list">
          <article><span>01</span><h3>{clear ? "Заботиться о себе" : "Повседневная жизнь"}</h3><p>{clear ? "Готовить, убирать и делать покупки." : "Навыки, которые помогают принимать решения и справляться с ежедневными задачами."}</p></article>
          <article><span>02</span><h3>{clear ? "Быть вместе" : "Общение и отношения"}</h3><p>{clear ? "Знакомиться, говорить и помогать другим." : "Возможность встречаться, договариваться, дружить и быть частью сообщества."}</p></article>
          <article><span>03</span><h3>{clear ? "Пробовать новое" : "Движение и творчество"}</h3><p>{clear ? "Заниматься спортом, ходить в походы и творить." : "Пространство для интереса, усилия, собственного выбора и нового опыта."}</p></article>
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading"><div className="section-label">Команда</div><div><h2>{clear ? "Люди, которые работают в клубе" : "Люди, которые идут рядом"}</h2><p>{clear ? "Специалисты проводят занятия и помогают участникам." : "Команда соединяет опыт в педагогике, социальной реабилитации, спорте, творчестве и сопровождаемом проживании."}</p></div></div>
        <TeamCards people={team} />
      </section>

      <section className="section openness-section">
        <div className="openness-card">
          <span className="section-label">Открытость</span>
          <h2>{clear ? "Документы организации" : "Важная информация — отдельно и понятно"}</h2>
          <p>{clear ? "На отдельной странице есть документы и сведения о социальных услугах." : "Сведения для получателей социальных услуг, документы и отчётность собраны на отдельной странице соцреестра."}</p>
          <Link className="button button-dark" href="/registry/">Перейти в соцреестр <span>↗</span></Link>
        </div>
        <a className="community-card" href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">
          <span className="section-label">Новости</span><h3>{clear ? "Что нового в клубе" : "Жизнь клуба — во ВКонтакте"}</h3><p>{clear ? "Там мы рассказываем о занятиях и встречах." : "Актуальные события, фотографии и анонсы публикуем в сообществе организации."}</p><b>Перейти в сообщество ↗</b>
        </a>
      </section>

      <section className="section partners-section">
        <div className="section-heading partners-heading"><div className="section-label">Партнёры</div><div><h2>{clear ? "Те, кто помогает клубу" : "Поддержка превращает идеи в возможности"}</h2></div></div>
        <div className="partner-list">{partners.map((partner, index) => <a href={partner.href} target="_blank" rel="noreferrer" key={partner.name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{partner.name}</strong><b>↗</b></a>)}</div>
      </section>

      <section className="support-banner">
        <div><span className="section-label">Как помочь</span><h2>{clear ? "Вы можете быть рядом" : "Одной дорогой идут вместе"}</h2><p>{clear ? "Можно стать волонтёром или предложить помощь клубу." : "Расскажите о проектах, предложите партнёрство или присоединитесь как волонтёр."}</p></div>
        <Link className="round-link round-link-large" href="/help/" aria-label="Узнать, как помочь">↗</Link>
      </section>
    </>
  );
}
