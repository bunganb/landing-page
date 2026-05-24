import Image from "next/image";

export function StudioStrip() {
  return (
    <section id="studio" className="section--cream2 studio-cta">
      <div className="section-pad">
        <div className="studio-cta-inner">
          <div className="studio-cta-glyph" aria-hidden>
            <Image
              src="/logo.png"
              alt=""
              width={1100}
              height={281}
              className="studio-cta-wordmark"
            />
          </div>
          <h2 className="studio-cta-title">
            Have a game, an idea, or just a hello? <span className="accent">Send it our way.</span>
          </h2>
          <p className="studio-cta-lede">
            We co-fund, co-publish, port, license, and build joyful games from scratch. Drop a note, we read everything.
          </p>
          <div className="studio-cta-row">
            <a className="btn btn-primary" href="mailto:havengrind@gmail.com?subject=Hello%20hagegames">
              Say hello
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
