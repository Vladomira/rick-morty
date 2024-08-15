"use client";

import React from "react";

import CharacterLocationButton from "./CharacterLocationButton";
import { createBackground } from "@/src/helpers/createBackground";
import { CharacterEpisode } from "@/src/types/CharactersData";

import { useWindowSize } from "@/src/hooks/useWindowSize";

import ResidentEpisodes from "../Locations/LocationDetails/Episodes/ResidentEpisodes";

function CharacterButtons({
  id,
  bgImg,
  episode,
}: {
  id?: string;
  bgImg?: string;
  episode?: CharacterEpisode[];
}) {
  const windowWidth = useWindowSize();
  const isCustomImg =
    createBackground(bgImg, windowWidth) === "url(/assets/space/space2.jpg)";
  return (
    <div
      className={`flex items-center  relative ${
        isCustomImg ? "justify-end" : ""
      }`}
    >
      {id && !isCustomImg && <CharacterLocationButton id={id} />}
      {bgImg && episode && (
        <ResidentEpisodes episode={episode} rounded="rounded-lg" />
      )}
    </div>
  );
}

export default CharacterButtons;
