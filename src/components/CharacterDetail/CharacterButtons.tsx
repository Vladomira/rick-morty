"use client";
import React from "react";
import CharacterLocationButton from "./CharacterLocationButton";
import ResidentEpisodes from "../Locations/LocationDetails/Episodes/ResidentEpisodes";
import { CharacterEpisode } from "@/src/types/CharactersData";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { createBackground } from "@/src/helpers/createBackground";

function CharacterButtons({
  id,
  bgImg,
  episode,
}: {
  id: string | undefined;
  bgImg: string | undefined;
  episode?: CharacterEpisode[];
}) {
  const windowWidth = useWindowSize();
  //   const bgImg = bg?.toLowerCase().replace(/\s+/g, "-");
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
