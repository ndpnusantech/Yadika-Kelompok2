import "./spay.css";
import {Button,Modal,Form} from "react-bootstrap"
import React, { useState } from 'react';

const Spay2 = () => {
    const logoD = "./assets/navbar/logoo2.png";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    // State Untuk Memunculkan Button Pada Saat Mengisi Input File -fachri
  const [selectedFile, setSelectedFile] = useState();
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }

    return(
<>
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
      </div>
            <div className="btn-inputBuktiPembayaran-qris">
        <Form.Group controlId="formFile" className="mb-3  input-file-qris">
          <Form.Label>Input bukti pembayaran</Form.Label>
          <Form.Control type="file" className="w-auto" onChange={handleFileSelect} />
        </Form.Group>
        <div className="btn-show-qris">
        {selectedFile && (
          <Button variant="light" className="mt-1 mb-3 btn-show-spay" onClick={handleShow}>
            Konfirmasi
          </Button>
         )}
         </div>
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
  Terima kasih telah menggunakan ShopeePay sebagai metode pembayaran anda
</Modal.Body>
<Modal.Footer>
  <Button variant="dark" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" href="/buktiPembayaran" className="btn-popup-dana">Confirm</Button>
</Modal.Footer>
</Modal>
</>
    )

}

export default Spay2;