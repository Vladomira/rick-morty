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
    <header className="header__section">
      <div>
        <h1 className="header__title shadow-table">Rick and Morty</h1>
        <nav className="mt-3" data-testid="navigation">
          {navigationList.map(({ name, link }) => (
            <Link
              href={link}
              className={linkStyles(link, pathname)}
              key={name}
              data-testid={name}
            >
              <p
                className={`hover:drop-shadow-nav ${
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
