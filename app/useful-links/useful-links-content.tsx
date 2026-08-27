"use client";

import { PageHomeLink, useClearLanguage } from "../site-shell";

const usefulLinks = [
  {
    title: "Министерство социального развития Московской области",
    clearTitle: "Министерство социального развития Московской области",
    description: "Информация о мерах социальной поддержки и социальном обслуживании в регионе.",
    clearDescription: "Информация о социальной помощи в Московской области.",
    href: "https://msr.mosreg.ru",
  },
  {
    title: "Официальный сайт Президента России",
    clearTitle: "Сайт Президента России",
    description: "Официальные документы, новости и порядок направления обращений.",
    clearDescription: "Официальная информация и обращения граждан.",
    href: "https://kremlin.ru",
  },
  {
    title: "Добродел",
    clearTitle: "Добродел",
    description: "Портал для сообщений о проблемах и обращений жителей Московской области.",
    clearDescription: "Здесь жители Подмосковья могут сообщить о проблеме.",
    href: "https://dobrodel.mosreg.ru",
  },
  {
    title: "Госуслуги",
    clearTitle: "Госуслуги",
    description: "Единый портал государственных и муниципальных услуг Российской Федерации.",
    clearDescription: "Государственные услуги в интернете.",
    href: "https://gosuslugi.ru",
  },
  {
    title: "Госуслуги Московской области",
    clearTitle: "Госуслуги Московской области",
    description: "Региональные электронные услуги для жителей Подмосковья.",
    clearDescription: "Услуги Московской области в интернете.",
    href: "https://uslugi.mosreg.ru",
  },
  {
    title: "Уполномоченный при Президенте РФ по правам ребёнка",
    clearTitle: "Уполномоченный по правам ребёнка",
    description: "Информация о защите прав детей и порядке обращения к Уполномоченному.",
    clearDescription: "Помощь в защите прав ребёнка.",
    href: "https://deti.gov.ru/Upolnomochennyy/management/1",
  },
  {
    title: "Экспертно-методический центр «Особое детство»",
    clearTitle: "Центр «Особое детство»",
    description: "Методические материалы и профессиональная информация о помощи детям и взрослым с нарушениями развития.",
    clearDescription: "Материалы о помощи людям с нарушениями развития.",
    href: "https://emc.ccp.org.ru",
  },
  {
    title: "Центр лечебной педагогики «Особое детство»",
    clearTitle: "Центр лечебной педагогики",
    description: "Программы помощи, консультации и материалы для семей, специалистов и организаций.",
    clearDescription: "Помощь семьям и людям с особенностями развития.",
    href: "https://ccp.org.ru",
  },
];

export function UsefulLinksContent() {
  const { clear } = useClearLanguage();

  return (
    <>
      <section className="page-hero page-hero-links" id="top">
        <PageHomeLink />
        <div className="section-label">Полезные ссылки</div>
        <h1>{clear ? "Сайты, которые могут помочь" : "Сервисы, документы и профессиональная поддержка"}</h1>
        <p>{clear ? "Здесь собраны государственные сайты и организации, которые помогают людям и семьям." : "Собрали государственные сервисы, правозащитные ресурсы и профессиональные организации, которые могут быть полезны людям с инвалидностью и их близким."}</p>
      </section>
      <section className="section useful-links-section" aria-label="Список полезных ресурсов">
        <div className="useful-links-list">
          {usefulLinks.map((item, index) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.href} aria-label={`${clear ? item.clearTitle : item.title} — перейти на сайт`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{clear ? item.clearTitle : item.title}</h2>
                <p>{clear ? item.clearDescription : item.description}</p>
              </div>
              <b aria-hidden="true">Перейти на сайт <i>↗</i></b>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
