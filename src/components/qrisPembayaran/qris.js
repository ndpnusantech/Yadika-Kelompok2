
import "./qris.css"
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


import "./qris.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const QrisBayar = () => {
  const logoC = "../assets/logo/logoo 2.png";
  const logoqris = "../assets/logo/logoqris.png";
  const barkotQris = "../assets/logo/barkotQris.png";
  const [show, setShow] = useState(false);

  
  // State untuk membuat modal -fachri
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // State Untuk Memunculkan Button Pada Saat Mengisi Input File -fachri
  const [selectedFile, setSelectedFile] = useState();
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };



  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <div className="logoCinemaVii">
        <img src={logoC} alt="logo-cinemaVII" className="logoVII" />
      </div>
      <div className="qris-logo">
        <img src={logoqris} alt="logo-qris" className="logo-Qris" />
      </div>


      <div className="box-qris" >

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

      <div className="btn-inputBuktiPembayaran-qris">
        <Form.Group controlId="formFile" className="mb-3 input-file-qris">
          <Form.Label>Input bukti pembayaran</Form.Label>
          <Form.Control type="file" onChange={handleFileSelect} />
        </Form.Group>
        <div className="btn-show-qris">
        {selectedFile && (
          <Button variant="light" className="mt-3 " onClick={handleShow}>
            Konfirmasi
          </Button>
         )}
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
    </div>
    </>
  )
};




export default QrisBayar;
