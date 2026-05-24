import type { PlatformKind } from "@/lib/games";

export function PlatformIcon({
  kind,
  size = 14,
}: {
  kind: PlatformKind;
  size?: number;
}) {
  const s = size;
  switch (kind) {
    case "steam":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="15" cy="10" r="2.5" />
          <line x1="14" y1="12" x2="9" y2="16" />
          <circle cx="8" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "play":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3 L18 12 L5 21 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "apple":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c-.5 1.5-2 2.5-3.5 2.5-.5-2 1-3.5 3.5-2.5zM12 8c2 0 3-1 5-1 1.5 0 3 1 4 2.5-3 2-2.5 6 1 7.5-1 2-2.5 4-4 4-1 0-1.5-.5-3-.5s-2 .5-3 .5c-1.5 0-3-2-4-4-2-3-2-7 1-9 1.5-1 3-1 3 0z" />
        </svg>
      );
    case "switch":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="9" height="18" rx="2" />
          <rect x="13" y="3" width="9" height="18" rx="2" />
          <circle cx="6.5" cy="8" r="1" fill="currentColor" />
          <circle cx="17.5" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    case "web":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />
        </svg>
      );
    case "trailer":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="16" height="12" rx="2" />
          <path d="M18 10 L22 7 L22 17 L18 14 Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
