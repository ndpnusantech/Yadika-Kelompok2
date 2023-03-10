import "./HalLoginGopay.css";
import { Form } from "react-bootstrap";

const LoginGopay = () => {
  const logo = "/assets/logo/logoo 2.png";
  const logoGopay1 = "../assets/logo/logoGopay1.png";

  return (
    <div className="boxLoginGopay">
      <div className="logoLogin mt-3 d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="" width="330px" />
        <img src={logoGopay1} width="150px" style={{ marginTop: "-7px" }} />
      </div>

      <div className="boxMasukgopay mx-auto mt-2">
        <div className="title">
          <h4>Masuk</h4>
        </div>
        <div className="paragraft w-50">
          <p>Silakan masuk dengan no hp-mu yang terdaftar</p>
        </div>
        <Form>
          <Form.Label>
            Nomer Hp <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <div className="inputForm d-flex align-items-center mb-2">
            <h5 className="me-2 mt-1">+62</h5>
            <Form.Control placeholder="12345678" className="p-2" />
          </div>
          <button>Konfirmasi</button>
        </Form>
      </div>
    </div>
  );
};
export default LoginGopay;
