import Image from "next/image"
import React from "react"

import styles from "../../../styles/Character/CharacterPage.module.scss"
import { CharacterInstance } from "../../types/CharactersData"

const CharacterDetail = ({
  character,
}: {
  character: CharacterInstance | undefined
}) => {
  return (
    <>
      {character && (
        <div className={styles.data__contentBox}>
          <div className={styles.data__thumb}>
            <Image
              className={styles.data__img}
              src={character.image}
              width={250}
              height={250}
              alt={character.name}
            />
          </div>

          <ul className={styles.data__list}>
            <li className={styles.data__item}>
              <p className={styles.data__name}>{character.name}</p>
            </li>
            <li className={styles.data__item}>
              <p className={styles.data__text}>{character.gender}</p>
            </li>
            <li className={styles.data__item}>
              <p className={styles.data__text}>{character.species}</p>
            </li>

            {character.status !== "unknown" ? (
              <li className={styles.data__item}>
                <p className={styles.data__text}> {character.status}</p>
              </li>
            ) : null}
          </ul>
        </div>
      )}
    </>
  )
}

export default CharacterDetail
