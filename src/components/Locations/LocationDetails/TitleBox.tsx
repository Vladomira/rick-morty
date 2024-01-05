import React from "react";
import { TitleBoxProps } from "@/src/types/components";

function TitleBox({ name, type, dimension, residentsQuantity }: TitleBoxProps) {
  return (
    <div className=" title-box ">
      <h2 className="text-lg font-bold text-center">{name}</h2>

      <p>
        {type} ({residentsQuantity})
      </p>
      <p>{dimension}</p>
    </div>
  );
}

export default TitleBox;
