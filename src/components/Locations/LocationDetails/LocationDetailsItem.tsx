import React from "react";

import ResidentEpisodes from "./Episodes/ResidentEpisodes";
import { CharacterInstance } from "@/src/types/CharactersData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function LocationDetailsItem({ resident }: { resident: CharacterInstance }) {
  const { name, image, status, species, gender, episode, id } = resident;

  return (
    <motion.li
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2 }}
      animate={{ opacity: 0 }}
      className={`residents__item residents__item--small residents__item--medium `}
    >
      <Image
        src={image}
        alt={name}
        className="residents__img"
        width={260}
        height={200}
      />

      <div className="residents__info text-base">
        <div className="flex justify-between">
          <Link href={`/characters/${id}`} className="underline">
            <p className="font-semibold text-lg"> {name}</p>
          </Link>

          {/* small screen */}
          <div className="resident-episodes--small">
            <ResidentEpisodes episode={episode} />
          </div>
        </div>

        <div>
          <p className="italic">
            Status: <span className="not-italic">{status}</span>
          </p>
          <p className="italic">
            Species: <span className="not-italic">{species}</span>
          </p>
          <p className="italic">
            Gender:&#160;
            <span className="not-italic">
              {gender === "unknown" ? "none" : gender}
            </span>
          </p>
        </div>

        <div className="resident-episodes">
          <ResidentEpisodes episode={episode} />
        </div>
      </div>
    </motion.li>
  );
}

export default LocationDetailsItem;
