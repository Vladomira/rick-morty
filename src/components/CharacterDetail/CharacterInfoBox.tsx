import Image from "next/image";
import CharacterBackground from "./CharacterBackground";
import CharacterButtons from "./CharacterButtons";
import { CharacterInfoBoxProps } from "@/src/@types/components";

export function CharacterInfoBox({
  src,
  imgName,
  infoItems,
  bg,
  id,
  episode,
}: CharacterInfoBoxProps) {
  const bgImg = bg?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="character__infobox min-h-[364px] ">
      {bgImg && <CharacterBackground bgImg={bgImg} />}
      <div
        className={`flex justify-between ${src ? "superSmall:flex-col" : ""}`}
      >
        {src && src.trim() !== "" && (
          <div className="character__imgthumb">
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
          {infoItems.map(
            (el, idx) =>
              el !== "unknown" &&
              el !== null && (
                <li key={idx} className="character__infoitem ">
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
      <CharacterButtons id={id} bgImg={bgImg} episode={episode} />
    </div>
  );
}
