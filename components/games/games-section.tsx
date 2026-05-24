"use client";

import type { Game } from "@/lib/games";
import { GameCard } from "./game-card";

type Props = {
  id: string;
  index?: string;
  title: string;
  lede: string;
  games: Game[];
  dark?: boolean;
  featuredFirst?: boolean;
  onOpenGame: (game: Game, opener?: HTMLElement | null) => void;
};

export function GamesSection({
  id,
  index,
  title,
  lede,
  games,
  dark,
  featuredFirst,
  onOpenGame,
}: Props) {
  return (
    <section id={id} className={"games-section" + (dark ? " section--dark" : "")}>
      <div className="section-pad">
        <div className="section-head games-head">
          {index && <div className="section-index" aria-hidden>{index}</div>}
          <h2>{title}</h2>
          <p className="lede">{lede}</p>
        </div>
        <div className={"games-grid" + (featuredFirst ? " featured-first" : "")}>
          {games.map((g) => (
            <GameCard key={g.id} game={g} onClick={onOpenGame} />
          ))}
        </div>
      </div>
    </section>
  );
}
