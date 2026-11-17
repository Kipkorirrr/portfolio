import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Starfield from "./components/Starfield";
import AnimatedTitle from "./components/AnimatedTitle";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

type Page = "home" | "work" | "about" | "contact";

const navigation: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Work", page: "work" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

function getPageFromHash(): Page {
  const page = window.location.hash.replace(/^#\/?/, "");
  return page === "work" || page === "about" || page === "contact" ? page : "home";
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <AnimatedTitle />
          <div className="hero-actions">
            <a className="button button-primary" href="#/work">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#/about">A little about me <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract interface illustration">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-coordinate">01°17&apos; S&nbsp; 36°49&apos; E</div>
          <div className="art-card">
            <div className="art-card-top"><span>FIELD NOTES / 001</span><span>✳</span></div>
            <div className="art-card-title">Ideas into<br /><em>interfaces.</em></div>
            <div className="art-card-bottom"><span>DESIGN · ENGINEERING</span><span>2026 — ∞</span></div>
          </div>
          <div className="art-caption"><span className="status-dot" /> Available for select projects</div>
        </div>
        <a className="scroll-cue" href="#home-work"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
      </section>

      <section className="content-section home-stack-section">
        <TechStack compact />
      </section>

      <section id="home-work" className="content-section home-projects-section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> A few things I&apos;ve worked on</p>
            <h2>Selected <em>work.</em></h2>
          </div>
          <a className="section-link" href="#/work">All projects <span aria-hidden="true">↗</span></a>
        </div>
        <Projects compact />
      </section>

      <section className="content-section home-about-section">
        <div className="home-about-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> The person behind the pixels</p>
          <h2>Thoughtful by nature.<br /><em>Curious by default.</em></h2>
          <p>I&apos;m Enock, an independent developer in Nairobi. I build useful digital products with a little character and a lot of care.</p>
          <a className="text-link" href="#/about">More about me <span aria-hidden="true">↗</span></a>
        </div>
        <div className="home-about-stamp" aria-hidden="true"><span>GOOD IDEAS<br />TAKE SHAPE</span><strong>✳</strong><small>NAIROBI · KE</small></div>
      </section>

      <section className="content-section home-contact-section">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Have something in mind?</p>
          <h2>Let&apos;s make it<br /><em>happen.</em></h2>
        </div>
        <a className="button button-primary" href="#/contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </section>
    </>
  );
}

function WorkPage() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> The portfolio</p>
        <h1>Made with<br /><em>purpose.</em></h1>
        <p className="page-intro-copy">A selection of e-commerce and product work. More projects and contributions are always in progress.</p>
      </section>
      <section className="content-section work-list-section">
        <Projects />
        <div className="more-work-card">
          <span className="more-work-mark" aria-hidden="true">+</span>
          <div>
            <p className="eyebrow">Beyond the featured work</p>
            <h2>More stores, side projects<br />&amp; community contributions.</h2>
            <p>I&apos;ve worked across more e-commerce apps and contributed to projects beyond this selection. Get in touch if you&apos;d like to hear more.</p>
          </div>
          <a className="text-link" href="#/contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="page-intro about-page-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> About Enock</p>
        <h1>Build with care.<br /><em>Stay curious.</em></h1>
        <p className="page-intro-copy">I&apos;m an independent developer based in Nairobi, Kenya, turning ideas into considered digital experiences.</p>
      </section>
      <section className="content-section about-detail-section">
        <div className="about-story">
          <p className="eyebrow"><span className="eyebrow-line" /> My approach</p>
          <h2>Good digital work should feel <em>effortless.</em></h2>
          <p>I care about the details that make a product easier to use and more enjoyable to return to. My work brings thoughtful interface design together with practical engineering—from an early idea through to a finished experience.</p>
          <p>Inspired by cosmic symbolism and the small surprises in everyday life, I aim for work that feels original without getting in the way.</p>
        </div>
        <Philosophy />
      </section>
      <section className="content-section about-services-section">
        <WhatIDo />
      </section>
      <section className="content-section about-stack-section">
        <TechStack />
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="page-intro contact-page-intro">
        <p className="eyebrow"><span className="eyebrow-line" /> Contact</p>
        <h1>Have a good one<br /><em>in mind?</em></h1>
        <p className="page-intro-copy">Tell me what you&apos;re working on. I&apos;m always happy to talk through a thoughtful idea or a new collaboration.</p>
      </section>
      <section className="content-section contact-page-section">
        <Contact />
      </section>
    </>
  );
}

function PageContent({ page }: { page: Page }) {
  switch (page) {
    case "work":
      return <WorkPage />;
    case "about":
      return <AboutPage />;
    case "contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const updatePage = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <Starfield />
        <header className="site-header">
          <a className="brand" href="#/home" aria-label="Enock Kipkorir, home">
            <img className="brand-avatar" src={`${import.meta.env.BASE_URL}profile-photo.jpg`} alt="" />
            <span className="brand-name">Enock Kipkorir</span>
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.page}
                href={`#/${item.page}`}
                aria-current={page === item.page ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-contact" href="#/contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </header>

        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={page}
            className="page-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <PageContent page={page} />
          </motion.main>
        </AnimatePresence>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Enock Kipkorir</span>
          <SocialLinks compact />
          <a href="#/home" className="footer-top-link">Back to top ↑</a>
        </footer>
      </div>
    </MotionConfig>
  );
}
