import Link from 'next/link';
import { Suspense } from 'react';

import CharacterDetail from '../../../src/components/CharacterDetail';
import MainContainer from '../../../src/components/MainContainer';
import { fetchCharacterById } from '../../../src/service/api';
import { CharacterFullData } from '../../../src/types/CharactersData';
import styles from '../../../styles/CharacterPage.module.scss';

const btnClass = styles.btn + ' ' + styles.secondBtn;

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  let character: CharacterFullData | undefined;
  const { id } = params;
  try {
    character = await fetchCharacterById(id);
  } catch (error) {
    console.error('Error fetching character:', error);
  }

  return (
    <MainContainer title="Character page">
      <section className={styles.character__section}>
        <div className={styles.character__container}>
          <Link href="/">
            <button type="button" className={styles.btn}>
              Home
            </button>
          </Link>
          <Link href="/statistics">
            <button type="button" className={btnClass}>
              Statistics
            </button>
          </Link>
          <Suspense fallback={<div>Loading...</div>}>
            <CharacterDetail character={character} />
          </Suspense>
        </div>
      </section>
    </MainContainer>
  );
}
