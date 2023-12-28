import Image from "next/image";
import Link from "next/link";

import { CharacterListItem } from "../../types/CharactersData";

export const ListItem = ({ id, name, image }: CharacterListItem) => {
  return (
    <li className="characters__item">
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
        <div className=" mt-4 shadow-yellowShadow rounded-[10px]">
          <p className="characters__text ">{name}</p>
        </div>
      </Link>
    </li>
  );
};
