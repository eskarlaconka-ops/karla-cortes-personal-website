import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, ExternalLink, Menu, X } from 'lucide-react';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Scholarship', href: '#scholarship' },
  { label: 'Background', href: '#background' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#main" data-testid="link-skip-content">Skip to content</a>

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Karla Cortés home" onClick={closeMenu} data-testid="link-home">
          <span className="wordmark-seal">KC</span>
          <span className="wordmark-name">Karla Cortés <small>Communication · MSU</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation" data-testid="navigation-primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu} data-testid="link-nav-contact">Get in touch <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow reveal"><span className="eyebrow-dot" /> A scholar of communication & belonging</p>
            <h1 id="hero-title" className="serif reveal reveal-delay" data-testid="text-hero-title">How we stay<br />connected <em>across</em><br /><em>change.</em></h1>
            <p className="hero-intro reveal reveal-delay-2" data-testid="text-hero-intro">
              I’m Karla Y. Cortés Vázquez, an M.A. student in Communication at Michigan State University. I’m interested in the conversations, relationships, and cultural contexts that shape how people find their footing.
            </p>
            <div className="hero-actions reveal reveal-delay-2">
              <a className="button-primary" href="#research" data-testid="link-explore-research">Explore my research <ArrowDown size={16} /></a>
              <a className="text-link" href="mailto:cortesk1@msu.edu" data-testid="link-email-hero">Say hello <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-note">
              <span className="note-rule" />
              <span className="mono">CURRENTLY THINKING ABOUT</span>
              <span>Family communication · cross-cultural transitions · student wellbeing</span>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-wash" aria-hidden="true" />
            <figure className="portrait-frame">
              <img src={`${import.meta.env.BASE_URL}images/karla-cortes-profile.jpg`} alt="Karla Y. Cortés Vázquez in her graduation stole, standing beneath flowering branches" data-testid="img-profile" />
              <figcaption><span className="caption-mark" aria-hidden="true" /> East Lansing, Michigan <span className="caption-dot">/</span> MSU</figcaption>
            </figure>
            <div className="portrait-stamp" aria-hidden="true"><span>PEOPLE</span><span>IN</span><span>CONTEXT</span></div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About Karla" data-testid="link-scroll-about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <section className="intro-band" id="about">
          <div className="section-index mono">01 <span>—</span> A LITTLE CONTEXT</div>
          <div className="intro-grid">
            <h2 className="serif">Communication is<br />never just <em>words.</em></h2>
            <div className="intro-text">
              <p className="lead">It’s the way we make meaning together: at home, across cultures, and in the moments when life asks us to begin again.</p>
              <p>My interests bring family communication into conversation with cross-cultural and intercultural communication, Latin American studies, and student wellbeing. I’m drawn to questions that make room for the full context of a person’s life—not just the moment they’re in.</p>
              <a className="inline-link" href="https://clstudies.msu.edu/directory/directory-cortes.html" target="_blank" rel="noreferrer" data-testid="link-msu-directory-about">
                Meet me through MSU Chicano/Latino Studies <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="topic-ribbon" aria-label="Research interests">
            <span>Family communication</span><i />
            <span>Intercultural life</span><i />
            <span>Latin American studies</span><i />
            <span>Student wellbeing</span>
          </div>
        </section>

        <section className="research-section" id="research">
          <div className="section-index mono">02 <span>—</span> THE QUESTIONS I FOLLOW</div>
          <div className="research-heading">
            <h2 className="serif">When home feels<br /><em>different.</em></h2>
            <p>Study abroad is often described as a journey with a clear ending. But returning home can be its own profound transition—one that deserves more attention.</p>
          </div>
          <div className="thesis-card">
            <div className="thesis-side">
            <span className="status-pill" data-testid="status-thesis"><span /> THESIS · IN PROGRESS</span>
              <span className="thesis-number mono">01 / 01</span>
              <div className="orbit-art" aria-hidden="true">
                <span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="orbit orbit-c" />
                <span className="orbit-center">home<br />and away</span>
              </div>
              <span className="thesis-caption mono">REENTRY AS A RELATIONAL EXPERIENCE</span>
            </div>
            <div className="thesis-copy">
              <p className="eyebrow">M.A. thesis research</p>
              <h3 className="serif" data-testid="text-thesis-title">Reentry shock, revisited<br /><em>within a new community</em></h3>
              <p className="thesis-deck">Family communication and psychological wellbeing among Latin American students returning from study abroad.</p>
              <p>This work in progress examines how family communication patterns and social support relate to psychological wellbeing during reentry. Rather than treating the return home as the end of an international experience, the project asks what it means to reconnect with family and familiar cultural surroundings after being changed by time abroad.</p>
              <div className="question-box">
                <BookOpen size={18} strokeWidth={1.5} />
                <p><strong>The question underneath:</strong> How might communication within families shape the support students experience as they navigate the transition home?</p>
              </div>
              <a
                className="inline-link"
                href={`${import.meta.env.BASE_URL}downloads/featured-study-proposal.pdf`}
                download
                data-testid="link-featured-study-pdf"
              >
                Read the thesis proposal draft (PDF) <ArrowUpRight size={15} />
              </a>
              <span className="work-note mono" data-testid="text-thesis-status">A developing inquiry · no findings reported</span>
            </div>
          </div>
          <div className="research-footnote"><span className="footnote-line" /> Grounded in Family Communication Patterns Theory and attentive to the cultural contexts that shape family life.</div>
        </section>

        <section className="lenses-section" aria-labelledby="lenses-title">
          <div className="lenses-top">
            <div className="section-index mono">03 <span>—</span> A FEW LENSES</div>
            <p className="lenses-aside">The questions change with the context. These are some of the perspectives I return to.</p>
          </div>
          <h2 className="serif" id="lenses-title">Many ways to<br /><em>understand a story.</em></h2>
          <div className="lens-list">
            <article className="lens-row">
              <span className="lens-index mono">01</span><h3 className="serif">Family communication</h3>
              <p>How do patterns of conversation and family connection shape the support people can draw on?</p>
              <span className="lens-symbol" aria-hidden="true">↗</span>
            </article>
            <article className="lens-row">
              <span className="lens-index mono">02</span><h3 className="serif">Cross-cultural transitions</h3>
              <p>What happens when the place we return to feels familiar—and unfamiliar—at once?</p>
              <span className="lens-symbol" aria-hidden="true">↗</span>
            </article>
            <article className="lens-row">
              <span className="lens-index mono">03</span><h3 className="serif">Wellbeing & support</h3>
              <p>How do relationships and social support intersect with psychological wellbeing through change?</p>
              <span className="lens-symbol" aria-hidden="true">↗</span>
            </article>
            <article className="lens-row">
              <span className="lens-index mono">04</span><h3 className="serif">Latin American contexts</h3>
              <p>How can communication research make space for experiences and contexts too often left at the margins?</p>
              <span className="lens-symbol" aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section className="scholarship-section" id="scholarship">
          <div className="section-index mono">04 <span>—</span> IN THE CONVERSATION</div>
          <div className="scholarship-grid">
            <div>
              <h2 className="serif">Research is<br />a <em>conversation.</em></h2>
              <p className="scholarship-intro">A small snapshot of collaborative scholarship and work currently moving through the field.</p>
            </div>
            <div className="talks">
              <article className="talk-item" data-testid="card-nca-presentation">
                <div className="talk-meta"><span className="mono">NCA · 2026</span><span className="talk-status accepted">Accepted</span></div>
                <h3>Moving From Desegregation to DEI Retrenchment: Structural Parallels in the Marginalization of Black Educators in U.S. Educational Institutions</h3>
                <p>With S. Spates and D. Lana · National Communication Association annual conference, New Orleans.</p>
                <span className="talk-footnote">Presentation accepted · scheduled for November 2026</span>
              </article>
              <article className="talk-item" data-testid="card-ica-submission">
                <div className="talk-meta"><span className="mono">ICA · 2027</span><span className="talk-status submitted">Submitted</span></div>
                <h3>Perceptions of Communication About Career Expectations: When Parents (Dis)agree</h3>
                <p>With Y. Zhang, E. Dorrance-Hall, and M. Ma · Extended abstract submitted to the International Communication Association annual conference, Glasgow.</p>
                <span className="talk-footnote">Extended abstract submitted · decision pending</span>
              </article>
              <p className="status-legend"><span className="legend-dot" /> Status is listed as it stands; submission is not acceptance or publication.</p>
            </div>
          </div>
        </section>

        <section className="background-section" id="background">
          <div className="section-index mono">05 <span>—</span> THE PATH SO FAR</div>
          <div className="background-grid">
            <div className="background-intro">
              <h2 className="serif">A path shaped<br />by <em>curiosity.</em></h2>
              <p>Each chapter has offered another way to think about people, culture, and the ties that connect them.</p>
              <a
                id="cv"
                className="inline-link"
                href={`${import.meta.env.BASE_URL}downloads/karla-cortes-cv.pdf`}
                download
                data-testid="link-download-cv"
              >
                Download my CV (PDF) <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="timeline">
              <article className="timeline-item" data-testid="card-education-masters">
                <span className="timeline-date mono">2025 —</span>
                <div><h3>M.A. in Communication</h3><p>Michigan State University · College of Communication Arts & Sciences</p><span className="timeline-detail">Started August 2025</span></div>
              </article>
              <article className="timeline-item" data-testid="card-education-bachelors">
                <span className="timeline-date mono">2025</span>
                <div><h3>B.A. in Psychology</h3><p>Michigan State University</p><span className="timeline-detail">Minor in International Development · May 2025</span></div>
              </article>
              <article className="timeline-item" data-testid="card-education-study-abroad">
                <span className="timeline-date mono">2024</span>
                <div><h3>Study abroad</h3><p>Yonsei University · Seoul, South Korea</p><span className="timeline-detail">Certificate in Study Abroad</span></div>
              </article>
              <article className="timeline-item" data-testid="card-education-precollege">
                <span className="timeline-date mono">2019</span>
                <div><h3>Pre-college program</h3><p>Barnard College, Columbia University · New York City</p><span className="timeline-detail">Certificate · July 2019</span></div>
              </article>
            </div>
          </div>
          <div className="campus-note"><span className="campus-mark" aria-hidden="true" /><span>Currently learning, asking better questions, and finding community in East Lansing.</span><span className="mono">MICHIGAN STATE UNIVERSITY</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-ornament" aria-hidden="true"><span /><span /><span /></div>
          <div className="section-index mono">06 <span>—</span> KEEP THE CONVERSATION GOING</div>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Questions, ideas, or a shared curiosity?</p>
              <h2 className="serif">I’d love to<br /><em>hear from you.</em></h2>
            </div>
            <div className="contact-details">
              <p>Whether your work touches family communication, intercultural life, or student wellbeing, I’m glad to connect.</p>
              <a className="contact-email" href="mailto:cortesk1@msu.edu" data-testid="link-email-contact">cortesk1@msu.edu <ArrowUpRight size={19} /></a>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/karla-cortes-274b43359/" target="_blank" rel="noreferrer" data-testid="link-linkedin">LinkedIn <ExternalLink size={14} /></a>
                <a href="https://clstudies.msu.edu/directory/directory-cortes.html" target="_blank" rel="noreferrer" data-testid="link-msu-directory-contact">MSU directory <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-mark" href="#top" data-testid="link-footer-home">KC<span>.</span></a>
        <span>Made with curiosity in East Lansing, Michigan.</span>
        <a href="#top" className="back-to-top" data-testid="link-back-to-top">Back to top <ArrowRight size={14} /></a>
        <span className="footer-year mono">KARLA Y. CORTÉS VÁZQUEZ · MSU</span>
      </footer>
    </div>
  );
}

export default App;
