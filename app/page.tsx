"use client";

import { cloneElement, FormEvent, isValidElement, ReactElement, ReactNode, useEffect, useState } from "react";

function protectShortWords(text: string) {
  const shortWords = /(^|[\s\u00a0])([А-Яа-яЁё]{1,3})\s+(?=[А-Яа-яЁёA-Za-z«“])/g;
  let result = text;
  let previous = "";
  while (previous !== result) {
    previous = result;
    result = result.replace(shortWords, "$1$2\u00a0");
  }
  return result;
}

function typographize(node: ReactNode): ReactNode {
  if (typeof node === "string") return protectShortWords(node);
  if (Array.isArray(node)) return node.map(typographize);
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children !== undefined) {
    return cloneElement(node, undefined, typographize(node.props.children));
  }
  return node;
}

const projects = [
  { number: "01", title: "Дома лучше", text: "Учебное сопровождаемое проживание: взрослые с нарушениями развития учатся самостоятельной жизни в тренировочной квартире.", description: "Программа сопровождаемого проживания в тренировочных квартирах, где взрослые с нарушениями развития при поддержке социальных работников учатся самостоятельной жизни. Сопровождаемое проживание направлено на социальную адаптацию и является альтернативой государственным закрытым учреждениям социальной защиты.", clear: "Мы учимся жить самостоятельно: готовить, убирать, делать покупки и планировать свой день.", clearDescription: "Взрослые люди живут в тренировочной квартире. Рядом есть специалисты. Они помогают учиться готовить, убирать, делать покупки и планировать дела.", points: ["Взрослые с нарушениями развития", "Тренировочная квартира", "Поддержка социальных работников"], tone: "coral" },
  { number: "02", title: "Туризм — я с вами", text: "Инклюзивные походы, знакомство с природой родного края и развитие навыков самостоятельности и работы в команде.", description: "Инклюзивные занятия по туризму включают походы выходного дня, знакомство с природой родного края и уроки экологии. Проект помогает развивать самостоятельность, коммуникацию и умение работать в команде, отдыхать и вести активный образ жизни.", clear: "Мы ходим в походы. Учимся помогать друг другу и беречь природу.", clearDescription: "Мы ходим в походы выходного дня, знакомимся с природой и изучаем экологию. В походе мы учимся быть самостоятельными и действовать вместе.", points: ["Походы выходного дня", "Уроки экологии", "Самостоятельность и работа в команде"], tone: "mint" },
  { number: "03", title: "Смелое решение", text: "Знакомство детей и взрослых с ограниченными возможностями с доступными техническими видами спорта.", description: "Проект знакомит детей и взрослых с ограниченными возможностями, в том числе с ментальными нарушениями, с техническими видами спорта. Программа состоит из нескольких ступеней и доступна для всех слушателей.", clear: "Дети и взрослые пробуют технические виды спорта. Специалисты помогают каждому участнику.", clearDescription: "Дети и взрослые знакомятся с техническими видами спорта. Программа состоит из нескольких ступеней.", points: ["Дети и взрослые", "Технические виды спорта", "Несколько ступеней программы"], tone: "yellow" },
  { number: "04", title: "Творческая студия «ОСС»", text: "Место для свободного творчества: рисунок, керамика, панно и предметы интерьера из разных материалов.", description: "Клуб для развития и реализации творческих способностей и свободного самовыражения. Участники работают с разными материалами, создают предметы интерьера, рисунки и картины, керамические скульптуры и панно.", clear: "В студии мы рисуем, лепим и делаем красивые вещи своими руками.", clearDescription: "В студии можно рисовать, лепить и работать с разными материалами. Участники делают картины, керамику, панно и предметы для интерьера.", points: ["Свободное творчество", "Разные материалы", "Картины, керамика и панно"], tone: "blue" },
  { number: "05", title: "RACE WHEELS", text: "Тренировки и гонки для детей, которые постоянно используют инвалидную коляску.", description: "Проект для детей, которые постоянно используют инвалидную коляску. В программу входят организация тренировок и проведение гонок на колясках различного типа.", clear: "Дети на колясках тренируются и участвуют в гонках.", clearDescription: "Дети, которые постоянно пользуются коляской, тренируются и участвуют в гонках на разных колясках.", points: ["Дети, использующие инвалидную коляску", "Тренировки", "Гонки на колясках разных типов"], tone: "lavender" },
  { number: "06", title: "БуитПушка", text: "Тренировки по гонкам с препятствиями для детей и взрослых.", description: "Тренировки по гонкам с препятствиями для детей и взрослых.", clear: "Мы тренируемся и проходим полосы препятствий.", clearDescription: "Дети и взрослые тренируются и учатся проходить препятствия.", points: ["Дети и взрослые", "Гонки с препятствиями", "Тренировки"], tone: "orange" },
];

