import "./danaSukses.css"
import { Col , Image , Button , Container , Form , InputGroup , Modal} from "react-bootstrap"
import React, { useState } from 'react';



const DanaSukses = () => {
    const logoCinema = "./assets/logo/logoo 2.png"
    const logoDana = "./assets/logo/Dana.png"
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
<>
<div className="logoAtas-confirm-dana ">
    
    <Col>
<Image src={logoCinema} className="logoCinemaDana-confirm " /><br/>
<Image src={logoDana} className="logoDana-confirm"/>
</Col>
  
</div>
<>
<Container className="Container-confirm-dana">
<h1 className="txt-confirm ">
Pembayaran Sukses !
</h1>

<h2 className="txt-deskripsi-confirm">Tikcet Movie : Kiko In The Deep Sea</h2>
<h2 className="txt-deskripsi-confirm1">Metode Pembayaran</h2>
<h2 className="txt-deskripsi-confirm2">Saldo DANA</h2>
<h2 className="txt-deskripsi-confirm1">Tanggal Pembayaran</h2>
<h2 className="txt-deskripsi-confirm2">6 February 2023</h2>

<InputGroup className="input-group-confirm-dana mx-auto">
<InputGroup.Text className="input-group-text-confirm-dana">
Total
</InputGroup.Text>
<Form.Control type="text" value="Rp.50.000,00" className="input-txt-harga-dana"></Form.Control>
</InputGroup>
<Button className="btn-DANA-confirm " onClick={handleShow}>BERIKUTNYA</Button>

</Container>
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
          Terima kasih telah menggunakan DANA sebagai metode pembayaran anda
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href="/buktiPembayaran" className="btn-popup-dana">Confirm</Button>
        </Modal.Footer>
      </Modal>
</>
</>
    )
}
export default DanaSukses