"use client";
import { createBackground } from "@/src/helpers/createBackground";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import React from "react";

function CharacterBackground({ bgImg }: { bgImg: string }) {
  const windowWidth = useWindowSize();
  return (
    <div
      className="character__infobox--bg "
      style={{
        backgroundImage: bgImg ? createBackground(bgImg, windowWidth) : "none",
      }}
    />
  );
}

export default CharacterBackground;
