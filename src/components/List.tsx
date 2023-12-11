import { ListItem } from "./ListItem";
import { CharactersListProps } from "../types/CharactersData";

export const List = ({ items }: CharactersListProps) => {
  return (
    <ul>
      {items.map(({ id, name, image }) => {
        return <ListItem id={id} key={id} name={name} image={image} />;
      })}
    </ul>
  );
};
