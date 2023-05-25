import "./halamanKornfirmGopay.css";
import { Form, Button } from "react-bootstrap";

const KonfirmGopay = () => {
  const logo = "/assets/logo/logoo 2.png";
  const logoGopay1 = "../assets/logo/logoGopay1.png";

  return (
    <div className="boxKonfirmGopay">
      <div className="logoKonfirm mt-3 d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="" width="330px" />
        <img src={logoGopay1} width="150px" style={{ marginTop: "-7px" }} />
      </div>
      <div
        className="kotakMovie"
        style={{
          textAlign: "center",
          backgroundColor: "white",
          width: "850px",
          padding: "50px",
          margin: "30px auto",
          borderRadius: "5px",
        }}
      >
        <h1 className="judul">Movie : One Piece Movie Red</h1>
        <h3 className="tanggal">6 Januari 2023</h3>
        <div className="logoPra">
          <img src={logoGopay1} alt="" />
        </div>
        <div className="konfirmBayar">
          <Button
            className="confirmBut"
            style={{
              height: "60px",
              backgroundColor: "#008E39",
              margin: "30px 0 0 0 ",
            }}
          >
            Konfirmasi Dan Bayar{" "}
            <span style={{ paddingLeft: "80px" }}>Rp.50.000,00</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
<div className="boxMasukgopay mx-auto mt-2"></div>;

export default KonfirmGopay;
