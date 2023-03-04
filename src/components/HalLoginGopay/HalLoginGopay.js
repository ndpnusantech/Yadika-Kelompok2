import "./HalLoginGopay.css";

const LoginGopay = () => {
  const logo = "/assets/logo/logoo 2.png";
  const logoGopay1 = "../assets/logo/logoGopay1.png";

  return (
    <div className="boxLoginGopay">
      <div className="logoLogin">
        <img
          src={logo}
          alt=""
          width="300px"
          heigt="350px"
          style={{ marginBottom: "50px", marginTop: "60px" }}
        />
      </div>
    </div>
  );
};
