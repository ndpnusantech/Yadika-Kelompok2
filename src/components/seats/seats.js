import React, { useState } from "react";
import ChairBtn from "../chair/ChairBtn";
import "./seats.css"
import { dataChair1 } from "../dataChair/dataChair1"
import { dataChair2 } from "../dataChair/dataChair2"
import Button from "react-bootstrap/Button"


const Seat = () => {
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
    <div className="full-seats">
       
      <center>
        <div className="wrap-logo">
          <img src="../assets/logo/logoo 2.png" alt="" />
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

      <div className="btn-seats">
            <Button href="/pembayaranPage" variant="light">CONFIRM</Button>

      {valueBtn === true && (
       <div className="btn-seats" >
            <Button href="/pembayaranPage" variant="light">PRICE Rp 40.000 CONFRIM</Button>

      </div>
      )}  
 
    </div>
  );
};

export default Seat;
