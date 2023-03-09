import React from "react";
import { Button } from "react-bootstrap";
import "./PinGopay.css";

export default function PinGopay() {
  const logo = "/assets/logo/logoo 2.png";
  const logoGopay1 = "../assets/logo/logoGopay1.png";
  return (
    <div>
      <div className="logoKonfirm mt-3 d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="" width="330px" />
        <img
          src={logoGopay1}
          width="150px"
          alt=""
          style={{ marginTop: "-7px" }}
        />
      </div>
      <div className="conPin">
        <div className="pinGpay">
          <h4 className="pt-4" style={{ fontWeight: "bold" }}>
            Masukan Pin Gopay
          </h4>
          <h4>Masukan Pin Gopay Kamu</h4>
          <div className="inputPin" style={{ marginTop: "100px" }}>
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
          </div>
          <Button style={{ marginTop: "30px", width: "200px" }}>
            Konfirmasi
          </Button>
        </div>
      </div>
    </div>
  );
}
