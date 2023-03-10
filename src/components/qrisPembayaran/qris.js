import "./qris.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const QrisBayar = () => {
  const logoC = "../assets/logo/logoo 2.png";
  const logoqris = "../assets/logo/logoqris.png";
  const barkotQris = "../assets/logo/barkotQris.png";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="logoCinemaVii">
        <img src={logoC} alt="logo-cinemaVII" className="logoVII" />
      </div>
      <div className="qris-logo">
        <img src={logoqris} alt="logo-qris" className="logo-Qris" />
      </div>

      <div className="box-qris" onClick={handleShow}>
        <div className="barkot-qris">
          <div className="title-jdl-flm">
            <h2>Suzume No Tojimari</h2>
          </div>
          <img src={barkotQris} alt="barkot-Qris" className="barkotQris" />
          <div className="token-qris">
            <h4>NMID : XXXXXX</h4>
          </div>
        </div>
      </div>

      {/* <div className="btn-buktiPembayaran-qris">
        <button className="btn-BuktiQris">Lihat Bukti Pembayaran</button>
      </div> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="tittle-modalQ">
            Pembayaran Sukses!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="subTitle-modalQ">
          Terima Kasih Telah Menggunakan QRIS Untuk Pembayaran Anda
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="p-4" href="/buktiPembayaran">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default QrisBayar;
