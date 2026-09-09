"use client";

import { useCallback, useState } from "react";
import { useModalFocusTrap } from "../use-modal-focus-trap";

const email = "onewaysc@yandex.ru";

type ContactIntent = {
  label: string;
  subject: string;
  buttonClassName: string;
};

export function EmailContactDialog({ label, subject, buttonClassName }: ContactIntent) {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const close = useCallback(() => {
    setOpen(false);
    setCopyStatus("");
  }, []);

  const dialogRef = useModalFocusTrap(open, close);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Адрес скопирован");
    } catch {
      setCopyStatus("Не удалось скопировать. Выделите адрес вручную.");
    }
  };

  return (
    <>
      <button className={`button ${buttonClassName}`} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog">
        {label} <b aria-hidden="true">↗</b>
      </button>
      {open && (
        <div className="email-dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <section ref={dialogRef} className="email-dialog" role="dialog" aria-modal="true" aria-labelledby="email-dialog-title" tabIndex={-1}>
            <div className="email-dialog-top">
              <span>Связаться с клубом</span>
              <button type="button" onClick={close} aria-label="Закрыть окно">Закрыть <b aria-hidden="true">×</b></button>
            </div>
            <h2 id="email-dialog-title">Напишите нам</h2>
            <p>Откройте свою почту и создайте новое письмо. Используйте адрес и тему ниже.</p>
            <dl className="email-dialog-details">
              <div><dt>Адрес</dt><dd>{email}</dd></div>
              <div><dt>Тема письма</dt><dd>{subject}</dd></div>
            </dl>
            <div className="email-dialog-actions">
              <button className="button button-dark" type="button" onClick={copyEmail}>Скопировать адрес <b aria-hidden="true">→</b></button>
              <button className="button button-light" type="button" onClick={close}>Закрыть</button>
            </div>
            <p className="email-copy-status" aria-live="polite">{copyStatus}</p>
          </section>
        </div>
      )}
    </>
  );
}
