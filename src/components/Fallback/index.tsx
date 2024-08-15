import React from "react";

const dots = Array.from({ length: 6 }, (value, index) => index);
function Fallback() {
  return (
    <div
      className="w-screen bg-black py-16"
      style={{ minHeight: "calc(100vh - 53px)" }}
    >
      <div className="flex justify-center items-center mb-7">
        {dots.map((el) => (
          <div
            key={el}
            className="wave w-[5px] h-9 m-1 rounded-2xl drop-shadow-shiny"
          />
        ))}
      </div>
      <div
        className={`m-auto bg-[url(/assets/gifs/rick-dancing.gif)]  w-[400px] h-[400px]  bg-contain bg-no-repeat`}
      />
    </div>
  );
}

export default Fallback;
