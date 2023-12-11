import Link from "next/link"
import styles from "../styles/Character/CharacterPage.module.scss"
import style from "../styles/Home.module.scss"

export default function Error() {
  return (
    <>
      <Link href="/">
        <button type="button" className={styles.btn}>
          Home
        </button>
      </Link>
      <h1 className={style.header__title}>Page doesn't exist</h1>
    </>
  )
}
