"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Game } from "@/lib/games";
import { DEVELOPED_GAMES, PUBLISHED_GAMES, byId } from "@/lib/games";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { GamesSection } from "@/components/games/games-section";
import { MottoStrip } from "@/components/site/motto-strip";
import { Services } from "@/components/site/services";
import { StudioStrip } from "@/components/site/studio-strip";
import { SiteFooter } from "@/components/site/footer";
import { GameModal } from "@/components/games/game-modal";

function readGameFromURL(): Game | null {
  if (typeof window === "undefined") return null;
  const slug = new URLSearchParams(window.location.search).get("game");
  return slug ? byId(slug) ?? null : null;
}

export default function HomePage() {
  const [openGame, setOpenGame] = useState<Game | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  // Hydrate from URL on first paint + handle browser back/forward
  useEffect(() => {
    setOpenGame(readGameFromURL());
    const onPop = () => setOpenGame(readGameFromURL());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const openGameWithUrl = useCallback((game: Game, opener?: HTMLElement | null) => {
    openerRef.current = opener ?? null;
    setOpenGame(game);
    const url = new URL(window.location.href);
    url.searchParams.set("game", game.id);
    window.history.pushState({ game: game.id }, "", url.toString());
  }, []);

  const closeGame = useCallback(() => {
    setOpenGame(null);
    if (
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).has("game")
    ) {
      const url = new URL(window.location.href);
      url.searchParams.delete("game");
      window.history.pushState({}, "", url.pathname + url.hash);
    }
    queueMicrotask(() => {
      openerRef.current?.focus();
      openerRef.current = null;
    });
  }, []);

  const openById = useCallback(
    (id: string, opener?: HTMLElement | null) => {
      const g = byId(id);
      if (g) openGameWithUrl(g, opener);
    },
    [openGameWithUrl]
  );

  const jump = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero dark onOpenGame={openById} onJump={jump} />
        <GamesSection
          id="developed"
          index="01"
          title="Games we made with our own hands."
          lede="Playful little experiences made to bring simple joy to everyone."
          games={DEVELOPED_GAMES}
          onOpenGame={openGameWithUrl}
        />
        <MottoStrip />
        <GamesSection
          id="published"
          index="02"
          title="Indie games we found, fell in love with, and helped ship."
          lede="We co-fund, co-market, and co-ship games from teams of one to ten. If you've got a joyful prototype, send it our way."
          games={PUBLISHED_GAMES}
          onOpenGame={openGameWithUrl}
        />
        <Services />
        <StudioStrip />
      </main>
      <SiteFooter />
      <GameModal game={openGame} onClose={closeGame} />
    </>
  );
}
