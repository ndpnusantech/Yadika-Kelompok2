import React from "react";

import { Button , Modal ,Form} from "react-bootstrap";

import { Button , Modal} from "react-bootstrap";

import "./pinGopay.css";
import { useState } from "react";

const PinBuatGopay =() => {
  const logo = "./assets/logo/logoo 2.png"
  const Gopay = "./assets/logo/LogoGopay1.png"
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  // State Untuk Memunculkan Button Pada Saat Mengisi Input File -fachri
  const [selectedFile, setSelectedFile] = useState();
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }


  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

          {/* <Button variant="success" onClick={handleShow} className="btn-confirm-pin-gopay">Konfirmasi</Button> */}
          <Button variant="success" onClick={handleShow2} className="btn-confirm-pin-gopay">Konfirmasi</Button>
          <div className="btn-inputBuktiPembayaran-qris">
        <Form.Group controlId="formFile" className="mb-3 input-file-qris">
          <Form.Label>Input bukti pembayaran</Form.Label>
          <Form.Control type="file" onChange={handleFileSelect} />
        </Form.Group>
        <div className="btn-show-qris">
        {selectedFile && (
          <Button variant="success" className="mt-1 mb-3" onClick={handleShow}>
            Konfirmasi
          </Button>
         )}
         </div>
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

      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-dana">Input Pin Sukse</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-dana">
          Sekarang Kirim Bukti Pembayaran Dari Aplikasi
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose2}>
            Close
          </Button>
          {/* <Button variant="primary" href="/buktiPembayaran" className="btn-popup-dana">Confirm</Button> */}
        </Modal.Footer>
      </Modal>


    </div>

  );
}

export default PinBuatGopay