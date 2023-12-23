import { createBackground } from "@/src/helpers/createBackground";
import Image from "next/image";
import CharacterButton from "./CharacterButton";
import ResidentEpisodes from "../Locations/LocationDetails/Episodes/ResidentEpisodes";
import { CharacterEpisode } from "@/src/types/CharactersData";

export function CharacterInfoBox({
  src,
  imgName,
  props,
  bg,
  id,
  episode,
}: {
  src?: string;
  imgName: string;
  props: string[];
  bg?: string;
  id?: string;
  episode?: CharacterEpisode[];
}) {
  const bgImg = bg?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="character__infobox min-h-[364px] ">
      {bg && (
        <div
          className="character__infobox--bg"
          style={{
            backgroundImage: bg ? createBackground(bgImg) : "none",
          }}
        />
      )}
      <div className="flex justify-between ">
        {" "}
        {src && (
          <div className="character__imgthumb maxMedium:mb-5">
            <Image
              className="character__img"
              src={src}
              width={250}
              height={250}
              alt={imgName}
            />
          </div>
        )}
        <ul className="character__infolist">
          {props.map(
            (el, idx) =>
              el !== "unknown" && (
                <li key={idx} className="character__infoitem">
                  <p
                    className={`${
                      idx === 0
                        ? "character__infotext--biggest"
                        : "character__infotext"
                    } rounded-lg px-3 py-2 inline-block`}
                  >
                    {el}
                  </p>
                </li>
              )
          )}
        </ul>
      </div>

      <div className="flex items-center relative ">
        {id && createBackground(bgImg) !== "url(/assets/space/space2.jpg)" && (
          <CharacterButton id={id} />
        )}
        {bg && episode && (
          <ResidentEpisodes episode={episode} rounded="rounded-lg" />
        )}
      </div>
    </div>
  );
}
