"use client";

import Link from "next/link";
import { registryDocuments, registryServiceGroups } from "../content";
import { PageHomeLink, useClearLanguage } from "../site-shell";

const oldSite = "https://onewaysc.ru/";

export default function RegistryPage() {
  const { clear } = useClearLanguage();

  return (
    <>
      <section className="page-hero page-hero-registry" id="top">
        <PageHomeLink />
        <div className="section-label">Соцреестр и открытость</div>
        <h1>{clear ? "Информация о социальных услугах" : "Обязательная информация — понятно и в одном месте"}</h1>
        <p>{clear ? "Здесь собраны сведения об услугах на дому, документы и контакты организации." : "Раздел для получателей социальных услуг: форма обслуживания, полный перечень услуг, сведения об организации, документы и способы обращения."}</p>
      </section>

      <section className="section registry-layout">
        <aside className="registry-nav">
          <span>На странице</span>
          <a href="#overview">Форма и объёмы</a>
          <a href="#services">Перечень услуг</a>
          <a href="#disclosure">Сведения об организации</a>
          <a href="#facilities">Материально-техническая база</a>
          <a href="#documents">Документы</a>
          <a href="#reports">Отчётность</a>
          <a href="#quality">Обращения</a>
        </aside>

        <div className="registry-content">
          <section className="registry-block registry-lead" id="overview">
            <span className="block-number">01</span>
            <div>
              <h2>{clear ? "Помощь на дому" : "Форма социального обслуживания и объёмы"}</h2>
              <p>{clear ? "Организация оказывает социальные услуги на дому." : "АНО СК «Одной дорогой» предоставляет социальные услуги в надомной форме. Полустационарная форма социального обслуживания в настоящее время не осуществляется."}</p>
              <div className="registry-facts registry-facts-wide">
                <div><strong>1</strong><span>форма социального обслуживания</span></div>
                <div><strong>6</strong><span>мест надомного обслуживания</span></div>
                <div><strong>6</strong><span>свободных мест</span></div>
              </div>
              <div className="funding-facts">
                <p><strong>За счёт бюджетных ассигнований Московской области:</strong> 6 мест.</p>
                <p><strong>За счёт средств физических и юридических лиц:</strong> 0 мест.</p>
              </div>
            </div>
          </section>

          <section className="registry-block" id="services">
            <span className="block-number">02</span>
            <div>
              <h2>{clear ? "Какие услуги можно получить" : "Полный перечень социальных услуг на дому"}</h2>
              <p>{clear ? "Откройте нужный раздел, чтобы посмотреть список услуг." : "Перечень сгруппирован по видам услуг. Нажмите на название раздела, чтобы раскрыть его полностью."}</p>
              <div className="service-accordion">
                {registryServiceGroups.map((group, groupIndex) => (
                  <details key={group.title} open={groupIndex === 0}>
                    <summary><span>{String(groupIndex + 1).padStart(2, "0")}</span><strong>{group.title}</strong><b aria-hidden="true">+</b></summary>
                    <ol>{group.items.map((item) => <li key={item}>{item}</li>)}</ol>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="registry-block" id="disclosure">
            <span className="block-number">03</span>
            <div>
              <h2>{clear ? "Сведения об организации" : "Раскрытие информации поставщиком социальных услуг"}</h2>
              <p>Информация размещена в соответствии со статьёй 13 Федерального закона от 28.12.2013 № 442-ФЗ «Об основах социального обслуживания граждан в Российской Федерации» и приказом Минтруда России от 17.11.2014 № 886н.</p>
              <div className="disclosure-list">
                <article><h3>Регистрация, руководство и контакты</h3><p>Сведения о государственной регистрации и учредителях размещены в документах. Данные о руководителе и сотрудниках — в разделе команды. Адреса, график работы, телефон и электронная почта собраны на странице контактов.</p><div className="disclosure-links"><a href="#documents">Документы ↓</a><Link href="/#team">Команда ↗</Link><Link href="/contacts/">Контакты ↗</Link></div></article>
                <article><h3>Тарифы и порядок предоставления услуг</h3><p>Перечень услуг, порядок и условия их предоставления, актуальные тарифы, образцы договоров и правила для получателей услуг размещаются в разделе документов.</p><a className="registry-inline-link" href="#documents">Перейти к документам ↓</a></article>
                <article><h3>Финансово-хозяйственная деятельность</h3><p>Публичные отчёты и отчёты в Минюст вынесены в отдельный блок и будут дополнены актуальными файлами.</p><a className="registry-inline-link" href="#reports">Перейти к отчётности ↓</a></article>
                <article><h3>Оценка качества и государственный контроль</h3><p>Проверки с целью проведения независимой оценки качества оказания услуг не проводились. Проверки с целью государственного контроля и предписания органов контроля отсутствуют.</p></article>
                <article><h3>Лицензирование</h3><p>АНО СК «Одной дорогой» не осуществляет деятельность, подлежащую лицензированию в соответствии с законодательством Российской Федерации.</p></article>
              </div>
            </div>
          </section>

          <section className="registry-block" id="facilities">
            <span className="block-number">04</span>
            <div>
              <h2>{clear ? "Где проходят занятия" : "Материально-техническая база"}</h2>
              <p>{clear ? "Организация работает в двух помещениях и тренировочной квартире." : "Социальные услуги и программы проходят в жилых и нежилых помещениях городского округа Коломна."}</p>
              <div className="facility-grid">
                <article><span>Спортивный клуб · 72 м²</span><h3>ул. Астахова, д. 2, помещение 119</h3><p>Скалодром, спортивный инвентарь и тренажёры.</p></article>
                <article><span>Групповые занятия · 42 м²</span><h3>ул. Астахова, д. 2, помещение 118</h3><p>Пространство для развивающих, творческих и групповых занятий.</p></article>
                <article><span>Тренировочная квартира</span><h3>ул. Уманская, д. 5, кв. 2</h3><p>Площадка учебного сопровождаемого проживания.</p></article>
              </div>
              <p className="facility-note">Помещения оборудованы для комфортного проведения занятий и удобства участников программ с инвалидностью. Есть доступ к интернету, места для отдыха, питьевая вода и возможность организовать приём пищи.</p>
            </div>
          </section>

          <section className="registry-block" id="documents">
            <span className="block-number">05</span>
            <div>
              <h2>{clear ? "Документы организации" : "Учредительные и обязательные документы"}</h2>
              <p>{clear ? "Сейчас документы открываются на прежнем сайте. Новые файлы появятся здесь после обновления." : "До загрузки новых сканов документы открываются на действующем сайте организации. После получения актуальных PDF ссылки будут заменены на прямые."}</p>
              <div className="document-list">{registryDocuments.map((document, index) => <a href={oldSite} target="_blank" rel="noreferrer" key={document}><span>{String(index + 1).padStart(2, "0")}</span><strong>{document}</strong><b>↗</b></a>)}</div>
            </div>
          </section>

          <section className="registry-block" id="reports">
            <span className="block-number">06</span>
            <div>
              <h2>{clear ? "Отчёты" : "Публичная и обязательная отчётность"}</h2>
              <p>{clear ? "В отчётах написано, что организация сделала за год." : "Публичные отчёты и отчёты в Минюст собраны отдельно от учредительных документов."}</p>
              <div className="report-grid"><a href={oldSite} target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2024</strong><b>↗</b></a><a href={oldSite} target="_blank" rel="noreferrer"><span>Публичный отчёт</span><strong>2023</strong><b>↗</b></a><a href={oldSite} target="_blank" rel="noreferrer"><span>Отчёты в Минюст</span><strong>2020—2024</strong><b>↗</b></a></div>
            </div>
          </section>

          <section className="registry-block" id="quality">
            <span className="block-number">07</span>
            <div>
              <h2>{clear ? "Вопросы и жалобы" : "Порядок подачи обращения по качеству услуг"}</h2>
              <p>{clear ? "Можно позвонить или написать на электронную почту." : "Задать вопрос, оставить предложение или направить жалобу по вопросам качества социальных услуг можно по телефону или электронной почте организации."}</p>
              <div className="contact-inline"><a href="tel:+79774457314">+7 977 445-73-14</a><a href="mailto:onewaysc@yandex.ru">onewaysc@yandex.ru</a></div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
