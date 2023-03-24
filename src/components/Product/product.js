import "./product.css";
import React, { useState } from "react";
// import { Image } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Product = () => {
  const logo = "assets/logo/logoo 2.png";

  const [data, setData] = useState([
    {
      id: 1,
      title: "Kiko In The Deep Sea",
      director: "Sally Wongso",
      genre: "Kartun",
      stok: 1050,
    },
    {
      id: 2,
      title: "Suzume no Tojimari",
      director: "Makoto Shinkai",
      genre: "Kartun",
      stok: 950,
    },
  ]);

  //Pop up
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleEdit = (id) => {
    const newData = data.find((item) => item.id === id);
    setEditData(newData);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const newData = data.map((item) => {
      if (item.id === editData.id) {
        return editData;
      }
      return item;
    });
    setData(newData);
    setEditData(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="img-product-admin">
        <img src={logo} className="image-product-admin" alt="logo" />
      </div>
      <div className="table-admin">
        <table className="tr-admin">
          <thead>
            <tr>
              <th className="th-admin">ID</th>
              <th className="th-admin">Title</th>
              <th className="th-admin">Director</th>
              <th className="th-admin">Genre</th>
              <th className="th-admin">Stok</th>
              <th className="th-admin">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="td-admin">{item.id}</td>
                <td className="td-admin">{item.title}</td>
                <td className="td-admin">{item.director}</td>
                <td className="td-admin">{item.genre}</td>
                <td className="td-admin">{item.stok}</td>
                <td className="td-admin">
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                  <button onClick={handleShow}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* //Pop up */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title-product">
              Menghapus product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-product">
            Apakah anda yakin ingin menghapus product ini?
          </Modal.Body>
          <Modal.Footer className="modal-footer-product">
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Hapus
            </Button>
          </Modal.Footer>
        </Modal>
        {/* //Popup end */}
        {editData && (
          <form onSubmit={handleSave}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
              />
            </label>
            <label>
              Director:
              <input
                type="text"
                name="director"
                value={editData.director}
                onChange={handleChange}
              />
            </label>
            <label>
              Genre:
              <input
                type="text"
                name="genre"
                value={editData.genre}
                onChange={handleChange}
              />
            </label>
            <label>
              Stok:
              <input
                type="number"
                name="stok"
                value={editData.stok}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Product;
