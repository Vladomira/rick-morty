import React from "react";

import { socialLinks } from "@/src/constants/social-links";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line" />
      <ul className="social-links__list">
        {socialLinks.map(({ name, link }) => (
          <li key={name} className="social-links__item">
            <Link href={link} className="social-links__link">
              <svg className="social-links__img">
                <use
                  href={`/assets/social/symbol-defs.svg#${name.toLowerCase()}`}
                />
              </svg>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
