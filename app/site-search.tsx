"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { activeProjects, team } from "./content";

type SearchItem = {
  title: string;
  clearTitle?: string;
  description: string;
  clearDescription?: string;
  href: string;
  category: string;
  keywords?: string;
};

const pageItems: SearchItem[] = [
  { title: "О клубе", description: "Кому помогает клуб, направления работы и клуб в цифрах.", clearDescription: "Кто работает в клубе и для кого он создан.", href: "/#about", category: "Раздел", keywords: "организация семьи близкие инвалидность Коломна" },
  { title: "Действующие проекты", clearTitle: "Занятия и проекты", description: "Занятия, спорт, творчество, общение и самостоятельность.", clearDescription: "Чем можно заниматься в клубе.", href: "/projects/", category: "Раздел", keywords: "занятия программы мастерская студия" },
  { title: "Команда", description: "Специалисты и направления их работы.", clearDescription: "Люди, которые работают в клубе.", href: "/#team", category: "Раздел", keywords: "педагоги сотрудники специалисты" },
  { title: "Соцреестр и документы", clearTitle: "Документы", description: "Социальные услуги, документы, отчётность и материально-техническая база.", clearDescription: "Документы клуба и список социальных услуг.", href: "/registry/", category: "Документы", keywords: "надомная форма услуги жалоба отчет pdf лицензия база" },
  { title: "Контакты и адреса", clearTitle: "Как с нами связаться", description: "Телефон, почта, график работы и площадки клуба.", clearDescription: "Телефон, почта и адреса клуба.", href: "/contacts/", category: "Контакты", keywords: "Астахова Уманская Коломна написать позвонить" },
  { title: "Как помочь", description: "Волонтёрство, партнёрство и другие способы поддержки.", clearDescription: "Как стать волонтёром или предложить помощь.", href: "/help/", category: "Раздел", keywords: "волонтер пожертвование поддержка сотрудничество" },
  { title: "Полезные ссылки", description: "Государственные сервисы и профессиональные организации.", clearDescription: "Сайты, которые могут помочь людям и семьям.", href: "/useful-links/", category: "Раздел", keywords: "госуслуги добродел президент особое детство цлп" },
  { title: "Завершённые проекты", clearTitle: "Проекты, которые закончились", description: "Архив проектов и программ клуба.", clearDescription: "Старые проекты клуба.", href: "/projects/archive/", category: "Архив", keywords: "история завершенные старые" },
];

const searchItems: SearchItem[] = [
  ...pageItems,
  ...activeProjects.map((project) => ({
    title: project.title,
    description: project.summary,
    clearDescription: project.clearSummary,
    href: `/projects/#${project.slug}`,
    category: "Проект",
    keywords: `${project.description} ${project.points.join(" ")}`,
  })),
  ...team.map((person, index) => ({
    title: person.name,
    description: person.role,
    clearDescription: person.clear,
    href: `/#team-${index}`,
    category: "Специалист",
    keywords: `${person.lead} ${person.areas.join(" ")}`,
  })),
];

function normalize(value: string) {
  return value.toLocaleLowerCase("ru-RU").replace(/ё/g, "е");
}

export function SiteSearch({ open, onOpen, onClose, clear, variant, renderDialog = true }: { open: boolean; onOpen: () => void; onClose: () => void; clear: boolean; variant: "desktop" | "menu"; renderDialog?: boolean }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open || !renderDialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, renderDialog]);

  const results = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) return pageItems.slice(0, 6);
    return searchItems.filter((item) => normalize(`${item.title} ${item.clearTitle ?? ""} ${item.description} ${item.clearDescription ?? ""} ${item.keywords ?? ""}`).includes(needle)).slice(0, 12);
  }, [query]);

  return (
    <>
      {variant === "desktop" ? <button className="site-search-trigger" type="button" onClick={onOpen} aria-label="Открыть поиск"><span aria-hidden="true">⌕</span><b>Поиск</b></button> : <button className="nav-search-trigger" type="button" onClick={onOpen}><span aria-hidden="true">⌕</span> Поиск по сайту</button>}
      {open && renderDialog && (
        <div className="search-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
          <section className="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title">
            <div className="search-top"><span id="search-title">Поиск по сайту</span><button type="button" onClick={onClose}>Закрыть <b aria-hidden="true">×</b></button></div>
            <label className="search-field">
              <span className="sr-only">Что найти</span>
              <input ref={inputRef} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={clear ? "Например: занятия, документы, адрес…" : "Например: кулинарная студия, документы, адрес…"} />
              <b aria-hidden="true">⌕</b>
            </label>
            <p className="search-summary">{query.trim() ? `Найдено: ${results.length}` : "Популярные разделы"}</p>
            <div className="search-results" aria-live="polite">
              {results.map((item) => (
                <Link href={item.href} key={`${item.category}-${item.title}`} onClick={onClose}>
                  <span>{item.category}</span><strong>{clear ? item.clearTitle ?? item.title : item.title}</strong><p>{clear ? item.clearDescription ?? item.description : item.description}</p><b aria-hidden="true">→</b>
                </Link>
              ))}
              {query.trim() && results.length === 0 && <div className="search-empty"><strong>Ничего не найдено</strong><p>Попробуйте другое слово или перейдите в контакты — команда клуба поможет сориентироваться.</p><Link className="button button-dark" href="/contacts/" onClick={onClose}>Открыть контакты →</Link></div>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
