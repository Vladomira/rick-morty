import { ListItem } from "./ListItem";
import { CharacterListItem } from "../../types/CharactersData";

export const List = ({ items }: { items: CharacterListItem[] }) => {
  return (
    <ul className={"characters__list"}>
      {items.map(({ id, name, image }) => {
        return <ListItem id={id} key={id} name={name} image={image} />;
      })}
    </ul>
  );
};
