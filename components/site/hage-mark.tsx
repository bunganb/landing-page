type Props = { className?: string };

export function HageMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 228 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 0 L14 0 L14 22 L34 22 L34 0 L48 0 L48 56 L34 56 L34 34 L14 34 L14 56 L0 56 Z M84 0 L108 56 L60 56 Z M84 22 L99 50 L69 50 Z M120 0 L168 0 L168 56 L120 56 Z M134 14 L168 14 L168 24 L148 24 L148 36 L168 36 L168 42 L134 42 Z M180 0 L228 0 L222 14 L180 14 Z M180 21 L224 21 L218 35 L180 35 Z M180 42 L222 42 L216 56 L180 56 Z"
      />
    </svg>
  );
}
