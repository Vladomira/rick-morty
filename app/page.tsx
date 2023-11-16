import CharactersList from '../src/components/CharactersList';
import MainContainer from '../src/components/MainContainer';
import { fetchCharacters } from '../src/service/api';
import { CharacterFullData } from '../src/types/CharactersData';
import styles from '../styles/container.module.scss';

async function Home() {
  let characters: CharacterFullData[] | undefined;
  try {
    characters = await fetchCharacters();
  } catch (error) {
    console.error('Error fetching character:', error);
  }

  return (
    <MainContainer title="Main page">
      <section className={styles.chracters__section}>
        <div className={styles.container}>
          {characters !== undefined && (
            <CharactersList characters={characters} />
          )}
        </div>
      </section>
    </MainContainer>
  );
}

export default Home;
