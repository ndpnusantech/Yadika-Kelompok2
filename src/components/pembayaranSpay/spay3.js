import "./spay.css";

const Spay3 = () => {
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
        <div className="ceklis1">
            <img src="./assets/logo/ceklis1.png" alt="" />
        </div>
        <p className="p1">Terimakasih Telah </p>
        <p className="p2">Menggunakan Spay</p>
        <p className="p3">Untuk Pembayaran</p>
        <p className="p4">Anda</p>
        </div>
    )

}

export default Spay3;