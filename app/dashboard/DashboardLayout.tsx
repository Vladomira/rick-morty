"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout() {
  const pathname = usePathname();
  return (
    <header className="header__section">
      <div>
        <h1 className="header__title">Rick and Morty</h1>
        <div className="mt-3">
          <Link
            href="/"
            className={`nav ${pathname === "/" ? "nav--active" : ""} `}
          >
            Home
          </Link>
          <Link
            href="/locations"
            className={`nav ${pathname === "/locations" ? "nav--active" : ""} `}
          >
            Locations
          </Link>

          <Link
            href="/search"
            className={`nav ${pathname === "/search" ? "nav--active" : ""} `}
          >
            Search
          </Link>
        </div>
      </div>
    </header>
  );
}
