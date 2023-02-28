import React, { useState } from "react";
import ChairBtn from "../components/chair/ChairBtn";
import "../style/chooseSeat.css"; 
import { dataChair1 } from "../components/dataChair/dataChair1";
import { dataChair2 } from "../components/dataChair/dataChair2";
import Sidebar from "../components/layouts/sidebar/sidebar";


const ChooseSeat = () => {
    const [dfbgbt , setclbt ] = useState("white")
   const [valueBtn, setValueBtn] = useState(false);

  const changeValue = () => {
    if (dfbgbt === "white") {
      setclbt("#4FA332");
      setValueBtn(true);
    }
  };
  console.log(valueBtn);

  return (
    <div>
        <Sidebar/>
      <center>
        <div className="wrap-logo">
          <img src="../assets/logo/logoxxi.jpeg" alt="" />
          <p>
            Screen <span>Seats</span>
          </p>
        </div>
      </center>
      <div className="wrap-seats">
        <div className="seats-k-1">
        {dataChair1.map((data) => (
          <ChairBtn
            noSeat={data.chair}
            onClick={() => changeValue()}
            value={valueBtn}
          />
          ))}
        </div>
        <div className="seats-k-2">
          {dataChair2.map((data) => (
            <ChairBtn
              noSeat={data.chair}
              onClick={() => changeValue()}
            value={valueBtn}
            />
            ))}
        </div>
      </div>
      
    </div>
  );
};

export default ChooseSeat;