const registryDocs = [
  "Свидетельство о регистрации Минюст", "Выписка из ЕГРЮЛ", "Устав организации",
  "Приказ о вступлении в должность генерального директора", "Порядок и условия предоставления социальных услуг",
  "Тарифы на социальные услуги", "Образцы договоров", "Правила внутреннего распорядка для получателей услуг",
  "Политика обработки персональных данных",
];

const team = [
  { name: "Сергей Григорьевич Матвеев", role: "Генеральный директор", lead: "Спорт как путь к самостоятельности и уверенности в своих силах.", bio: ["Высшее педагогическое образование: педагог физической культуры и детский тренер со стажем. Инструктор «Гонки Героев» и OCR-атлет.", "Имеет опыт проведения спортивных и туристических мероприятий. Дважды лауреат премии губернатора «Наше Подмосковье».", "Имеет опыт работы с инклюзией и проведения спортивных мероприятий для людей с ограничениями здоровья и инвалидностью."], clear: "Руководит организацией. Проводит спортивные занятия и мероприятия.", areas: ["Руководство организацией", "Спортивные и туристические мероприятия", "Инклюзивный спорт"], tone: "team-coral" },
  { name: "Ирина Александровна Сухарникова", role: "Учредитель, координатор проектов", lead: "Социальная реабилитация, проекты и адаптивная физическая культура.", bio: ["Высшее экономическое и педагогическое образование.", "Социальный реабилитолог, инструктор по адаптивной физической культуре.", "Координатор проектов организации."], clear: "Придумывает и координирует проекты. Помогает участникам заниматься физкультурой.", areas: ["Координация проектов", "Социальная реабилитация", "Адаптивная физкультура"], tone: "team-yellow" },
  { name: "Ксения Анатольевна Матвеева", role: "Социальный педагог, тренер", lead: "Спорт, инклюзивные походы и умение действовать вместе.", bio: ["Высшее педагогическое образование: педагог физической культуры и спорта, информатики и математики. Вожатый со стажем, тренер по гонкам с препятствиями, социальный педагог.", "Имеет опыт работы с инклюзией. Организатор инклюзивных туристических походов и спортивных мероприятий для людей с ограничениями здоровья и инвалидностью."], clear: "Проводит спортивные занятия и помогает организовывать походы.", areas: ["Физическая культура и спорт", "Инклюзивные туристические походы", "Гонки с препятствиями"], tone: "team-mint" },
  { name: "Егор Сергеевич Кабайлов", role: "Инструктор по труду", lead: "Трудовые занятия и поддержка в освоении новых навыков.", bio: ["Высшее лингвистическое образование: бакалавриат и магистратура по профилю «Лингвистика» в Государственном социально-гуманитарном университете.", "Профессиональная переподготовка по программе «Содержание и методика преподавания английского языка в средней школе». Прошёл курс РБОО «Центр лечебной педагогики» «Работа с агрессивным поведением людей с тяжёлыми и множественными нарушениями развития»."], clear: "Работает инструктором по труду. Помогает осваивать новые навыки.", areas: ["Трудовые занятия", "Педагогическая работа", "Поддержка людей с ТМНР"], tone: "team-blue" },
  { name: "Александра Олеговна Осипова", role: "Музыкальный педагог", lead: "Музыка, речь и творчество как пространство для развития.", bio: ["Высшее педагогическое образование: логопед-дефектолог, педагог дошкольного образования.", "Среднее специальное образование: артист оркестра (скрипка). Педагог групп детей с тяжёлыми множественными нарушениями развития, руководитель творческой студии."], clear: "Проводит музыкальные и творческие занятия. Работает с детьми с тяжёлыми нарушениями развития.", areas: ["Музыкальные занятия", "Логопедическая и дошкольная педагогика", "Творческая студия"], tone: "team-lavender" },
  { name: "Андрей Валерьевич Забавников", role: "Педагог-информатик, системный администратор", lead: "Цифровые навыки, общение и настольные игры.", bio: ["Среднее педагогическое образование: педагог информатики.", "Системный администратор. Руководитель клуба настольных игр."], clear: "Помогает работать с компьютером и проводит клуб настольных игр.", areas: ["Компьютерные занятия", "Системное администрирование", "Клуб настольных игр"], tone: "team-orange" },
];

type TeamMember = (typeof team)[number];
type Project = (typeof projects)[number];

