import { SERVICES } from "@/lib/games";
import { ServiceIcon } from "@/components/games/service-icons";

const TONE = ["feature", "blush", "rose", "ink", "cream"] as const;
const SPAN = ["span-7", "span-5", "span-4", "span-4", "span-4"] as const;

export function Services() {
  return (
    <section id="services" className="section--dark">
      <div className="section-pad">
        <div className="section-head services-head">
          <h2>Beyond our own titles, we help others ship joy.</h2>
          <p className="lede" style={{ color: "#99A1AF" }}>
            Five focused services, all built on the same craft we use for our own games. Bring us a brief, a port, a brand, or a bonkers idea.
          </p>
        </div>
        <div className="services-bento">
          {SERVICES.map((s, i) => (
            <article
              className={`service-card service-card--${TONE[i]} ${SPAN[i]}`}
              key={s.num}
            >
              <span className="service-watermark" aria-hidden>{s.num}</span>
              <div className="service-inner">
                <div className="service-meta">
                  <span className="service-counter">{s.num} of 05</span>
                  <span className="icon-box">
                    <ServiceIcon kind={s.icon} />
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <a
                  className="learn"
                  href={`mailto:havengrind@gmail.com?subject=Service%20inquiry%3A%20${encodeURIComponent(s.title)}`}
                >
                  Contact us
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
