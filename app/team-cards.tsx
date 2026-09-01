"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { TeamMember } from "./content";
import { teamImages } from "./media";
import { useClearLanguage } from "./site-shell";
import { useModalFocusTrap } from "./use-modal-focus-trap";

export function TeamCards({ people }: { people: TeamMember[] }) {
  const { clear } = useClearLanguage();
  const [active, setActive] = useState<TeamMember | null>(null);

  const closeActive = useCallback(() => {
    setActive(null);
    if (/^#team-\d+$/.test(window.location.hash)) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  useEffect(() => {
    const openFromHash = () => {
      const match = window.location.hash.match(/^#team-(\d+)$/);
      if (!match) return;
      const person = people[Number(match[1])];
      if (person) setActive(person);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [people]);

  const dialogRef = useModalFocusTrap(Boolean(active), closeActive);

  return (
    <>
      <div className="team-grid">
        {people.map((person, index) => (
          <button className={`team-card tone-${person.tone}`} id={`team-${index}`} type="button" key={person.name} onClick={() => setActive(person)}>
            <span className="team-action">Подробнее <i aria-hidden="true">+</i></span>
            <span className="team-photo"><Image src={teamImages[index]} alt="" fill sizes="(max-width: 720px) 36vw, 140px" /></span>
            <div><p>{person.role}</p><h3>{person.name}</h3><strong>{clear ? person.clear : person.lead}</strong></div>
          </button>
        ))}
      </div>
      <div className="swipe-hint" aria-hidden="true"><span>Листайте карточки</span><b>→</b></div>
      {active && (
        <div className="dialog-backdrop" role="presentation" onClick={closeActive}>
          <section ref={dialogRef} className={`team-dialog tone-${active.tone}`} role="dialog" aria-modal="true" aria-label={`Профиль: ${active.name}`} tabIndex={-1} onClick={(event) => event.stopPropagation()}>
            <div className="dialog-top"><span>Профиль специалиста</span><button type="button" onClick={closeActive}>Закрыть <b aria-hidden="true">×</b></button></div>
            <div className="dialog-grid">
              <div><div className="dialog-team-photo"><Image src={teamImages[people.indexOf(active)]} alt={`Фотография: ${active.name}`} fill sizes="(max-width: 720px) 46vw, 210px" /></div><p className="dialog-kicker">{active.role}</p><h3>{active.name}</h3><strong className="dialog-lead">{clear ? active.clear : active.lead}</strong></div>
              <div className="dialog-copy">
                {!clear && <div className="bio">{active.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
                <span className="list-title">{clear ? "Что делает" : "Направления работы"}</span>
                <ul>{active.areas.map((area) => <li key={area}>{area}</li>)}</ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
