import "./spay.css";
import {Button,Modal} from "react-bootstrap"
import React, { useState } from 'react';

const Spay2 = () => {
    const logoD = "./assets/navbar/logoo2.png";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
<Button onClick={handleShow}  className="button-spay2"> Konfirmasi</Button>
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