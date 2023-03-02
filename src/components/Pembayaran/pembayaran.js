import "./pembayaran.css";
import Button from "react-bootstrap/Button";

const Pembayaran = () => {
  const logoC = "./assets/navbar/logoo2.png";
  // const logoqris = "./assets/logo/logoqris.png";
  // const gopay = "./assets/logo/gopay.png";
  // const spay = "./assets/logo/spay.png";
  // const dana = "./assets/logo/Dana.png";
  return (
    <>
      <div className="logoImg">
        <img
          src={logoC}
          alt=""
          width="300px"
          heigt="350px"
          style={{
            marginBottom: "30px",
            marginTop: "60px",
            marginLeft: "670px",
          }}
        />
      </div>
      <div className="boxPembayaran">
        <img src="./assets/logo/card.png" alt="" />
        <div className="container">
        <p>ONE PIECE</p>
        <p>MOVIE RED</p>
        <p>SUNDAY , 6 FEBRUARY 2023</p>
        <p>Cinema VII Bandung</p>
        <p>A7</p>
        </div>
        
      </div>
      <h1 className="txt-boxPembayaran">PAYMENT</h1>
      <div className="titlePay">
        <div className="mx-auto d-flex justify-content-center">
          <Button className="btnQris" variant="light" title="qris">
            <img
              src="./assets/logo/logoqris.png"
              className="btn-img-qris"
              width={100}
              alt="img"
            />
          </Button>
        </div>
        <div className="mx-auto d-flex justify-content-center">
          <Button className="btnGopay" variant="light" title="gopay">
            <img
              src="./assets/logo/logoGopay.png"
              className="btn-img-gopay"
              width={50}
              alt="img"
            />
          </Button>
        </div>
        <div className="mx-auto d-flex justify-content-center">
          <Button className="btnSpay" variant="light" title="spay">
            <img
              src="./assets/logo/spay.png"
              className="btn-img-spay"
              width={80}
              alt="img"
            />
          </Button>
        </div>
        <div className="mx-auto d-flex justify-content-center">
          <Button className="btnDana" variant="light" title="dana">
            <img
              src="./assets/logo/Dana.png"
              className="btn-img-dana"
              width={80}
              alt="img"
            />
          </Button>
        </div>
        <button className="btnconfirm">CONFIRM</button>
      </div>
    </>
  );
};
export default Pembayaran;
