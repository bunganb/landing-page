"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ART } from "@/components/games/art";
import { ALL_GAMES, type Game } from "@/lib/games";

type Props = {
  dark?: boolean;
  onOpenGame: (id: string) => void;
  onJump: (id: string) => void;
};

export function Hero({ dark = true, onOpenGame, onJump }: Props) {
  const games: Game[] = ALL_GAMES;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 28 },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  const current = games[selected] ?? games[0];
  const platformLabel = current?.platforms
    .slice(0, 3)
    .map((p) => p.toUpperCase())
    .join(" · ");

  return (
    <section id="top" className={"hero " + (dark ? "" : "light")}>
      <div className="hero-inner">
        <div>
          <span className="hero-eyebrow">
            <span className="dot" />
            spotlight: {current?.title?.toLowerCase()}
          </span>
          <h1>
            <span>We make games that bring </span>
            <span className="accent squiggle">simple joy</span>
            <span> to everyone.</span>
          </h1>
          <p className="hero-sub">
            Haven Grind is a creative studio building games, apps, and digital experiences with passion, curiosity, and joy.
          </p>
          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => current && onOpenGame(current.id)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M3 2 L12 7 L3 12 Z" />
              </svg>
              View {current?.title ?? "game"}
            </button>
            <button className="btn btn-ghost" onClick={() => onJump("developed")}>
              See all games
            </button>
          </div>
        </div>
        <div className="hero-stage-wrap">
          <div className="hero-stage hero-stage-carousel">
            <div className="hero-embla" ref={emblaRef}>
              <div className="hero-embla-track">
                {games.map((g) => {
                  const Art = ART[g.art];
                  return (
                    <div className="hero-embla-slide" key={g.id}>
                      <div className="hero-slide-art">{Art ? <Art /> : null}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="game-chrome">
              <div className="chrome-top">
                <span>{current?.title?.toUpperCase()}</span>
                <span className="live">
                  <span className="pulse" />
                  {selected + 1} / {games.length}
                </span>
              </div>
              <div className="chrome-bottom">
                <div>
                  <div className="game-title">{current?.title}</div>
                  <div className="game-meta">{platformLabel}</div>
                </div>
                <button
                  className="play-btn"
                  onClick={() => current && onOpenGame(current.id)}
                  aria-label={`View ${current?.title} details`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#1A1A1A">
                    <path d="M5 3 L16 10 L5 17 Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {games.length > 1 && (
            <div className="hero-stage-dots" role="tablist" aria-label="Featured games">
              {games.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={i === selected}
                  aria-label={`Show ${g.title}`}
                  onClick={() => scrollTo(i)}
                  className={
                    "hero-stage-dot" + (i === selected ? " is-active" : "")
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
