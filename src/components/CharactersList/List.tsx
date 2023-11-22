import { ListItem } from "./ListItem";
import styles from "../../../styles/CharactersList.module.scss";
import { CharacterListItem } from "../../types/CharactersData";

export const List = ({ items }: { items: CharacterListItem[] }) => {
   return (
      <ul className={styles.characters__list}>
         {items.map(({ id, name, image }) => {
            return <ListItem id={id} key={id} name={name} image={image} />;
         })}
      </ul>
   );
};
