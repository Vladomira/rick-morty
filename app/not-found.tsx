import Link from 'next/link';

import MainContainer from '../src/components/MainContainer';
import styles from '../styles/CharacterPage.module.scss';
import style from '../styles/Home.module.scss';

export default function Error() {
  return (
    <MainContainer title="Error page">
      <Link href="/">
        <button type="button" className={styles.btn}>
          Home
        </button>
      </Link>
      <h1 className={style.header__title}>Page doesn't exist</h1>
    </MainContainer>
  );
}
