"use client";

import React from "react";

import { createBackground } from "@/src/helpers/createBackground";
import { CharacterEpisode } from "@/src/types/CharactersData";
import dynamic from "next/dynamic";

import { useWindowSize } from "@/src/hooks/useWindowSize";

import ResidentEpisodes from "../Locations/LocationDetails/Episodes/ResidentEpisodes";

const DynamicLocationButton = dynamic<{ id: string }>(
  () => import("./CharacterLocationButton")
);
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
    createBackground(bgImg, windowWidth) === "url(/assets/space/space3.webp)";
  return (
    <div className={`character__btn-box ${isCustomImg ? "justify-end" : ""}`}>
      {id && !isCustomImg && <DynamicLocationButton id={id} />}
      {bgImg && episode && (
        <ResidentEpisodes episode={episode} rounded="rounded-lg" />
      )}
    </div>
  );
}

export default CharacterButtons;
