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
            <div className="art-card-title">Ideas into<br /><em>software.</em></div>
            <div className="art-card-bottom"><span>SOFTWARE · SYSTEMS</span><span>2026 — ∞</span></div>
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
            <p className="eyebrow"><span className="eyebrow-line" /> Project highlights</p>
            <h2>Selected <em>projects.</em></h2>
          </div>
          <a className="section-link" href="#/work">All projects <span aria-hidden="true">↗</span></a>
        </div>
        <Projects compact />
      </section>

      <section className="content-section home-about-section">
        <div className="home-about-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> The engineer behind the product</p>
          <h2>Thoughtful by nature.<br /><em>Curious by default.</em></h2>
          <p>I&apos;m Enock, a software engineer, systems analyst, and designer in Nairobi. I turn complex needs into useful products across frontend, backend, AI, cloud, and data.</p>
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
        <h1>Projects with<br /><em>purpose.</em></h1>
        <p className="page-intro-copy">A selection of product and software work, from e-commerce and property tech to end-to-end digital experiences.</p>
      </section>
      <section className="content-section work-list-section">
        <Projects />
        <div className="more-work-card">
          <span className="more-work-mark" aria-hidden="true">+</span>
          <div>
            <p className="eyebrow">Beyond the featured work</p>
            <h2>More products, software projects<br />&amp; technical explorations.</h2>
            <p>I&apos;m open to projects involving AI, cloud infrastructure, and data systems. Get in touch if you&apos;d like to talk through a challenge.</p>
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
        <h1>Engineer from idea<br /><em>to deployment.</em></h1>
        <p className="page-intro-copy">I&apos;m a software engineer, systems analyst, and designer based in Nairobi, Kenya. I connect business needs, system requirements, and user experience to build useful software.</p>
      </section>
      <section className="content-section about-detail-section">
        <div className="about-story">
          <p className="eyebrow"><span className="eyebrow-line" /> My approach</p>
          <h2>Good software starts with a <em>real problem.</em></h2>
          <p>Great software needs more than a polished interface: it needs sound architecture, dependable data, and code that can evolve. I work across frontend and backend development, AI, cloud, and database systems to build products end to end.</p>
          <p>From understanding the problem to shipping and refining the solution, I focus on practical engineering that stays reliable as products grow.</p>
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
