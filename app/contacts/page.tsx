"use client";

import { useClearLanguage } from "../site-shell";

export default function ContactsPage() {
  const { clear } = useClearLanguage();
  return (
    <>
      <section className="page-hero page-hero-contacts" id="top">
        <div className="section-label">Контакты</div>
        <h1>{clear ? "Как с нами связаться" : "Позвонить, написать или прийти"}</h1>
        <p>{clear ? "Мы работаем в городском округе Коломна." : "Контакты и адреса организации собраны на одной странице, чтобы нужную информацию было легко найти."}</p>
      </section>
      <section className="section contact-cards">
        <a className="contact-card contact-card-primary" href="tel:+79774457314"><span>Телефон</span><strong>+7 977 445-73-14</strong><b>Позвонить ↗</b></a>
        <a className="contact-card" href="mailto:onewaysc@yandex.ru"><span>Основная почта</span><strong>onewaysc@yandex.ru</strong><b>Написать ↗</b></a>
        <div className="contact-card"><span>График работы</span><strong>{clear ? "Каждый день" : "Понедельник — воскресенье"}<br />10:00—18:00</strong></div>
      </section>
      <section className="section addresses-section">
        <div className="section-heading"><div className="section-label">Адреса</div><div><h2>{clear ? "Где мы работаем" : "Площадки организации"}</h2><p>{clear ? "Перед первым посещением позвоните нам." : "Перед визитом рекомендуем связаться с организацией и уточнить, на какой площадке проходит нужная программа."}</p></div></div>
        <div className="address-list">
          <article><span>Основная площадка</span><h3>ул. Астахова, д. 2, помещение 19</h3><p>140404, Московская область, городской округ Коломна</p></article>
          <article><span>Помещение для групповых занятий</span><h3>ул. Астахова, д. 2, помещение 18</h3><p>Московская область, городской округ Коломна</p></article>
          <article><span>Тренировочная квартира</span><h3>ул. Уманская, д. 5, кв. 2</h3><p>Площадка учебного сопровождаемого проживания</p></article>
          <article className="legal-address"><span>Юридический адрес</span><h3>с. Федосьино, ул. Производственная, зд. 3, комната 11</h3><p>140471, Московская область, городской округ Коломна</p></article>
        </div>
      </section>
      <section className="contact-ending"><div><span className="section-label">Сообщество</span><h2>{clear ? "Новости клуба" : "Следить за жизнью клуба"}</h2></div><a className="button button-light" href="https://vk.com/club_oneway" target="_blank" rel="noreferrer">Открыть ВКонтакте <span>↗</span></a></section>
    </>
  );
}
