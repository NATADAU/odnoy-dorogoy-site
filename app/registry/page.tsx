"use client";

import Link from "next/link";
import { registryServiceGroups } from "../content";
import { PageHomeLink, useClearLanguage } from "../site-shell";

const documentBase = "../documents/social-registry/";

const documentGroups = [
  {
    title: "Учредительные и регистрационные документы",
    clearTitle: "Документы об организации",
    items: [
      { title: "Устав организации (новая редакция)", pdf: "charter-2026.pdf" },
      { title: "Свидетельство о государственной регистрации в Минюсте", pdf: "minjust-registration.pdf" },
      { title: "Свидетельство о постановке на учёт в налоговом органе", pdf: "tax-registration-certificate.pdf" },
      { title: "Лист записи ЕГРЮЛ от 9 июня 2026 года", pdf: "egrul-record-2026-redacted.pdf" },
      { title: "Приказ о назначении генерального директора", pdf: "director-appointment-order.pdf" },
    ],
  },
  {
    title: "Социальное обслуживание",
    clearTitle: "Документы о социальных услугах",
    items: [
      { title: "Порядок предоставления социальных услуг в Московской области", pdf: "poryadok-social-services-mo.pdf" },
      { title: "Тарифы на социальные услуги на 2026 год", pdf: "social-services-tariffs-2026.pdf" },
      { title: "Договор о предоставлении социальных услуг", pdf: "social-services-agreement.pdf", docx: "social-services-agreement.docx" },
      { title: "Правила внутреннего распорядка для получателей социальных услуг", pdf: "rules-for-social-service-recipients.pdf", docx: "rules-for-social-service-recipients.docx" },
    ],
  },
  {
    title: "Персональные данные",
    clearTitle: "Как организация работает с личными данными",
    items: [
      { title: "Политика обработки персональных данных", pdf: "personal-data-policy.pdf", docx: "personal-data-policy.docx" },
      { title: "Согласие на обработку персональных данных", pdf: "personal-data-consent.pdf", docx: "personal-data-consent.docx" },
    ],
  },
  {
    title: "Локальные документы",
    clearTitle: "Внутренние документы",
    items: [
      { title: "Правила внутреннего трудового распорядка для работников", pdf: "internal-work-rules.pdf", docx: "internal-work-rules.docx" },
    ],
  },
];

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
              <p>{clear ? "Документы можно открыть в браузере. Формы также можно скачать в формате Word." : "Документы сгруппированы по назначению. PDF открывается для просмотра, а редактируемые формы дополнительно доступны в формате Word."}</p>
              <div className="document-groups">
                {documentGroups.map((group) => (
                  <section className="document-group" key={group.title}>
                    <h3>{clear ? group.clearTitle : group.title}</h3>
                    <div className="document-list">
                      {group.items.map((document, index) => (
                        <article className="document-item" key={document.title}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{document.title}</strong>
                          <div className="document-actions">
                            <a href={`${documentBase}${document.pdf}`} target="_blank" rel="noreferrer">Открыть PDF <b aria-hidden="true">↗</b></a>
                            {document.docx && <a href={`${documentBase}${document.docx}`} download>Скачать Word <b aria-hidden="true">↓</b></a>}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="registry-block" id="reports">
            <span className="block-number">06</span>
            <div>
              <h2>{clear ? "Отчёты" : "Публичная и обязательная отчётность"}</h2>
              <p>{clear ? "В отчётах написано, что организация сделала за год." : "Публичные отчёты и отчёты в Минюст собраны отдельно от учредительных документов."}</p>
              <div className="report-pending" role="status">
                <strong>{clear ? "Отчёты готовятся к публикации" : "Файлы отчётности готовятся к публикации"}</strong>
                <p>{clear ? "Когда документы будут готовы, здесь появятся ссылки на них." : "После получения актуальных документов здесь появятся публичные отчёты и отчёты, представленные в Минюст."}</p>
              </div>
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
