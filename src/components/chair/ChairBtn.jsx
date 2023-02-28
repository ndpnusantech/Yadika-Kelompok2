import React, { useState } from "react";

const ChairBtn = (props) => {
  const [dfbgbt, setclbt] = useState("white");
  const rubahWarna = () => {
    dfbgbt === "white" ? setclbt("#4FA332") : setclbt("white");
  };
  return (
    <button
      style={{
        backgroundColor: `${dfbgbt}`,
        width: "67px",
        height: "67px",
        textAlign: "center",
      }}
      onClick={() => {
        rubahWarna();
        props.onClick();
      }}
      value={props.valueBtn}
    >
      {props.noSeat}
    </button>
  );
};

export default ChairBtn;
