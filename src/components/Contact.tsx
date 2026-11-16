import React from "react";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <div className="contact-content">
      <div className="contact-direct">
        <p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p>
        <h2>Have a project<br />or just want to <em>say hi?</em></h2>
        <p className="contact-note">I&apos;m open to thoughtful collaborations and new ideas. Pick the easiest way to reach me.</p>
        <a className="contact-email-link" href="mailto:keepkorirr@gmail.com">
          keepkorirr@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <a className="contact-phone-link" href="tel:+254719149781">+254 719 149 781</a>
      </div>
      <div className="contact-social-panel">
        <p className="eyebrow"><span className="eyebrow-line" /> Find me online</p>
        <SocialLinks />
      </div>
    </div>
  );
}
