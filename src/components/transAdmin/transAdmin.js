import "./transAdmin.css";
import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";

const AdminTransaksi = () => {
  const logoN = "./assets/navbar/logoo2.png";
  const bukti1 = "./assets/transAdmin/qrisBukti1.jpg";
  
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  return (
    <>
      <div className="logoImg">
        <img
          src={logoN}
          alt=""
          width="300px"
          heigt="350px"
          style={{
            marginBottom: "30px",
            marginTop: "60px",
            marginLeft: "745px",
          }}
        />
      </div>
      <Table className="tableAdminTrans">
        <thead>
          <tr>
            <th>Username</th>
            <th>Code</th>
            <th>Date</th>
            <th>Status</th>
            <th>pembayaran</th>
            <th>BuktiTransaksi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <th>Fachri</th>
            <th>JASGD2</th>
            <th>6 JAN 2023</th>
            <th>Paid</th>
            <th>bukti Qris</th>
            <th>
            <Button
                className="btn-delete-transaction-admin"
                variant="light"
                onClick={() => {
                  setShowPopup(true);
                  setPopupImage(bukti1);
                }}
              >
                lihat
              </Button>
              {/* <img
                src={bukti1}
                alt="buktiTransaction1"
                style={{ width: "8rem" }}
              ></img> */}
            </th>
            <th>
              <Button
                className="btn-delete-transaction-admin"
                variant="light"
                // onClick={handleShow}
              >
                Delete
              </Button>{" "}
            </th>
          </tr>
        </tbody>
      </Table>
      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <Modal.Body>
          <img src={popupImage} alt="buktiTransaction1" style={{ width: "100%" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPopup(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminTransaksi;
