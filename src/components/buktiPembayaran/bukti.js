import "./bukti.css";
const Bukti = () => {
  const imgLogo = "../assets/navbar/logoo2.png";
  // const logoGopay = "../assets/logo/logoGopay.png";
  const posterFilm = "../Images Card Movie/kiko deep sea.jpg";
  return (
    <>
      <div className="box-pembayaran">
        <div className="img-all-buktiPembayaran">
          <img className="img-logoCinema" src={imgLogo} alt="logoCinema"></img>
          {/* <img
            className="img-logoPembayaran"
            src={logoGopay}
            alt="logoGopay"
          ></img> */}
        </div>

        <div className="isi-card-film">
          <div className="card-film-poster">
            <img
              src={posterFilm}
              alt="poster"
              className="poster-filmPembayaran"
            ></img>
          </div>
          <div className="judul-buktifilm">
            <h3 className="judul-filmTiket">Kiko In The Deep Sea</h3>
            <p className="keterangan-tanggal">
              SUNDAY, 6 FEBRUARY 2023
              <br />
              Cinema VII Bandung
            </p>
          </div>
        </div>

        <div className="table-bukti-pembayaran">
          <div className="dataTicket">
            <h2 className="dataTicket1">SEATS</h2>
            <h5 className="dataTicket1">A7</h5>
          </div>
          <div className="dataTicket">
            <h2 className="dataTicket2">TIME</h2>
            <h5 className="dataTicket2">18.00</h5>
          </div>
          <div className="dataTicket">
            <h2 className="dataTicket3">CODE BOOKING</h2>
            <h5 className="dataTicket3">1JIBD8</h5>
          </div>
          {/* <table>
            <tr>
              <th>SEATS</th>
              <th>TIME</th>
              <th>CODE BOOKING</th>
            </tr>
            <tr>
              <td>A7</td>
              <td>18.00</td>
              <td>1JIBD8</td>
            </tr>
          </table> */}
        </div>
      </div>
    </>
  );
};
export default Bukti;
