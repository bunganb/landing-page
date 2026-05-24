"use client";

import { useEffect, useRef } from "react";
import type { Game } from "@/lib/games";
import { PLATFORM_LABEL } from "@/lib/games";
import { ART } from "./art";
import { PlatformIcon } from "./platform-icons";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])';

export function GameModal({
  game,
  onClose,
}: {
  game: Game | null;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!game) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const nodes = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
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

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    // Defer to let modal render before focusing
    queueMicrotask(() => closeBtnRef.current?.focus());

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [game, onClose]);

  if (!game) return null;
  const Art = ART[game.art];
  const titleId = `game-modal-title-${game.id}`;
  const realLinks = game.links.filter(
    (l) => l.href && l.href !== "#" && l.href.trim().length > 0
  );

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero">
          <div className="thumb-art">{Art ? <Art /> : null}</div>
          <div className="gradient" />
          <button
            ref={closeBtnRef}
            className="close"
            onClick={onClose}
            aria-label="Close game details"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 4 L12 12 M12 4 L4 12" />
            </svg>
          </button>
          <div className="meta-overlay">
            <div>
              <h2 id={titleId} className="title">{game.title}</h2>
              <div className="tagline">{game.tagline}</div>
            </div>
            <div className="role-badge">{game.role}</div>
          </div>
        </div>
        <div className="modal-body">
          <div className="desc">
            <h4>About the game</h4>
            <p>{game.description}</p>
            {game.tags.length > 0 && (
              <div className="modal-tags">
                {game.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
          </div>
          <div className="modal-side">
            <div className="info-row">
              <span className="k">Release</span>
              <span className="v">{game.year}</span>
            </div>
            <div className="info-row">
              <span className="k">Genre</span>
              <span className="v">{game.genre}</span>
            </div>
            <div className="info-row">
              <span className="k">Engine</span>
              <span className="v">{game.engine}</span>
            </div>
            {game.studio && (
              <div className="info-row">
                <span className="k">Studio</span>
                <span className="v">{game.studio}</span>
              </div>
            )}
            <div className="info-row">
              <span className="k">Platforms</span>
              <span className="v" style={{ display: "inline-flex", gap: 6 }}>
                {game.platforms.map((p, i) => (
                  <span
                    key={`${p}-${i}`}
                    title={PLATFORM_LABEL[p]}
                    style={{
                      display: "inline-grid",
                      placeItems: "center",
                      width: 22,
                      height: 22,
                      background: "var(--ink)",
                      color: "var(--cream)",
                      borderRadius: 6,
                    }}
                  >
                    <PlatformIcon kind={p} size={12} />
                  </span>
                ))}
              </span>
            </div>
            <div className="modal-platforms">
              {realLinks.length === 0 ? (
                <p className="modal-platforms-empty">
                  Store links coming soon. Wishlist forthcoming.
                </p>
              ) : (
                realLinks.map((l, i) => (
                  <a
                    key={`${l.kind}-${i}`}
                    className="plat-btn"
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${l.label} (opens in new tab)`}
                  >
                    <span className="plat-icon">
                      <PlatformIcon kind={l.kind} size={18} />
                    </span>
                    <span>{l.label}</span>
                    <span className="meta">{l.meta}</span>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
