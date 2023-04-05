import "./hTransaksiAdmin.css";


const AdminTransaksi = () => {
    const logoN = "./assets/navbar/logoo2.png";

    return(
        <>
        <div className="logoImg">
        <img
          src={logoN}
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
        </>
    )
}

export default AdminTransaksi;