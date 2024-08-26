"use client";

import { isMatch, linkStyles } from "@/src/helpers/makeLinkStyles";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationList = [
  { name: "Home", link: "/" },
  { name: "Locations", link: "/locations" },
  { name: "Search", link: "/search" },
];
export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="header__section bg-image-position">
      <div>
        <div className="header__title-box">
          <h1 className="header__title">Rick and Morty</h1>
        </div>

        <nav className="navbox" data-testid="navigation">
          {navigationList.map(({ name, link }) => (
            <Link
              href={link}
              className={linkStyles(link, pathname)}
              key={name}
              data-testid={name}
            >
              <p
                className={`nav__text ${
                  isMatch(link, pathname) ? "drop-shadow-nav" : ""
                }`}
              >
                {name}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
