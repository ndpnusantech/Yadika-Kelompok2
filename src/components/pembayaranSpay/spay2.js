import "./spay.css";

const Spay2 = () => {
    const logoD = "./assets/navbar/logoo2.png";

    return(
        <div className="logoImg">
        <img
          src={logoD}
          alt=""
          width="300px"
          heigt="350px"
          style={{
            marginBottom: "30px",
            marginTop: "40px",
            marginLeft: "600px",
          }}
        />
        <br />
        <img  class="imgspay" src="./assets/logo/spay.png" alt="" />
        <div className="kotak2">
            <img src="./assets/logo/ceklis.png" alt="" />
            <h1>BERHASIL !</h1>
            <div className="box1" >
             <h4>Tanggal</h4>
             <h3>6 Januari 2023</h3>
            </div>
            <div className="box2">
                <h4>Lokasi</h4>
                <h3>Cinema VII Bandung</h3>
            </div>
            <div className="box3">
                <h4>Metode Pembayaran</h4>
                <h3>Shopeepay</h3>
            </div>
            <div className="box4">
                <h4>Total</h4>
                <h3>Rp.50.000,00</h3>
            </div>
            <button>Konfirmasi</button>
        </div>
        </div>
    )

}

export default Spay2;