function ProjectProfile({ project, clear, onClose }: { project: Project; clear: boolean; onClose: () => void }) {
  return typographize(
    <div className="project-dialog-backdrop" role="presentation" onClick={onClose}>
      <section className={`project-dialog ${project.tone}`} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={(event) => event.stopPropagation()}>
        <div className="project-dialog-top"><span>Проект клуба</span><button type="button" onClick={onClose}>Закрыть <span aria-hidden="true">×</span></button></div>
        <div className="project-dialog-grid">
          <div className="project-dialog-title"><span>{clear ? "Проект клуба" : "Подробнее о проекте"}</span><h3 id="project-dialog-title">{project.title}</h3></div>
          <div className="project-dialog-copy"><p>{clear ? project.clearDescription : project.description}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul><a className="button button-dark" href="#feedback" onClick={onClose}>{clear ? "Спросить об участии" : "Узнать об участии"} <Arrow /></a></div>
        </div>
      </section>
    </div>
  ) as ReactElement;
}

function TeamProfile({ person, index, clear, onClose, variant }: { person: TeamMember; index: number; clear: boolean; onClose: () => void; variant: "desktop" | "mobile" }) {
  return typographize(
    <div className={`team-profile team-profile-${variant} ${person.tone}`} id={`team-profile-${variant}-${index}`} role={variant === "mobile" ? "dialog" : undefined} aria-modal={variant === "mobile" ? true : undefined} aria-label={`Профиль: ${person.name}`}>
      <div className="team-profile-top"><span>Профиль специалиста</span><button type="button" onClick={onClose}>Закрыть <span aria-hidden="true">×</span></button></div>
      <div className="team-profile-grid">
        <div className="team-profile-identity"><p>{person.role}</p><h3>{person.name}</h3><strong>{clear ? person.clear : person.lead}</strong></div>
        <div className="team-profile-details">
          {!clear && <div><span>Образование и опыт</span>{person.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
          <div><span>{clear ? "Что делает" : "Направления работы"}</span><ul>{person.areas.map((area) => <li key={area}>{area}</li>)}</ul></div>
        </div>
      </div>
    </div>
  ) as ReactElement;
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [clear, setClear] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activePerson, setActivePerson] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
  useEffect(() => {
    const closeProfile = (event: KeyboardEvent) => { if (event.key === "Escape") { setActivePerson(null); setActiveProject(null); } };
    window.addEventListener("keydown", closeProfile);
    return () => window.removeEventListener("keydown", closeProfile);
  }, []);
  useEffect(() => {
    const mobileTeamProfileOpen = activePerson !== null && window.matchMedia("(max-width: 720px)").matches;
    if (activeProject === null && !mobileTeamProfileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [activePerson, activeProject]);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  const closeMenu = () => setMenuOpen(false);

  return typographize(
    <main className={clear ? "site clear-mode" : "site"}>
      <header className="header">
        <a className="brand" href="#top" aria-label="Одной дорогой — на главную"><span className="brand-mark">ОД</span><span>Одной дорогой</span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>О нас</a><a href="#projects" onClick={closeMenu}>Проекты</a><a href="#team" onClick={closeMenu}>Команда</a>
          <a href="#news" onClick={closeMenu}>Новости</a><a href="#registry" onClick={closeMenu}>Документы</a><a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Версия текста">
            <button className={!clear ? "active" : ""} onClick={() => setClear(false)}>Обычный</button>
            <button className={clear ? "active" : ""} onClick={() => setClear(true)}>Ясный язык</button>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}><span /><span /></button>
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
          <div className="photo-note"><strong>Нам с вами по пути</strong><span>{clear ? "Мы рядом и готовы помочь" : "Работаем в городском округе Коломна"}</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Направления работы">
        <div className="ticker-track">
          {[0, 1].map((copy) => <div className="ticker-group" aria-hidden={copy === 1} key={copy}><span>сопровождение</span><i>•</i><span>самостоятельность</span><i>•</i><span>спорт</span><i>•</i><span>творчество</span><i>•</i><span>общение</span><i>•</i></div>)}
        </div>
      </section>

      <section className="section intro intro-compact" id="about">
        <div className="section-label section-label-muted">О клубе</div>
        <div className="intro-main"><h2>{clear ? "Клуб, где можно быть собой" : "Обычная жизнь — с нужной поддержкой"}</h2><p>{clear ? "«Одной дорогой» — это социальный клуб в Коломне. Наши специалисты помогают детям и взрослым с инвалидностью." : "АНО СК «Одной дорогой» создана специалистами по реабилитации и социальной адаптации. Мы помогаем детям и взрослым с инвалидностью учиться новому, находить друзей, раскрывать способности и становиться самостоятельнее."}</p><a className="text-link" href="#projects">Посмотреть проекты <Arrow /></a></div>
        <div className="fact-card"><span className="fact-number">2019</span><span>{clear ? "год открытия клуба" : "год основания организации"}</span></div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading"><div className="section-label"><span>01</span> Проекты</div><h2>{clear ? "Что мы делаем" : <>Разные маршруты к самостоятель&shy;ности</>}</h2></div>
        <div className="projects-grid">{projects.map((project, index) => <article className={`project-card ${project.tone}`} key={project.title}><div><h3>{project.title}</h3><p>{clear ? project.clear : project.text}</p></div><button type="button" onClick={() => setActiveProject(index)} aria-label={`Узнать подробнее о проекте ${project.title}`}>Подробнее <Arrow /></button></article>)}</div>
      </section>
      {activeProject !== null && <ProjectProfile project={projects[activeProject]} clear={clear} onClose={() => setActiveProject(null)} />}

      <section className="section team-section" id="team">
        <div className="section-heading"><div className="section-label"><span>02</span> Команда</div><h2>{clear ? "Люди, которые работают в клубе" : "Люди, которые идут рядом"}</h2></div>
        <div className="team-rows">
          {Array.from({ length: Math.ceil(team.length / 2) }, (_, rowIndex) => {
            const start = rowIndex * 2;
            const pair = team.slice(start, start + 2);
            const openInRow = activePerson !== null && Math.floor(activePerson / 2) === rowIndex;
            return <div className="team-row" key={rowIndex}>
              {pair.map((person, pairIndex) => {
                const index = start + pairIndex;
                const isOpen = activePerson === index;
                return <div className="team-card-wrap" key={person.name}><button className={`team-card ${person.tone} ${isOpen ? "team-card-active" : ""}`} type="button" onClick={() => setActivePerson(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`team-profile-desktop-${index} team-profile-mobile-${index}`}><div className="team-card-top"><span className="team-card-action">{isOpen ? "Свернуть" : "Подробнее"} <i aria-hidden="true">{isOpen ? "×" : "+"}</i></span></div><div><p className="team-role">{person.role}</p><h3>{person.name}</h3><p className="team-lead">{clear ? person.clear : person.lead}</p></div></button></div>;
              })}
              {openInRow && activePerson !== null && <TeamProfile person={team[activePerson]} index={activePerson} clear={clear} onClose={() => setActivePerson(null)} variant="desktop" />}
            </div>;
          })}
        </div>
      </section>
      {activePerson !== null && <TeamProfile person={team[activePerson]} index={activePerson} clear={clear} onClose={() => setActivePerson(null)} variant="mobile" />}

      <section className="section news-section" id="news">
        <div className="section-heading inline-heading"><div><div className="section-label section-label-muted">Новости</div><h2>{clear ? "Что нового в клубе" : "События и живые истории"}</h2></div><a className="text-link" href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">Все новости во ВКонтакте <Arrow /></a></div>
        <div className="news-grid">
          <article className="news-featured"><div className="news-image"><span>Жизнь клуба</span></div><div className="news-copy"><span className="news-meta">Новая публикация</span><h3>{clear ? "Здесь будет главная новость" : "Здесь появится главная история месяца"}</h3><p>{clear ? "Мы добавим короткий текст и фотографию." : "Блок готов для новостей о занятиях, событиях и достижениях участников."}</p></div></article>
          <article className="news-small"><span className="news-meta">Анонс</span><h3>{clear ? "Ближайшие занятия" : "Расписание ближайших открытых событий"}</h3><p>{clear ? "Здесь можно узнать дату, время и место." : "Короткий анонс с датой, местом и понятным способом записаться."}</p><a href="#feedback">Узнать первым <Arrow /></a></article>
          <article className="news-small dark-card"><span className="news-meta">Сообщество</span><h3>{clear ? "Больше новостей — в нашей группе" : "Следите за ежедневной жизнью клуба"}</h3><a href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">Перейти во ВКонтакте <Arrow /></a></article>
        </div>
      </section>

      <section className="section reviews-section reviews-compact" id="reviews"><div className="section-label section-label-muted">Отзывы</div><div className="review-stage"><blockquote>{clear ? "Скоро здесь будут отзывы участников клуба и их близких." : "Здесь появятся подлинные голоса участников, родителей и партнёров организации."}</blockquote><p>Раздел будет дополнен после согласования публикации отзывов.</p></div></section>

      <section className="section feedback-section" id="feedback">
        <div className="feedback-copy"><div className="section-label"><span>03</span> Обратная связь</div><h2>{clear ? "Напишите нам" : "Давайте обсудим, чем мы можем помочь"}</h2><p>{clear ? "Заполните форму. Мы ответим вам по телефону или электронной почте." : "Задайте вопрос о программах, социальных услугах или сотрудничестве. Мы свяжемся с вами удобным способом."}</p></div>
        {sent ? <div className="success-message" role="status"><strong>Спасибо!</strong><span>{clear ? "Мы получили ваше сообщение." : "Форма в макете работает. На следующем этапе подключим отправку сообщений."}</span><button className="text-link" onClick={() => setSent(false)}>Отправить ещё одно сообщение</button></div> : <form className="feedback-form" onSubmit={submit}><label>Как к вам обращаться?<input name="name" placeholder="Имя" required /></label><label>Как с вами связаться?<input name="contact" placeholder="Телефон или электронная почта" required /></label><label>Ваш вопрос<textarea name="message" placeholder="Напишите несколько слов" rows={4} required /></label><label className="consent"><input type="checkbox" required /> <span>Я согласен(на) на обработку персональных данных</span></label><button className="button button-dark" type="submit">Отправить <Arrow /></button></form>}
      </section>

      <section className="section transparency-section" id="registry">
        <div className="transparency-heading"><div className="section-label"><span>04</span> Документы и открытость</div><h2>{clear ? "Документы организации" : "Открытая информация — компактно и понятно"}</h2><p>{clear ? "Здесь собраны документы и отчёты организации." : "Соцреестр, публичные отчёты и полезные ресурсы собраны в одном сервисном разделе и не отвлекают от главной истории клуба."}</p></div>
        <div className="transparency-grid">
          <div className="transparency-register">
            <div className="transparency-title"><span>Соцреестр</span><a className="button button-light" href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Открыть полный реестр <Arrow /></a></div>
            <div className="registry-stats"><div><strong>6</strong><span>мест надомного обслуживания</span></div><div><strong>2</strong><span>формы социального обслуживания</span></div></div>
            <details className="documents-disclosure"><summary>{clear ? "Показать документы" : "Обязательные документы организации"}<span aria-hidden="true">+</span></summary><div className="documents">{registryDocs.map((doc, index) => <a href="https://onewaysc.ru/" target="_blank" rel="noreferrer" key={doc}><span>{String(index + 1).padStart(2, "0")}</span><strong>{clear && index === 0 ? "Документ о регистрации организации" : doc}</strong><Arrow /></a>)}</div></details>
            <div className="registry-links"><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Сведения по статье 13 закона № 442-ФЗ <Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Тарифы социальных услуг <Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer">Порядок подачи жалобы <Arrow /></a></div>
          </div>
          <div className="transparency-side">
            <section className="transparency-panel" id="reports"><span className="panel-kicker">Публичная отчётность</span><h3>{clear ? "Как работал клуб" : "Результаты и отчёты"}</h3><p>{clear ? "В отчётах написано, что мы сделали за год." : "Работа организации в цифрах, результатах и обязательной отчётности."}</p><div className="report-links"><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2024</strong><Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2023</strong><Arrow /></a><a href="https://onewaysc.ru/" target="_blank" rel="noreferrer"><span>Отчёты в Минюст</span><strong>2020—2024</strong><Arrow /></a></div></section>
            <section className="transparency-panel" id="links"><span className="panel-kicker">Полезные ссылки</span><div className="links-list"><a href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/" target="_blank" rel="noreferrer">Фонд президентских грантов <Arrow /></a><a href="https://msr.mosreg.ru/" target="_blank" rel="noreferrer">Министерство социального развития Московской области <Arrow /></a><a href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">Сообщество «Одной дорогой» <Arrow /></a></div></section>
          </div>
        </div>
      </section>

      <footer className="footer" id="contacts"><div className="footer-title"><span className="brand-mark inverse">ОД</span><h2>{clear ? "Мы рядом" : "Нам с вами по пути"}</h2></div><div className="footer-grid"><div><span>Позвонить</span><a href="tel:+79774457314">+7 977 445-73-14</a></div><div><span>Написать</span><a href="mailto:onewaysc@yandex.ru">onewaysc@yandex.ru</a></div><div><span>Прийти</span><p>Коломна, ул. Астахова, д. 2, помещение 19</p></div><div><span>Время работы</span><p>Ежедневно, 10:00—18:00</p></div></div><div className="footer-bottom"><span>© АНО СК «Одной дорогой»</span><a href="#registry">Документы и политика конфиденциальности</a><a href="#top">Наверх ↑</a></div></footer>
    </main>
  ) as ReactElement;
}
