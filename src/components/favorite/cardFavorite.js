import React, { useState } from "react";
import "./cardFavorit.css";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { data } from "../../Data/dataCards";
import { Modal } from "react-bootstrap";

const CardFavorit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="set-card">
      <Row className="card-row">
        {data.map((data) => (
          <Col md="auto">
            {/* <a href="/trailer"> */}
            <Card className="card" id={data.id}>
              <button className="butX" variant="primary" onClick={handleShow}>
                x
              </button>
              <Card.Img className="card-img" src={data.img} />
              <Card.Body className="card-body">
                <Card.Text className="card-txt">{data.status}</Card.Text>
                <Card.Title>{data.tittle}</Card.Title>
                <Card.Text className="card-txt">{data.text}</Card.Text>
              </Card.Body>
            </Card>
            {/* </a> */}
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="modalContent">Peringatan!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalContent">
          Apakah Anda yakin Akan Menghapus Dari Favorite?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardFavorit;
