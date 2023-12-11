import Image from "next/image"
import Link from "next/link"

import { CharacterListItem } from "../types/CharactersData"

export const ListItem = ({ id, name, image }: CharacterListItem) => {
  return (
    <li>
      <Link href={`/characters/${id}`} style={{ fontSize: "20px" }}>
        {name}
        <Image src={image} width={100} height={100} alt={name} />
      </Link>
    </li>
  )
}
