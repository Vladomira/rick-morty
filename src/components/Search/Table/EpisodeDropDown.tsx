import { useState } from "react";

import { subMenuAnimate } from "@/src/constants/animation-settings";
import { formattedDate } from "@/src/helpers/formattedData";
import { CharacterEpisode } from "@/src/types/CharactersData";
import { motion } from "framer-motion";

export const EpisodeDropDown = ({
  episode,
  episodeLength,
}: {
  episode: CharacterEpisode[];
  episodeLength: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="drop-down__length"
      onClick={() => setIsOpen(!isOpen)}
    >
      {episodeLength}
      <motion.div
        className="drop-down__wrapper"
        initial="exit"
        animate={isOpen ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="sub-menu-container  ">
          {episode.map(({ name, air_date }) => (
            <div
              key={name}
              className="sub-menu-item superSmall:flex-col superSmall:items-center"
            >
              <p>{name}</p>
              <p className="text-base">{formattedDate(air_date)} </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
