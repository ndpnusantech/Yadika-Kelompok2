import "./pembayaran.css";

const Pembayaran = () => {
  const logoC = "./assets/navbar/logoo2.png";
  const logoqris = "./assets/logo/logoqris.png";
  const gopay = "./assets/logo/gopay.png";
  const spay = "./assets/logo/spay.png";
  const dana = "./assets/logo/Dana.png";
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
      </div>
      <div className="boxButton">
        <img
          src={logoqris}
          alt=""
          width="50px"
          heigt="90px"
          style={{
            marginBottom: "30px",
            marginTop: "60px",
            marginLeft: "670px",
          }}
        />

        <button>QRIS</button>
      </div>
    </>
  );
};
export default Pembayaran;
