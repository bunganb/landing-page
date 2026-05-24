import type { ServiceIconKind } from "@/lib/games";

export function ServiceIcon({ kind }: { kind: ServiceIconKind }) {
  switch (kind) {
    case "port":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="14" height="20" rx="2" />
          <rect x="17" y="10" width="12" height="16" rx="2" />
          <path d="M11 13 l-2 3 l2 3 M21 13 l2 3 l-2 3" />
        </svg>
      );
    case "license":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="6" width="22" height="20" rx="2" />
          <circle cx="12" cy="14" r="3" />
          <path d="M19 12 h5 M19 17 h5 M9 22 h14" />
        </svg>
      );
    case "dev":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 9 L4 16 L10 23 M22 9 L28 16 L22 23 M18 7 L14 25" />
        </svg>
      );
    case "gamify":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="14" r="9" />
          <path d="M16 8 L17.5 12 L22 12 L18 14.5 L19.5 18.5 L16 16 L12.5 18.5 L14 14.5 L10 12 L14.5 12 Z" fill="currentColor" stroke="none" />
          <path d="M11 22 L9 28 L16 25 L23 28 L21 22" />
        </svg>
      );
    case "vr":
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="10" width="26" height="14" rx="3" />
          <circle cx="10" cy="17" r="3" />
          <circle cx="22" cy="17" r="3" />
          <path d="M16 14 v6" />
        </svg>
      );
    default:
      return null;
  }
}
