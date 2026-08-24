"use client";

import { registryDocuments } from "../content";
import { PageHomeLink, useClearLanguage } from "../site-shell";

const oldSite = "https://onewaysc.ru/";

export default function RegistryPage() {
  const { clear } = useClearLanguage();
  return (
    <>
      <section className="page-hero page-hero-registry" id="top">
        <PageHomeLink />
        <div className="section-label">Соцреестр и открытость</div>
        <h1>{clear ? "Информация о социальных услугах" : "Обязательная информация — в отдельном разделе"}</h1>
        <p>{clear ? "Здесь собраны документы организации и сведения о социальных услугах." : "Здесь собраны документы организации, сведения о социальных услугах и публичная отчётность."}</p>
      </section>

      <section className="section registry-layout">
        <aside className="registry-nav"><span>На странице</span><a href="#services">Социальные услуги</a><a href="#documents">Документы</a><a href="#reports">Отчётность</a><a href="#quality">Оценка и обращения</a><a href="#resources">Полезные ссылки</a></aside>
        <div className="registry-content">
          <section className="registry-block registry-lead" id="services"><span className="block-number">01</span><div><h2>{clear ? "Как клуб оказывает услуги" : "Формы социального обслуживания"}</h2><p>{clear ? "Организация оказывает услуги на дому и в полустационарной форме." : "АНО СК «Одной дорогой» предоставляет социальные услуги на дому и в полустационарной форме. Сведения об объёмах, количестве мест и тарифах собраны в документах организации."}</p><div className="registry-facts"><div><strong>6</strong><span>{clear ? "мест для помощи на дому" : "мест надомного обслуживания"}</span></div><div><strong>2</strong><span>{clear ? "формы помощи" : "формы социального обслуживания"}</span></div></div><div className="tag-list"><span>На дому</span><span>Полустационарно</span></div></div></section>

          <section className="registry-block" id="documents"><span className="block-number">02</span><div><h2>{clear ? "Документы организации" : "Учредительные и обязательные документы"}</h2><p>{clear ? "Нажмите на название документа. Он откроется в новом окне." : "Документы размещены на действующем сайте организации и откроются в новом окне."}</p><div className="document-list">{registryDocuments.map((document, index) => <a href={oldSite} target="_blank" rel="noreferrer" key={document}><span>{String(index + 1).padStart(2, "0")}</span><strong>{document}</strong><b>↗</b></a>)}</div></div></section>

          <section className="registry-block" id="reports"><span className="block-number">03</span><div><h2>{clear ? "Отчёты" : "Публичная и обязательная отчётность"}</h2><p>{clear ? "В отчётах написано, что организация сделала за год." : "Публичные отчёты и отчёты в Минюст собраны отдельно от учредительных документов."}</p><div className="report-grid"><a href={oldSite} target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2024</strong><b>↗</b></a><a href={oldSite} target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2023</strong><b>↗</b></a><a href={oldSite} target="_blank" rel="noreferrer"><span>Отчёты в Минюст</span><strong>2020—2024</strong><b>↗</b></a></div></div></section>

          <section className="registry-block" id="quality"><span className="block-number">04</span><div><h2>{clear ? "Вопросы и жалобы" : "Качество услуг и обратная связь"}</h2><p>{clear ? "Можно задать вопрос по телефону или электронной почте." : "Вопросы о качестве социальных услуг и обращения можно направить организации по телефону или электронной почте."}</p><div className="contact-inline"><a href="tel:+79774457314">+7 977 445-73-14</a><a href="mailto:onewaysc@yandex.ru">onewaysc@yandex.ru</a></div></div></section>

          <section className="registry-block" id="resources"><span className="block-number">05</span><div><h2>{clear ? "Полезные сайты" : "Полезные ссылки"}</h2><p>{clear ? "Здесь можно узнать больше о поддержке и социальных услугах." : "Официальные и партнёрские ресурсы, связанные с поддержкой некоммерческих организаций и социальным обслуживанием."}</p><div className="resource-list"><a href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/" target="_blank" rel="noreferrer"><strong>Фонд президентских грантов</strong><b>↗</b></a><a href="https://msr.mosreg.ru/" target="_blank" rel="noreferrer"><strong>Министерство социального развития Московской области</strong><b>↗</b></a><a href="https://vk.ru/onewaykolomna" target="_blank" rel="noreferrer"><strong>Сообщество «Одной дорогой»</strong><b>↗</b></a></div></div></section>
        </div>
      </section>
    </>
  );
}
