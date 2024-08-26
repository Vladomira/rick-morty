import { EpisodeDropDown } from "./EpisodeDropDown";
import { CharacterInstance } from "@/src/types/CharactersData";
import Image from "next/image";
import Link from "next/link";

export default function TableInfoList({
  items,
}: {
  items: CharacterInstance[];
}) {
  return (
    <tbody>
      {items.map(
        ({
          name,
          episode,
          id,
          gender,
          location,
          species,
          status,
          image,
        }: CharacterInstance) => {
          return (
            <tr key={id}>
              <td className="table__item table__item--cell">
                <Image
                  src={image}
                  alt={name}
                  width={60}
                  height={60}
                  className="table__item-img"
                />
                <Link
                  href={`/characters/${id}`}
                  className="underline maxLarge:mt-2"
                >
                  {name}
                </Link>
              </td>

              <td className="table__item table__item--small">{status}</td>
              <td className="table__item table__item--small">{species}</td>
              <td className="table__item table__item--small">{gender}</td>
              <td className="table__item table__item--small">
                {location.name}
              </td>
              <td className="table__item table__item--small ">
                <EpisodeDropDown
                  episode={episode}
                  episodeLength={episode?.length}
                />
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}
