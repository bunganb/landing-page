import { LogoMark } from "./logo";

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="logo" href="#top">
              <LogoMark />
              hagegames
            </a>
            <p>Tiny studio. Big feelings. Simple joy for everyone, since 2019.</p>
            <div className="socials">
              <a href="https://www.instagram.com/havengrind/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://discord.gg/sSq6PdBZb" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.27 5.33a17.4 17.4 0 0 0-4.27-1.32l-.2.39a16.06 16.06 0 0 0-5.6 0l-.2-.39A17.4 17.4 0 0 0 4.73 5.33C2.06 9.26 1.33 13.1 1.7 16.88a17.55 17.55 0 0 0 5.36 2.7c.43-.6.82-1.23 1.16-1.9-.64-.24-1.25-.54-1.83-.9.15-.11.3-.22.44-.34a12.5 12.5 0 0 0 10.74 0c.14.12.29.23.44.34-.58.36-1.19.66-1.83.9.34.67.73 1.3 1.16 1.9a17.55 17.55 0 0 0 5.36-2.7c.44-4.39-.74-8.19-3.43-11.55ZM8.52 14.45c-1.06 0-1.93-.97-1.93-2.16 0-1.18.85-2.16 1.93-2.16 1.08 0 1.95.98 1.93 2.16 0 1.19-.85 2.16-1.93 2.16Zm6.96 0c-1.06 0-1.93-.97-1.93-2.16 0-1.18.85-2.16 1.93-2.16 1.08 0 1.95.98 1.93 2.16 0 1.19-.85 2.16-1.93 2.16Z" />
                </svg>
              </a>
              <a href="https://hagegames.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/hagegames/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Developed</h5>
            <ul>
              <li><a href="#developed">Zero One</a></li>
              <li><a href="#developed">Ice Tea</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Published</h5>
            <ul>
              <li><a href="#published">Hungry Cats</a></li>
              <li><a href="hagegames.com">Send your game</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Game Porting</a></li>
              <li><a href="#services">IP Licensing</a></li>
              <li><a href="#services">Game Development</a></li>
              <li><a href="#services">Gamification</a></li>
              <li><a href="#services">VR / AR</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#studio">About</a></li>
              <li><a href="mailto:havengrind@gmail.com?subject=Hage%20Careers">Careers</a></li>
              <li><a href="mailto:havengrind@gmail.com">havengrind@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 hagegames · Sidoarjo, Indonesia</span>
          <span>simple joy for everyone</span>
        </div>
      </div>
    </footer>
  );
}
