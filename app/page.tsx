"use client";

import { FormEvent, useEffect, useState } from "react";

const projects = [
  { number: "01", title: "Дома лучше", text: "Учебное сопровождаемое проживание: взрослые с нарушениями развития учатся самостоятельной жизни в тренировочной квартире.", clear: "Мы учимся жить самостоятельно: готовить, убирать, делать покупки и планировать свой день.", tone: "coral" },
  { number: "02", title: "Туризм — я с вами", text: "Инклюзивные походы, знакомство с природой родного края и развитие навыков самостоятельности и работы в команде.", clear: "Мы ходим в походы. Учимся помогать друг другу и беречь природу.", tone: "mint" },
  { number: "03", title: "Смелое решение", text: "Знакомство детей и взрослых с ограниченными возможностями с доступными техническими видами спорта.", clear: "Дети и взрослые пробуют технические виды спорта. Специалисты помогают каждому участнику.", tone: "yellow" },
  { number: "04", title: "Творческая студия «ОСС»", text: "Место для свободного творчества: рисунок, керамика, панно и предметы интерьера из разных материалов.", clear: "В студии мы рисуем, лепим и делаем красивые вещи своими руками.", tone: "blue" },
  { number: "05", title: "RACE WHEELS", text: "Тренировки и гонки для детей, которые постоянно используют инвалидную коляску.", clear: "Дети на колясках тренируются и участвуют в гонках.", tone: "lavender" },
  { number: "06", title: "БуитПушка", text: "Тренировки по гонкам с препятствиями для детей и взрослых.", clear: "Мы тренируемся и проходим полосы препятствий.", tone: "orange" },
];

const registryDocs = [
  "Свидетельство о регистрации Минюст", "Выписка из ЕГРЮЛ", "Устав организации",
  "Приказ о вступлении в должность генерального директора", "Порядок и условия предоставления социальных услуг",
  "Тарифы на социальные услуги", "Образцы договоров", "Правила внутреннего распорядка для получателей услуг",
  "Политика обработки персональных данных",
];

