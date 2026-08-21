"use client";

import { createContext, CSSProperties, ReactNode, useContext, useEffect, useState } from "react";
import Link from "next/link";
import logo from "../public/logo-oneway.png";

type ClearContextValue = { clear: boolean; setClear: (value: boolean) => void };
const ClearContext = createContext<ClearContextValue>({ clear: false, setClear: () => undefined });

export function useClearLanguage() {
  return useContext(ClearContext);
}

export function LogoMark({ className = "" }: { className?: string }) {
  const style = {
    "--logo-mask": `url(${logo.src})`,
  } as CSSProperties;
  return <span className={`logo-mark ${className}`} style={style} aria-hidden="true" />;
}

function Header() {
  const { clear, setClear } = useClearLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#about", label: "О нас" },
    { href: "/projects/", label: "Проекты" },
    { href: "/registry/", label: "Соцреестр" },
    { href: "/#team", label: "Команда" },
    { href: "/contacts/", label: "Контакты" },
  ];

  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="АНО социальный клуб «Одной дорогой» — на главную">
        <LogoMark />
        <span className="brand-copy"><strong>Одной дорогой</strong><small>АНО социальный клуб</small></span>
      </Link>
      <nav id="main-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Основная навигация">
        {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link className="nav-support" href="/help/" onClick={() => setOpen(false)}>Как помочь</Link>
      </nav>
      <div className="header-actions">
        <div className="language-switch" role="group" aria-label="Версия текста">
          <button type="button" className={!clear ? "active" : ""} aria-pressed={!clear} onClick={() => setClear(false)}>Обычный</button>
          <button type="button" className={clear ? "active" : ""} aria-pressed={clear} onClick={() => setClear(true)}>Ясный язык</button>
        </div>
        <Link className="header-support" href="/help/">Поддержать</Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Закрыть меню" : "Открыть меню"}><span /><span /></button>
      </div>
    </header>
  );
}

function Footer() {
  const { clear } = useClearLanguage();
  return (
    <footer className="footer">
      <div className="footer-lead">
        <div className="footer-mark"><LogoMark /></div>
        <h2>{clear ? "Мы рядом" : "Нам с вами по пути"}</h2>
        <Link className="round-link" href="/contacts/" aria-label="Перейти к контактам">↗</Link>
      </div>
      <div className="footer-grid">
        <div><span>Позвонить</span><a href="tel:+79774457314">+7 977 445-73-14</a></div>
        <div><span>Написать</span><a href="mailto:onewaysc@yandex.ru">onewaysc@yandex.ru</a></div>
        <div><span>Основная площадка</span><p>Коломна, ул. Астахова, д. 2, помещение 19</p></div>
        <div><span>Время работы</span><p>Ежедневно, 10:00—18:00</p></div>
      </div>
      <div className="footer-bottom">
        <span>© АНО СК «Одной дорогой»</span>
        <Link href="/registry/">Документы и открытость</Link>
        <Link href="/contacts/">Все адреса и контакты</Link>
        <Link href="#top">Наверх ↑</Link>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const [clear, setClearState] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setClearState(window.localStorage.getItem("clear-language") === "true"), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const setClear = (value: boolean) => {
    setClearState(value);
    window.localStorage.setItem("clear-language", String(value));
  };

  return (
    <ClearContext.Provider value={{ clear, setClear }}>
      <div className={clear ? "site clear-mode" : "site"}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ClearContext.Provider>
  );
}
