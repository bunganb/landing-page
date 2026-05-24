"use client";

import { useRef } from "react";
import type { Game } from "@/lib/games";
import { ART } from "./art";
import { PlatformIcon } from "./platform-icons";

export function GameCard({
  game,
  onClick,
}: {
  game: Game;
  onClick: (game: Game, opener?: HTMLElement | null) => void;
}) {
  const Art = ART[game.art];
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow right-click + modifier-click to open in new tab as normal anchor
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onClick(game, anchorRef.current);
  };

  return (
    <a
      ref={anchorRef}
      className="game-card"
      href={`?game=${game.id}`}
      onClick={handleClick}
      aria-label={`Open ${game.title} details`}
    >
      <div className="thumb">
        <div className="thumb-art">{Art ? <Art /> : null}</div>
        <div className="platforms-mini">
          {game.platforms.slice(0, 3).map((p, i) => (
            <span key={`${p}-${i}`} className="platform-chip">
              <PlatformIcon kind={p} size={12} />
            </span>
          ))}
        </div>
        <div className="thumb-overlay">
          <div className="badges">
            {game.badges.map((b) => (
              <span key={b} className={"badge " + b.toLowerCase()}>
                {b === "Soon" ? "Coming Soon" : b}
              </span>
            ))}
            <span className="badge">{game.year}</span>
          </div>
          <div className="title-block">
            <div className="title-text">
              <div className="title">{game.title}</div>
              <div className="tagline">{game.tagline}</div>
            </div>
            <div className="arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
