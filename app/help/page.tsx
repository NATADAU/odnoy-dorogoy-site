"use client";

import { PageHomeLink, useClearLanguage } from "../site-shell";

export default function HelpPage() {
  const { clear } = useClearLanguage();
  return (
    <>
      <section className="page-hero page-hero-help" id="top">
        <PageHomeLink />
        <div className="section-label">Как помочь</div>
        <h1>{clear ? "Вы можете помочь клубу" : "Поддержка бывает разной — и каждая важна"}</h1>
        <p>{clear ? "Можно стать волонтёром, рассказать о клубе или предложить сотрудничество." : "Клубу можно помочь временем, профессиональным опытом, информацией или партнёрской поддержкой."}</p>
      </section>
      <section className="section help-grid">
        <article className="help-card help-card-coral"><span>01</span><h2>{clear ? "Стать волонтёром" : "Помочь временем и опытом"}</h2><p>{clear ? "Напишите нам. Расскажите, что вы умеете и когда можете помогать." : "Расскажите, чем вы хотели бы заниматься, какие у вас навыки и сколько времени вы готовы уделять. Мы обсудим подходящий формат участия."}</p><a className="button button-dark" href="mailto:onewaysc@yandex.ru?subject=Хочу%20стать%20волонтёром">Написать о волонтёрстве <b>↗</b></a></article>
        <article className="help-card help-card-mint"><span>02</span><h2>{clear ? "Предложить поддержку" : "Стать партнёром"}</h2><p>{clear ? "Организация может помочь делом, материалами или услугами." : "Если вы представляете компанию или сообщество, можно предложить материалы, профессиональную помощь, площадку или совместный проект."}</p><a className="button button-light" href="mailto:onewaysc@yandex.ru?subject=Предложение%20о%20партнёрстве">Предложить партнёрство <b>↗</b></a></article>
        <article className="help-card help-card-dark"><span>03</span><h2>Рассказать о клубе</h2><p>{clear ? "Поделитесь новостью клуба с друзьями." : "Подписка, репост или рассказ о проектах помогают новым участникам, волонтёрам и партнёрам узнать о клубе."}</p><a className="button button-white" href="https://vk.ru/onewaykolomna" target="_blank" rel="noreferrer">Перейти во ВКонтакте <b>↗</b></a></article>
      </section>
      <section className="payment-note"><span className="section-label">Другой формат</span><div><h2>{clear ? "Хотите помочь по-другому?" : "Есть идея или особое предложение?"}</h2><p>{clear ? "Позвоните или напишите нам. Мы обсудим, какая помощь сейчас нужна." : "Свяжитесь с командой клуба: вместе мы найдём уместный и действительно полезный формат поддержки."}</p><div className="contact-inline"><a href="tel:+79774457314">+7 977 445-73-14</a><a href="mailto:onewaysc@yandex.ru">onewaysc@yandex.ru</a></div></div></section>
    </>
  );
}
