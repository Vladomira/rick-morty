import React from "react";

const dots = Array.from({ length: 6 }, (value, index) => index);
function Fallback() {
  return (
    <div className="fallback__wrapper">
      <div className="fallback__dots-box">
        {dots.map((el) => (
          <div key={el} className="fallback__dots-item wave" />
        ))}
      </div>
      <div className={"fallback__animation"} />
    </div>
  );
}

export default Fallback;
