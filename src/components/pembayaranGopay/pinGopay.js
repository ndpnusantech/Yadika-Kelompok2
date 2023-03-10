import React from "react";
import { Button , Modal} from "react-bootstrap";
import "./pinGopay.css";
import { useState } from "react";

const PinBuatGopay =() => {
  const logo = "./assets/logo/logoo 2.png"
  const Gopay = "./assets/logo/LogoGopay1.png"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="logo-pin-gopay">
        <img style={{width:"330px"}} src={logo} alt="GOPAY"/>
        <img style={{width:"150px" , marginTop:"-7px"}} src={Gopay} alt="gopay"/>
      </div>
      <div className="conPin">
        <div className="pinGpay">
          <h4 className="pt-4 pinn">Masukan Pin Gopay</h4>
          <h4>Masukan Pin Gopay Kamu</h4>
          <div className="inputPin" style={{ marginTop: "100px" }}>
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
          </div>
          <Button variant="success" onClick={handleShow} className="btn-confirm-pin-gopay">Konfirmasi</Button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-dana">Pembayaran Sukses !</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-dana">
          Terima kasih telah menggunakan Gopay sebagai metode pembayaran anda
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href="/buktiPembayaran" className="btn-popup-dana">Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default PinBuatGopay