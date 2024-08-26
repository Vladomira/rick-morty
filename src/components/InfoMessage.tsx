import React from "react";

const InfoMessage = ({ message }: { message: string }) => {
  return <h2 className="inform__text-box--text max-w-max m-auto">{message}</h2>;
};

export default InfoMessage;
