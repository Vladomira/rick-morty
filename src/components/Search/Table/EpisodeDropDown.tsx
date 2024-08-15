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
      className={`relative underline cursor-pointer  `}
      onClick={() => setIsOpen(!isOpen)}
    >
      {episodeLength}
      <motion.div
        className={`z-10 absolute right-[-36px] bg-green-600 bg-gradient-to-br border-2 border-black shadow-table maxMedium:right-[6px] overflow-hidden md:right-[33px] md:h-[130px] lg:right-[-17px] md:w-[310px] lg:w-[370px] md:bg-gradient-to-br md:from-black md:to-primaryYellow`}
        initial="exit"
        animate={isOpen ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="sub-menu-container  ">
          {episode.map(({ name, air_date }) => (
            <div
              key={name}
              className="sub-menu-item font-normal text-lg superSmall:flex-col superSmall:items-center"
            >
              <p>{name}</p>
              <p className="text-base ">{formattedDate(air_date)} </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
