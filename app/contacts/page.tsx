"use client";

import { PageHomeLink, useClearLanguage } from "../site-shell";

export default function ContactsPage() {
  const { clear } = useClearLanguage();
  return (
    <>
      <section className="page-hero page-hero-contacts" id="top">
        <PageHomeLink />
        <div className="section-label">Контакты</div>
        <h1>{clear ? "Как с нами связаться" : "Позвонить, написать или прийти"}</h1>
        <p>{clear ? "Мы работаем в городском округе Коломна." : "Здесь можно найти телефон, электронную почту, график работы и адреса всех площадок клуба."}</p>
      </section>
      <section className="section contact-cards">
        <a className="contact-card contact-card-primary" href="tel:+79774457314"><span>Телефон</span><strong>+7 977 445-73-14</strong><b>Позвонить ↗</b></a>
        <a className="contact-card" id="write" href="mailto:onewaysc@yandex.ru"><span>Основная почта</span><strong>onewaysc@yandex.ru</strong><b>Написать ↗</b></a>
        <div className="contact-card"><span>График работы</span><strong>{clear ? "Каждый день" : "Понедельник — воскресенье"}<br />10:00—18:00</strong></div>
      </section>
      <section className="section addresses-section">
        <div className="section-heading"><div className="section-label">Адреса</div><div><h2>{clear ? "Где мы работаем" : "Площадки организации"}</h2><p>{clear ? "Перед первым посещением позвоните нам: " : "Перед визитом позвоните нам и уточните, на какой площадке проходит нужная программа: "}<a className="inline-phone-link" href="tel:+79774457314">+7 977 445-73-14</a></p></div></div>
        <div className="address-list">
          <article><span>Основная площадка</span><h3>ул. Астахова, д. 2, помещение 119</h3><p>Московская область, городской округ Коломна</p></article>
          <article><span>Помещение для групповых занятий</span><h3>ул. Астахова, д. 2, помещение 118</h3><p>Московская область, городской округ Коломна</p></article>
          <article><span>Тренировочная квартира</span><h3>ул. Уманская, д. 5, кв. 2</h3><p>Площадка учебного сопровождаемого проживания</p></article>
          <article className="legal-address"><span>Юридический адрес</span><h3>ул. Астахова, д. 2, помещение 118</h3><p>Московская область, городской округ Коломна</p></article>
        </div>
      </section>
      <section className="contact-ending">
        <div><span className="section-label">Онлайн</span><h2>{clear ? "Клуб в интернете" : "Следить за жизнью клуба"}</h2></div>
        <div className="contact-links">
          <a className="button button-light" href="https://t.me/onewaykolomna" target="_blank" rel="noreferrer">Telegram · @onewaykolomna <span>↗</span></a>
          <a className="button button-light" href="https://vk.ru/onewaykolomna" target="_blank" rel="noreferrer">ВКонтакте <span>↗</span></a>
          <a className="button button-light" href="https://onewaysc.ru/" target="_blank" rel="noreferrer">onewaysc.ru <span>↗</span></a>
        </div>
      </section>
    </>
  );
}
