import Image from "next/image";
import type { ArtKind } from "@/lib/games";

function ZeroOne() {
  return (
    <Image
      src="/zero-one.gif"
      alt=""
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      style={{ objectFit: "cover" }}
      unoptimized
    />
  );
}

function Cats() {
  return (
    <Image
      src="/cats.png"
      alt=""
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      style={{ objectFit: "cover" }}
      unoptimized
    />
  );
}

function IceTea() {
  return (
    <Image
      src="/ice-tycoon.png"
      alt=""
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      style={{ objectFit: "cover" }}
      unoptimized
    />
  );
}

export const ART: Record<ArtKind, React.ComponentType> = {
  "zero-one": ZeroOne,
  "ice-tea": IceTea,
  cats: Cats,
};

export function HeroStage() {
  return (
    <div className="scene">
      
      <div className="scene-sun" />
      <div className="scene-cloud" style={{ top: "14%", width: 90, height: 24, animationDelay: "-2s" }} />
      <div className="scene-cloud" style={{ top: "22%", width: 60, height: 18, animationDelay: "-7s", animationDuration: "20s", opacity: 0.7 }} />
      <div className="scene-sparkle" style={{ top: "20%", left: "60%" }} />
      <div className="scene-sparkle" style={{ top: "35%", left: "78%", animationDelay: "-0.6s", width: 10, height: 10 }} />
      <div className="scene-sparkle" style={{ top: "50%", left: "20%", animationDelay: "-1s", width: 8, height: 8 }} />
      <div className="scene-coin" style={{ bottom: "28%", left: "58%" }} />
      <div className="scene-coin" style={{ bottom: "24%", left: "74%", animationDelay: "-1.2s" }} />
      <div className="scene-char">
        <svg viewBox="-80 -90 160 180" style={{ width: "100%", height: "100%", overflow: "visible" }}>
          <ellipse cx="0" cy="20" rx="50" ry="44" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3" />
          <ellipse cx="0" cy="30" rx="28" ry="22" fill="#FFD5B5" />
          <path d="M-32,-25 Q-42,-45 -20,-38 Z" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3" />
          <path d="M32,-25 Q42,-45 20,-38 Z" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3" />
          <path d="M-31,-26 Q-36,-38 -24,-36 Z" fill="#E4B1C1" />
          <path d="M31,-26 Q36,-38 24,-36 Z" fill="#E4B1C1" />
          <ellipse cx="-13" cy="2" rx="4" ry="5" fill="#1A1A1A" />
          <ellipse cx="13" cy="2" rx="4" ry="5" fill="#1A1A1A" />
          <circle cx="-12" cy="0" r="1.2" fill="#FFFFFF" />
          <circle cx="14" cy="0" r="1.2" fill="#FFFFFF" />
          <ellipse cx="-20" cy="14" rx="7" ry="4" fill="#D64E74" opacity="0.55" />
          <ellipse cx="20" cy="14" rx="7" ry="4" fill="#D64E74" opacity="0.55" />
          <path d="M-5,14 Q0,20 5,14" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="bob" style={{ position: "absolute", bottom: "14%", right: "20%", width: 48, height: 48 }}>
        <svg viewBox="-30 -30 60 60" style={{ width: "100%", height: "100%" }}>
          <ellipse cx="0" cy="0" rx="22" ry="20" fill="#D64E74" stroke="#1A1A1A" strokeWidth="2.5" />
          <circle cx="-7" cy="-3" r="3" fill="#FFFFFF" />
          <circle cx="7" cy="-3" r="3" fill="#FFFFFF" />
          <circle cx="-6" cy="-3" r="1.2" fill="#1A1A1A" />
          <circle cx="8" cy="-3" r="1.2" fill="#1A1A1A" />
          <path d="M-5,6 Q0,10 5,6" fill="none" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M-18,-15 L-24,-22 M18,-15 L24,-22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
