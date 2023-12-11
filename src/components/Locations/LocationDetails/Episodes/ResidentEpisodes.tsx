import React, { useState } from "react"

import { motion } from "framer-motion"
import { subMenuAnimate } from "@/src/constants/menu-animation"
import { CharacterEpisode } from "@/src/types/CharactersData"
import { formattedDate } from "@/src/helpers/formattedData"

export default function ResidentEpisodes({
  episode,
}: {
  episode: CharacterEpisode[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div className="menu" onClick={() => setIsOpen(!isOpen)}>
      Episodes
      <motion.div
        className="sub-menu "
        initial="exit"
        animate={isOpen ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="sub-menu-container ">
          {episode.map(({ name, air_date }) => (
            <div key={name} className="sub-menu-item  ">
              <p>{name}</p>
              <p className="pr-4"> {formattedDate(air_date)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
