import { ListItem } from './ListItem';
import styles from '../../../styles/CharactersList.module.scss';
import { CharacterFullData } from '../../types/CharactersData';

export const List = ({ items }: { items: CharacterFullData[] }) => {
  return (
    <ul className={styles.characters__list}>
      {items.map(({ id, name, image }) => {
        return <ListItem id={id} key={id} name={name} image={image} />;
      })}
    </ul>
  );
};
