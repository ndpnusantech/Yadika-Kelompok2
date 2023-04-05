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
            </p>
            <p className="keterangan-tanggal2">
            Cinema VII Bandung
            </p>


           <table className="text-start" style={{marginTop:"-0.95rem"}}>
              <tr>
                <td className="pe-3">Harga tiket</td>
                <td>Rp. 30.000 x5</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>Rp. 150.000</td>
              </tr>
              <tr>
                <td>Tunai</td>
                <td>Rp. 200.000</td>
              </tr>
              <tr>
                <td>Kembalian</td>
                <td>Rp. 50.000</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>(Pending)</td>
              </tr>
           </table>
            {/* <p className="harga-tiket">
                Harga tiket : Rp.30.000 x5

            </p>
            <p className="total-harga">
               Total : Rp. 90.000
            </p>
            <p className="tunai-uang">
              Tunai : Rp. 100.000
            </p>
            <p className="kembalian-uang">

              Kembalian : Rp. 10.000
            </p>

              Kembalian : Rp.50.000
            </p> */}

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
