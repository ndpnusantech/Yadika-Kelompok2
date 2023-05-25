import "./pembayaran.css";
import Button from "react-bootstrap/Button";

const Pembayaran = () => {
  // const kiko ="./Images Movie Card/kiko deep sea.jpg"
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
            marginLeft: "745px",
          }}
        />
      </div>
      <div className="boxPembayaran">
        <img src={"./assets/logo/card.png"} alt="" />
        <div className="container-pembayaran">
          <p className="judul">KIKO IN THE DEEP SEA</p>
          <p className="tanggal">SUNDAY , 6 FEBRUARY 2023</p>
          <p className="tempat">Cinema VII Bandung</p>
          <p className="jam" style={{textAlign:"center"}}>10.00 WIB</p>
          <p className="venue">A7</p> <br />

        </div>
          <table className="table-pembayaran">
            <tr>
              <td className="item">Harga tiket</td>
              <td className="item"> : </td>
              <td className="item">Rp. 30.000</td>
            </tr>
            <tr>
              <td className="item">Jumlah tiket</td>
              <td className="item"> : </td>
              <td className="item">(2)</td>
            </tr>
            <tr>
              <td className="item">Total Pembayaran</td>
              <td className="item"> : </td>
              <td className="item">Rp. 60.000</td>
            </tr>
          </table>
      </div>
      <h1 className="txt-boxPembayaran">PAYMENT</h1>
      <div className="titlePay">
        <div className="mx-auto d-flex justify-content-center">
          {/* <Button
            href="/pembayaranQris"
            className="btnQris"
            variant="light"
            title="qris"
          /> */}

          <Button
            href="/pembayaranQris"
            className="btnQris"
            variant="light"
            title="qris"
          >
            <img
              src="./assets/logo/logoqris.png"
              className="btn-img-qris"
              width={100}
              alt="img"
            />
          </Button>
        </div>
        <div className="mx-auto d-flex justify-content-center">
          {/* <Button
            href="/HalLoginGopay"
            className="btnGopay"
            variant="light"
            title="gopay"
          /> */}

          <Button
            href="/HalLoginGopay"
            className="btnGopay"
            variant="light"
            title="gopay"
          >
            <img
              src="./assets/logo/logoGopay.png"
              className="btn-img-gopay"
              width={50}
              alt="img"
            />
          </Button>
        </div>
        <div className="mx-auto d-flex justify-content-center">
          {/* <Button
            href="/spayPage"
            className="btnSpay"
            variant="light"
            title="spay"
         /> */}

          <Button
            href="/spayPage"
            className="btnSpay"
            variant="light"
            title="spay"
          >
            <img
              src="./assets/logo/spay.png"
              className="btn-img-spay"
              width={80}
              alt="img"
            />
          </Button>
        </div>
        <div className="mx-auto d-flex justify-content-center">
          <Button
            href="loginDana"
            className="btnDana"
            variant="light"
            title="dana"
          >
            <img
              src="./assets/logo/Dana.png"
              className="btn-img-dana"
              width={80}
              alt="img"
            />
          </Button>
        </div>
        {/* <Button className="btnconfirm p-4" href="/buktiPembayaran">CONFIRM</Button> */}
      </div>
    </>
  );
};
export default Pembayaran;
