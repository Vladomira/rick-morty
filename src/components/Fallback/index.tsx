import React from "react";

function Fallback() {
  return (
    <div
      className="w-screen bg-black py-16"
      style={{ minHeight: "calc(100vh - 53px)" }}
    >
      <div
        className={`m-auto bg-[url(/assets/gifs/rick-dancing.gif)]  w-[400px] h-[400px]  bg-contain bg-no-repeat`}
      />
    </div>
  );
}

export default Fallback;
