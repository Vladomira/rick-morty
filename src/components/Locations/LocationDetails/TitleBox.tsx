import { TitleBoxProps } from "@/src/types/common";
import React from "react";

function TitleBox({ name, type, dimension }: TitleBoxProps) {
  return (
    <div className=" title-box ">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{type}</p>
      <p>{dimension}</p>
    </div>
  );
}

export default TitleBox;
