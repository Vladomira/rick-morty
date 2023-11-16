import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../styles/CharactersList.module.scss';

import { CharacterListItem } from '../../types/CharactersData';

export const ListItem = ({ id, name, image }: CharacterListItem) => {
  return (
    <li className={styles.characters__item}>
      <Link href={`/characters/${id}`} className={styles.characters__link}>
        <div className={styles.characters__thumb}>
          <Image
            className={styles.characters__img}
            src={image}
            width={210}
            height={210}
            alt={name}
          />
        </div>
        <p className={styles.characters__text}>{name}</p>
      </Link>
    </li>
  );
};
