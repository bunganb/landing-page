"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";

const LINKS = [
  { id: "developed", label: "Developed" },
  { id: "published", label: "Published" },
  { id: "services", label: "Services" },
  { id: "studio", label: "Studio" },
  { id: "contact", label: "Contact" },
];

const MOBILE_QUERY = "(max-width: 1023px)";
const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const jump = (id: string) => {
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      jump(id);
    };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && drawerRef.current) {
        const nodes =
          drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mql = window.matchMedia(MOBILE_QUERY);
    const onMql = (e: MediaQueryListEvent) => {
      if (!e.matches) setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mql.addEventListener("change", onMql);
    queueMicrotask(() => firstLinkRef.current?.focus());
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mql.removeEventListener("change", onMql);
    };
  }, [open]);

  return (
    <div className="nav-wrap">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="nav" aria-label="Primary">
        <Logo onClick={() => jump("top")} />
        <ul>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                className="nav-link"
                href={`#${l.id}`}
                onClick={handleNavClick(l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => window.open("https://hagegames.com", "_blank")}>
          Find Your Joy
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          ref={toggleRef}
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5 L15 15 M15 5 L5 15" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h14 M3 10h14 M3 14h14" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className="nav-backdrop"
        data-open={open}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        ref={drawerRef}
        className="nav-drawer"
        id="mobile-drawer"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="nav-drawer-inner">
          <ul className="nav-drawer-list">
            {LINKS.map((l, i) => (
              <li key={l.id}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  className="nav-drawer-link"
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    jump(l.id);
                  }}
                >
                  <span className="nav-drawer-num">0{i + 1}</span>
                  <span>{l.label}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 13 L13 5 M6 5 L13 5 L13 12" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav-cta nav-drawer-cta"
            onClick={() => {
              setOpen(false);
              window.open("https://hagegames.com", "_blank");
            }}
          >
            Find Your Joy
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
