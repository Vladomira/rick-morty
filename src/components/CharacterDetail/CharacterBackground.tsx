"use client";
import { createBackground } from "@/src/helpers/createBackground";
import React from "react";

function CharacterBackground({ bgImg }: { bgImg: string | undefined }) {
  return (
    <div
      className="character__infobox--bg "
      style={{
        backgroundImage: bgImg ? createBackground(bgImg) : "none",
      }}
    />
  );
}

export default CharacterBackground;
