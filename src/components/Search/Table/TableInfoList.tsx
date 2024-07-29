import Link from "next/link";
import Image from "next/image";
import { CharacterInstance } from "../../../@types/CharactersData";
import { EpisodeDropDown } from "./EpisodeDropDown";

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
            <tr key={id} className="superSmall:shadow-table text-balance">
              <td className="table__item flex items-center maxLarge:flex-col  superSmall:text-sm  ">
                <Image
                  src={image}
                  alt={name}
                  width={60}
                  height={60}
                  className="rounded mr-5 maxLarge:mr-0"
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
