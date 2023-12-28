"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { subMenuAnimate } from "@/src/constants/menu-animation";
import { CharacterEpisode } from "@/src/types/CharactersData";
import { formattedDate } from "@/src/helpers/formattedData";

export default function ResidentEpisodes({
  episode,
  rounded,
}: {
  episode: CharacterEpisode[];
  rounded?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const roundedConf = ` ${rounded || "rounded-sm"}`;
  return (
    <motion.div
      className={`menu ${roundedConf}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      Open episodes ({episode.length})
      <motion.div
        className={`sub-menu ${roundedConf}`}
        initial="exit"
        animate={isOpen ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="sub-menu-container ">
          {episode.map(({ name, air_date }) => (
            <div key={name} className="sub-menu-item font-normal text-lg ">
              <p>{name}</p>
              <p className="text-base"> {formattedDate(air_date)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
