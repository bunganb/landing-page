export function MottoStrip({ motto = "simple joy for everyone" }: { motto?: string }) {
  const items = Array(8).fill(motto);
  return (
    <div className="motto-strip">
      <div className="motto-track">
        {items.map((m, i) => (
          <span key={i}>
            {m}
            <span className="star">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="currentColor">
                <path d="M22 0 L26 18 L44 22 L26 26 L22 44 L18 26 L0 22 L18 18 Z" />
              </svg>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