const team = [
  { initials: "СМ", name: "Сергей Матвеев", role: "Генеральный директор", bio: "Педагог физической культуры и детский тренер. Инструктор «Гонки Героев» и OCR-атлет.", clear: "Руководит организацией. Проводит спортивные занятия.", tone: "team-coral" },
  { initials: "ИС", name: "Ирина Сухарникова", role: "Учредитель, координатор проектов", bio: "Социальный реабилитолог и инструктор по адаптивной физической культуре.", clear: "Придумывает и координирует проекты. Помогает участникам заниматься физкультурой.", tone: "team-yellow" },
  { initials: "КМ", name: "Ксения Матвеева", role: "Социальный педагог, тренер", bio: "Педагог физической культуры и спорта. Организатор инклюзивных походов и спортивных мероприятий.", clear: "Проводит спортивные занятия и помогает организовывать походы.", tone: "team-mint" },
  { initials: "ЕК", name: "Егор Кабайлов", role: "Инструктор по труду", bio: "Имеет высшее лингвистическое образование и профессиональную переподготовку по преподаванию английского языка.", clear: "Работает инструктором по труду.", tone: "team-blue" },
  { initials: "АО", name: "Александра Осипова", role: "Музыкальный педагог", bio: "Логопед-дефектолог, педагог дошкольного образования и артист оркестра.", clear: "Проводит музыкальные и творческие занятия.", tone: "team-lavender" },
  { initials: "АЗ", name: "Андрей Забавников", role: "Педагог-информатик", bio: "Системный администратор и руководитель клуба настольных игр.", clear: "Помогает работать с компьютером и проводит клуб настольных игр.", tone: "team-orange" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [clear, setClear] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const elements = document.querySelectorAll(
      ".section, .team-card, .project-card, .news-featured, .news-small, .documents a, .report-links a, .links-list a"
    );

    document.documentElement.classList.add("motion-ready");
    elements.forEach((element) => element.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={clear ? "site clear-mode" : "site"}>
      <header className="header">
        <a className="brand" href="#top" aria-label="Одной дорогой — на главную"><span className="brand-mark">ОД</span><span>Одной дорогой</span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>О нас</a><a href="#team" onClick={closeMenu}>Команда</a><a href="#projects" onClick={closeMenu}>Проекты</a>
          <a href="#news" onClick={closeMenu}>Новости</a><a href="#registry" onClick={closeMenu}>Соцреестр</a><a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Версия текста">
            <button className={!clear ? "active" : ""} onClick={() => setClear(false)}>Обычный</button>
            <button className={clear ? "active" : ""} onClick={() => setClear(true)}>Ясный язык</button>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Открыть меню"><span /><span /></button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Социальный клуб · Коломна</p>
          <h1 className="hero-title">{clear ? <><span className="hero-line">Мы идём</span><span className="hero-line hero-line-accent">одной дорогой</span></> : <><span className="hero-line">Помогаем жить</span><span className="hero-line hero-line-accent">активно и</span><span className="hero-line hero-line-shift">самостоятельно</span></>}</h1>
          <p className="hero-lead">{clear ? "Здесь люди с инвалидностью учатся новому, занимаются спортом, творчеством и встречаются с друзьями." : "Сопровождаем людей с инвалидностью и их близких: развиваем самостоятельность, создаём возможности для общения, спорта, творчества и обычной жизни."}</p>
          <div className="hero-buttons"><a className="button button-dark" href="#projects">{clear ? "Посмотреть занятия" : "Наши проекты"} <Arrow /></a><a className="button button-light" href="#feedback">{clear ? "Задать вопрос" : "Связаться с нами"}</a></div>
        </div>
        <div className="hero-photo" role="img" aria-label="Цветная композиция о равных возможностях">
          <div className="visual-words"><span>сопровождение</span><span>развитие</span><span>реализация</span><span>равные возможности</span></div>
          <div className="photo-note"><strong>Нам с вами по пути</strong><span>{clear ? "Мы рядом и готовы помочь" : "С 2019 года в городском округе Коломна"}</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Направления работы">
        <div className="ticker-track">
          {[0, 1].map((copy) => <div className="ticker-group" aria-hidden={copy === 1} key={copy}><span>сопровождение</span><i>•</i><span>самостоятельность</span><i>•</i><span>спорт</span><i>•</i><span>творчество</span><i>•</i><span>общение</span><i>•</i></div>)}
        </div>
      </section>

      <section className="section intro" id="about">
        <div className="section-label"><span>01</span> О нас</div>
        <div className="intro-main"><h2>{clear ? "Клуб, где можно быть собой" : "Обычная жизнь — с нужной поддержкой"}</h2><p>{clear ? "«Одной дорогой» — это социальный клуб в Коломне. Мы работаем с 2019 года. Наши специалисты помогают детям и взрослым с инвалидностью." : "АНО СК «Одной дорогой» создана специалистами по реабилитации и социальной адаптации. Мы помогаем детям и взрослым с инвалидностью учиться новому, находить друзей, раскрывать способности и становиться самостоятельнее."}</p><a className="text-link" href="#contacts">Команда и контакты <Arrow /></a></div>
        <div className="fact-card"><span className="fact-number">2019</span><span>{clear ? "год открытия клуба" : "год основания организации"}</span></div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading">
          <div className="section-label"><span>02</span> Команда</div>
          <h2>{clear ? "Люди, которые работают в клубе" : "Люди, которые идут рядом"}</h2>
        </div>
        <div className="team-grid">
          {team.map((person, index) => (
            <article className={`team-card ${person.tone}`} key={person.name}>
              <div className="team-top"><span className="team-index">{String(index + 1).padStart(2, "0")}</span><span className="team-avatar">{person.initials}</span></div>
              <div><p className="team-role">{person.role}</p><h3>{person.name}</h3><p className="team-bio">{clear ? person.clear : person.bio}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading"><div className="section-label"><span>03</span> Проекты</div><h2>{clear ? "Что мы делаем" : "Разные маршруты к самостоятельности"}</h2></div>
        <div className="projects-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{clear ? project.clear : project.text}</p></div><a href="#feedback" aria-label={`Узнать подробнее о проекте ${project.title}`}>Подробнее <Arrow /></a></article>)}</div>
      </section>

      <section className="section news-section" id="news">
        <div className="section-heading inline-heading"><div><div className="section-label"><span>04</span> Новости</div><h2>{clear ? "Что нового в клубе" : "События и живые истории"}</h2></div><a className="text-link" href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">Все новости во ВКонтакте <Arrow /></a></div>
        <div className="news-grid">
          <article className="news-featured"><div className="news-image"><span>Жизнь клуба</span></div><div className="news-copy"><span className="news-meta">Новая публикация</span><h3>{clear ? "Здесь будет главная новость" : "Здесь появится главная история месяца"}</h3><p>{clear ? "Мы добавим короткий текст и фотографию." : "Блок готов для новостей о занятиях, событиях и достижениях участников."}</p></div></article>
          <article className="news-small"><span className="news-meta">Анонс</span><h3>{clear ? "Ближайшие занятия" : "Расписание ближайших открытых событий"}</h3><p>{clear ? "Здесь можно узнать дату, время и место." : "Короткий анонс с датой, местом и понятным способом записаться."}</p><a href="#feedback">Узнать первым <Arrow /></a></article>
          <article className="news-small dark-card"><span className="news-meta">Сообщество</span><h3>{clear ? "Больше новостей — в нашей группе" : "Следите за ежедневной жизнью клуба"}</h3><a href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">Перейти во ВКонтакте <Arrow /></a></article>
        </div>
      </section>

      <section className="section registry-section" id="registry">
        <div className="registry-intro"><div className="section-label light-label"><span>05</span> Соцреестр</div><h2>{clear ? "Документы организации" : "Открытая информация поставщика социальных услуг"}</h2><p>{clear ? "Здесь собраны документы. Нажмите на название, чтобы открыть файл." : "Обязательные сведения, нормативные документы, отчётность и информация о предоставляемых социальных услугах — в одном структурированном разделе."}</p><a className="button button-white" href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Открыть полный реестр <Arrow /></a></div>
        <div className="registry-content"><div className="registry-stats"><div><strong>6</strong><span>мест надомного обслуживания</span></div><div><strong>2</strong><span>формы социального обслуживания</span></div></div><div className="documents">{registryDocs.map((doc, index) => <a href="https://onewaysc.ru/" target="_blank" rel="noreferrer" key={doc}><span>{String(index + 1).padStart(2, "0")}</span><strong>{clear && index === 0 ? "Документ о регистрации организации" : doc}</strong><Arrow /></a>)}</div><div className="registry-links"><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Все сведения по статье 13 закона № 442-ФЗ <Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Перечень и тарифы социальных услуг <Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Порядок подачи жалобы <Arrow /></a></div></div>
      </section>

      <section className="section reports-section" id="reports">
        <div className="section-label"><span>06</span> Отчётность</div><div className="reports-copy"><h2>{clear ? "Как работал клуб" : "Публично рассказываем о результатах"}</h2><p>{clear ? "В отчётах написано, что мы сделали за год и на что потратили деньги." : "Публичные отчёты помогают увидеть работу организации в цифрах, историях и результатах."}</p></div>
        <div className="report-links"><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2024</strong><Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2023</strong><Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer"><span>Отчёты в Минюст</span><strong>2020—2024</strong><Arrow /></a></div>
      </section>

      <section className="section reviews-section" id="reviews"><div className="section-label"><span>07</span> Отзывы</div><div className="review-stage"><span className="quote-mark">“</span><blockquote>{clear ? "Скоро здесь будут отзывы участников клуба и их близких." : "Этот раздел станет местом для подлинных голосов участников, родителей и партнёров организации."}</blockquote><p>Отзывы будут добавлены после согласования публикации.</p></div></section>

      <section className="section feedback-section" id="feedback">
        <div className="feedback-copy"><div className="section-label"><span>08</span> Обратная связь</div><h2>{clear ? "Напишите нам" : "Давайте обсудим, чем мы можем помочь"}</h2><p>{clear ? "Заполните форму. Мы ответим вам по телефону или электронной почте." : "Задайте вопрос о программах, социальных услугах или сотрудничестве. Мы свяжемся с вами удобным способом."}</p></div>
        {sent ? <div className="success-message" role="status"><strong>Спасибо!</strong><span>{clear ? "Мы получили ваше сообщение." : "Форма в макете работает. На следующем этапе подключим отправку сообщений."}</span><button className="text-link" onClick={() => setSent(false)}>Отправить ещё одно сообщение</button></div> : <form className="feedback-form" onSubmit={submit}><label>Как к вам обращаться?<input name="name" placeholder="Имя" required /></label><label>Как с вами связаться?<input name="contact" placeholder="Телефон или электронная почта" required /></label><label>Ваш вопрос<textarea name="message" placeholder="Напишите несколько слов" rows={4} required /></label><label className="consent"><input type="checkbox" required /> <span>Я согласен(на) на обработку персональных данных</span></label><button className="button button-dark" type="submit">Отправить <Arrow /></button></form>}
      </section>

      <section className="section links-section" id="links"><div className="section-label"><span>09</span> Полезные ссылки</div><div className="links-list"><a href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/" target="_blank" rel="noreferrer">Фонд президентских грантов <Arrow /></a><a href="https://msr.mosreg.ru/" target="_blank" rel="noreferrer">Министерство социального развития Московской области <Arrow /></a><a href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">Сообщество «Одной дорогой» <Arrow /></a></div></section>

      <footer className="footer" id="contacts"><div className="footer-title"><span className="brand-mark inverse">ОД</span><h2>{clear ? "Мы рядом" : "Нам с вами по пути"}</h2></div><div className="footer-grid"><div><span>Позвонить</span><a href="tel:+79774457314">+7 977 445-73-14</a></div><div><span>Написать</span><a href="mailto:onewaysc@yandex.ru">onewaysc@yandex.ru</a></div><div><span>Прийти</span><p>Коломна, ул. Астахова, д. 2, помещение 19</p></div><div><span>Время работы</span><p>Ежедневно, 10:00—18:00</p></div></div><div className="footer-bottom"><span>© АНО СК «Одной дорогой»</span><a href="#registry">Документы и политика конфиденциальности</a><a href="#top">Наверх ↑</a></div></footer>
    </main>
  );
}
