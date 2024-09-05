import { CharactersListItem } from "./CharactersListItem";
import { CharacterListItem } from "@/src/types/CharactersData";

export const CharactersList = ({ items }: { items: CharacterListItem[] }) => {
  return (
    <ul className={"characters__list"} data-testid="characters-list">
      {items.map(({ id, name, image }) => (
        <CharactersListItem id={id} key={id} name={name} image={image} />
      ))}
    </ul>
  );
};
