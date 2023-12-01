"use client";
import Link from "next/link";
import style from "../../styles/Home.module.scss";
import btnStyles from "../../styles/CharacterPage.module.scss";

export default function DashboardLayout() {
   return (
      <header className={style.header__section}>
         <div>
            <h1 className={style.header__title}>Rick and Morty</h1>
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
   );
}
