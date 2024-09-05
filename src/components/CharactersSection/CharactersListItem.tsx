import { CharacterListItem } from "@/src/types/CharactersData";
import Image from "next/image";
import Link from "next/link";

export const CharactersListItem = ({ id, name, image }: CharacterListItem) => {
  return (
    <li className="characters__item" role="list-item">
      <Link href={`/characters/${id}`} className="characters__link">
        <div className="characters__thumb">
          <Image
            className="characters__img"
            src={image}
            width={210}
            height={210}
            alt={name}
          />
        </div>
        <div className="characters__text-box">
          <p className="characters__text">{name}</p>
        </div>
      </Link>
    </li>
  );
};
