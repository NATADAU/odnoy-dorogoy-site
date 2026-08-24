"use client";

import { createContext, CSSProperties, ReactNode, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/logo-oneway.png";

type ClearContextValue = { clear: boolean; setClear: (value: boolean) => void };
const ClearContext = createContext<ClearContextValue>({ clear: false, setClear: () => undefined });

export function useClearLanguage() {
  return useContext(ClearContext);
}

export function PageHomeLink() {
  return <Link className="page-home-link" href="/"><span aria-hidden="true">←</span> На главную</Link>;
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
    { href: "/#about", label: "О клубе", clearLabel: "О клубе" },
    { href: "/projects/", label: "Проекты", clearLabel: "Проекты" },
    { href: "/#news", label: "Новости и события", clearLabel: "Новости" },
    { href: "/registry/", label: "Соцреестр", clearLabel: "Документы" },
    { href: "/contacts/", label: "Контакты", clearLabel: "Контакты" },
  ];

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const rootStyle = document.documentElement.style;
    const previousBodyStyles = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      left: bodyStyle.left,
      right: bodyStyle.right,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
    };
    const previousScrollBehavior = rootStyle.scrollBehavior;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    bodyStyle.overflow = "hidden";
    if (isIOS) {
      bodyStyle.position = "fixed";
      bodyStyle.top = `-${scrollY}px`;
      bodyStyle.left = "0";
      bodyStyle.right = "0";
      bodyStyle.width = "100%";
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      bodyStyle.position = previousBodyStyles.position;
      bodyStyle.top = previousBodyStyles.top;
      bodyStyle.left = previousBodyStyles.left;
      bodyStyle.right = previousBodyStyles.right;
      bodyStyle.width = previousBodyStyles.width;
      bodyStyle.overflow = previousBodyStyles.overflow;
      if (isIOS) {
        rootStyle.scrollBehavior = "auto";
        window.scrollTo(0, scrollY);
        rootStyle.scrollBehavior = previousScrollBehavior;
      }
    };
  }, [open]);

  return (
    <header className={open ? "header header-menu-open" : "header"}>
      <Link className="brand" href="/" aria-label="АНО социальный клуб «Одной дорогой» — на главную" onClick={() => setOpen(false)}>
        <LogoMark />
        <span className="brand-copy"><strong>Одной дорогой</strong><small>АНО социальный клуб</small></span>
      </Link>
      <nav id="main-navigation" className={open ? "nav nav-open" : "nav"} aria-label="Основная навигация">
        <div className="nav-language-switch" role="group" aria-label="Версия текста">
          <button type="button" className={!clear ? "active" : ""} aria-pressed={!clear} onClick={() => setClear(false)}>Обычный текст</button>
          <button type="button" className={clear ? "active" : ""} aria-pressed={clear} onClick={() => setClear(true)}>Ясный язык</button>
        </div>
        {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{clear ? link.clearLabel : link.label}</Link>)}
        <Link className="nav-support" href="/help/" onClick={() => setOpen(false)}>Как помочь</Link>
      </nav>
      <div className="header-actions">
        <div className="language-switch" role="group" aria-label="Версия текста">
          <button type="button" className={!clear ? "active" : ""} aria-pressed={!clear} onClick={() => setClear(false)}>Обычный</button>
          <button type="button" className={clear ? "active" : ""} aria-label="Ясный язык" aria-pressed={clear} onClick={() => setClear(true)}><span className="language-long">Ясный язык</span><span className="language-short">Ясный</span></button>
        </div>
        <Link className="header-support" href="/help/">Как помочь</Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Закрыть меню" : "Открыть меню"}><span /><span /></button>
      </div>
    </header>
  );
}

function MobileContactBar() {
  const pathname = usePathname();
  const onContactsPage = pathname.endsWith("/contacts") || pathname.endsWith("/contacts/");

  if (onContactsPage) return null;

  return (
    <Link className="mobile-contact-bar" href="/contacts/#write" aria-label="Перейти к контактам и написать нам">
      <span>Есть вопрос?</span>
      <strong>Написать нам</strong>
      <b aria-hidden="true">→</b>
    </Link>
  );
}

function Footer() {
  const { clear } = useClearLanguage();
  return (
    <footer className="footer">
      <div className="footer-lead">
        <div className="footer-mark"><LogoMark /></div>
        <h2>{clear ? "Мы рядом" : "Нам с вами по пути"}</h2>
        <Link className="round-link" href="/contacts/" aria-label="Перейти к контактам">↗</Link>
      </div>
      <div className="footer-grid">
        <div><span>Позвонить</span><a href="tel:+79774457314">+7 977 445-73-14</a></div>
        <div><span>Написать</span><a href="mailto:onewaysc@yandex.ru">onewaysc@yandex.ru</a></div>
        <div><span>Основная площадка</span><p>Коломна, ул. Астахова, д. 2, помещение 19</p></div>
        <div><span>Время работы</span><p>Ежедневно, 10:00—18:00</p></div>
      </div>
      <div className="footer-bottom">
        <span>© АНО СК «Одной дорогой»</span>
        <Link href="/registry/">Документы и открытость</Link>
        <Link href="/contacts/">Все адреса и контакты</Link>
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
        <MobileContactBar />
      </div>
    </ClearContext.Provider>
  );
}
