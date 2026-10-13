import softwareImage from "../capability-software.png";
import aiImage from "../capability-ai.png";
import mobileImage from "../capability-mobile.png";

import { ArrowRight, BrainCircuit, Code2, Layers3, Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    title: "Custom Software Development",
    text: "Full-stack web applications, SaaS platforms, and APIs built with React, Node.js, TypeScript, and modern cloud infrastructure.",
    icon: Code2,
    image: softwareImage,
  },
  {
    title: "AI Product Development",
    text: "LLM-powered assistants, intelligent automation, and AI features that turn your data into measurable business value.",
    icon: BrainCircuit,
    image: aiImage,
  },
  {
    title: "Mobile & Cloud Solutions",
    text: "Cross-platform mobile apps, cloud architecture, DevOps, and integrations that keep products fast, secure, and scalable.",
    icon: Layers3,
    image: mobileImage,
  },
];

const process = [
  ["Discover & strategy", "We learn your goals, users, and market, and define what a successful product looks like."],
  ["Design & architecture", "We shape the user experience, choose the right technology, and agree on a clear roadmap."],
  ["Build & iterate", "We deliver in short, transparent cycles with working software, regular demos, and direct feedback."],
  ["Launch & support", "We deploy, monitor, and keep improving the product as your business grows."],
];

const principles = [
  ["Senior expertise", "Experienced engineers who take ownership of outcomes, not just tickets."],
  ["Practical AI", "We apply AI where it creates real value, and we tell you honestly when it doesn't."],
  ["Built to last", "Clean architecture, documentation, and source code that you fully own."],
  ["Transparent partnership", "Honest estimates, regular updates, and direct access to the people doing the work."],
];

export default function CompanyIntro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="intro-page simple-intro">
      <nav className="simple-nav">
        <Link to="/" className="simple-brand" onClick={closeMenu}>
          <span className="simple-mark">∞</span>
          <span><strong>Infinity Labs</strong><small>Technologies LLC</small></span>
        </Link>

        <div className={`simple-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#why-us" onClick={closeMenu}>Why Us</a>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/contact" className="simple-mobile-action" onClick={closeMenu}>Start a project</Link>
        </div>

        <div className="simple-nav-actions">
          <Link to="/contact" className="simple-nav-action">Start a project<ArrowRight size={15} /></Link>
        </div>
        <button className="simple-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <section className="simple-hero" id="company">
        <div className="simple-hero-image" />
        <div className="simple-hero-shade" />
        <div className="simple-hero-content">
          <span className="simple-eyebrow">SOFTWARE & AI PRODUCT DEVELOPMENT</span>
          <h1>Software & AI products,<br /><span>engineered to scale.</span></h1>
          <p>We partner with startups and growing businesses to design, build, and launch web, mobile, and AI-powered products — from first idea to production and beyond.</p>
          <div className="simple-actions">
            <Link to="/contact" className="simple-primary">Start a project <ArrowRight size={17} /></Link>
            <a href="#services">Explore our services</a>
          </div>
        </div>
      </section>

      <section className="simple-section simple-story" id="about">
        <div className="simple-section-head">
          <span className="simple-eyebrow dark">WHO WE ARE</span>
          <h2>Product thinking.<br /><span>Engineering excellence.</span></h2>
        </div>
        <div className="simple-story-copy">
          <p className="simple-lead">Infinity Labs Technologies is a software and AI product development company specializing in full-stack engineering and applied artificial intelligence.</p>
          <p>We help companies turn ideas into market-ready products and modernize the systems their business runs on. Our team covers the full product lifecycle — strategy, design, architecture, development, and ongoing support — working as an extension of yours, with clear communication and source code you fully own.</p>
        </div>
      </section>

      <section className="simple-section simple-capabilities" id="services">
        <div className="simple-solutions-head">
          <span className="simple-solutions-kicker"><i /> OUR SERVICES <i /></span>
          <h2>End-to-end software and <span>AI product development</span></h2>
          <p>From product strategy and design to launch and long-term support,<br className="desktop-break" /> we build software that customers love and businesses rely on.</p>
        </div>
        <div className="simple-capability-grid">
          {services.map(({ title, text, icon: Icon, image }) => (
            <article className="simple-capability" key={title}>
              <div className="simple-capability-image-wrap">
                <img className="simple-capability-image" src={image} alt="" loading="lazy" />
              </div>
              <div className="simple-capability-body">
                <div className="simple-capability-info">
                  <div className="simple-capability-icon"><Icon size={24} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
                <ArrowRight className="simple-capability-arrow" size={20} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-process" id="process">
        <div>
          <span className="simple-eyebrow">HOW WE WORK</span>
          <h2>A clear process,<br /><span>from idea to launch.</span></h2>
          <p>Every engagement follows a transparent, milestone-based process, so you always know what is being built, why it matters, and when it will be ready.</p>
          <Link to="/contact" className="simple-light-button">Discuss your project <ArrowRight size={17} /></Link>
        </div>
        <ol className="simple-process-panel">
          {process.map(([title, text], index) => (
            <li key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="simple-section simple-mission" id="why-us">
        <div className="simple-mission-main">
          <span className="simple-eyebrow dark">WHY INFINITY LABS</span>
          <h2>A product partner<br /><span>you can rely on.</span></h2>
          <p>Our mission is to help businesses grow by building reliable, scalable, and thoughtfully engineered software and AI products, delivered with the transparency and accountability of a long-term partner.</p>
        </div>
        <div className="simple-principles">
          {principles.map(([title, text], index) => (
            <div className="simple-principle" key={title}>
              <span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="simple-contact" id="contact">
        <div>
          <span className="simple-eyebrow dark">CONTACT US</span>
          <h2>Let’s build something<br /><span>great together.</span></h2>
          <p>Tell us about your product idea, technical challenge, or timeline. We usually respond within one business day.</p>
        </div>
        <Link to="/contact" className="simple-contact-card">
          <span><Mail size={20} /> Start a conversation</span>
          <ArrowRight size={19} />
        </Link>
      </section>

      <footer className="simple-footer">
        <div className="simple-brand footer-brand"><span className="simple-mark">∞</span><span><strong>Infinity Labs</strong><small>Technologies LLC</small></span></div>
        <span>Software & AI product development</span>
        <div><Link to="/contact">Contact</Link><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link><span>© 2026 Infinity Labs Technologies LLC</span></div>
      </footer>
    </main>
  );
}
