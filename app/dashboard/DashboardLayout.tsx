"use client"
import Link from "next/link"
import btnStyles from "../../styles/Character/CharacterPage.module.scss"

export default function DashboardLayout() {
  return (
    <header className="header__section">
      <div>
        <h1 className="header__title">Rick and Morty</h1>
        <div>
          <Link href="/">
            <button type="button" className={btnStyles.btn}>
              Home
            </button>
          </Link>
          <Link href="/locations">
            <button type="button" className={btnStyles.btn}>
              Locations
            </button>
          </Link>

          <Link href="/statistics">
            <button type="button" className={btnStyles.btn}>
              Statisticss
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
