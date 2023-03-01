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
      <div className="boxPembayaran"></div>
      <div className="titlePay">
        <h1>PAYMENT</h1>
        <div className="mx-auto d-flex justify-content-center">
          <Button variant="light" title="qris">
            <img
              src="./assets/logo/logoqris.png"
              className="btn-img"
              width={100}
              alt="img"
            />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Pembayaran;
