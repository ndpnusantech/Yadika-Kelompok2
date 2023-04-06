import { useState, useEffect } from "react";

import { Button,  Table , Form , Modal} from "react-bootstrap";
import "./product.css"



const Product = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("movieData");
    return savedData // Data Dummy
      ? JSON.parse(savedData)
      : [
          {
            id: 1,
            title: "Kiko In The Deep Sea",
            director: "Sally Wongso",
            genre: "Kartun",
            stok: 1050,
            harga: "Rp.50.000,00",
            tayang: "6 March 2023",
            lokasi: "Cinema VII Bandung",
            status: "Now Playing",
          },
          {
            id: 2,
            title: "Suzume no Tojimari",
            director: "Makoto Shinkai",
            genre: "Kartun",
            stok: 950,
            harga: "Rp.50.000,00",
            tayang: "8 March 2023",
            lokasi: "Cinema VII Bandung",
            status: "Now Playing",
          },
        ];
  });

 
  const [editData, setEditData] = useState(null);





  useEffect(() => {
    localStorage.setItem("movieData", JSON.stringify(data));
  }, [data]);

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

  const handleAdd = () => {
    const newMovie = {
      id: data.length + 1,
      title: "",
      director: "",
      genre: "",
      stok: 0,
      harga: "",
      tayang: "",
      lokasi: "",
      status: "",
    };
    setData([...data, newMovie]);
  };
  

  //Pop up
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // Pop UP Edit
  const [lihat , setLihat ] = useState(false)

  const handleTutup = () => setLihat(false)
  const handleBuka = () => setLihat(true)


  const logo = "/assets/logo/logoo 2.png";

  return (
    <>
      <div className="img-product-admin">
        <img src={logo} className="image-product-admin" alt="logo" />
      </div>
      {/* {data.map((item) => (
        <Button style={{marginLeft:"20rem"}}
          className="btn-add-product-admin"
          variant="light"
          onClick={() => handleSave(item.id)}
        >
          Add
        </Button>
      ))} */}
      
      <div className="table-admin">
      <Button
                    className="btn-add-product-admin"
                    variant="light"
                    onClick={handleAdd}
                  >
                  +
                  </Button>
        <Table className="tr-admin">
          <thead>
            <tr>
              <th className="th-admin">ID</th>
              <th className="th-admin">Title</th>
              <th className="th-admin">Director</th>
              <th className="th-admin">Genre</th>
              <th className="th-admin">Stok</th>
              <th className="th-admin">Harga</th>
              <th className="th-admin">Penayangan</th>
              <th className="th-admin">Lokasi</th>
              <th className="th-admin">Status</th>
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
                <td className="td-admin">{item.harga}</td>
                <td className="td-admin">{item.tayang}</td>
                <td className="td-admin">{item.lokasi}</td>
                <td className="td-admin">{item.status}</td>
                <td className="td-admin">
                  <Button
                    className="btn-edit-product-admin"
                    variant="light"
                    onClick={() => {handleBuka();handleEdit(item.id);}}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn-delete-product-admin"
                    variant="light"
                    onClick={handleShow}
                  >
                    Delete
                  </Button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>



        {/* Pop Up Edit */}
          {data.map((item) => (
            <Modal show={lihat} onHide={handleTutup} key={item.id} size="lg" style={{color:"black"}}>  
              <Modal.Header closeButton>
                <Modal.Title>
                  Edit Detail Film
                </Modal.Title>
              </Modal.Header>
            <Modal.Body>
            {editData && (
          <Form onSubmit={handleSave} className="edit-form-admin">
            <div className="tabel-input-product">
            {/* Title field */}
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
            {/* Director field */}
            <label>
              Director:
              <input
                type="text"
                name="director"
                value={editData.director}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
            </div>
            <div className="tabel-input-product">
            {/* Genre field */}
            <label>
              Genre:
              <input
                type="text"
                name="genre"
                value={editData.genre}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
            {/* Stok (stock) field */}
            <label>
              Stok:
              <input
                type="number"
                name="stok"
                value={editData.stok}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
            </div>
            <div className="tabel-input-product">
            {/* Penayangan (screening) field */}
            <label>
              Penayangan:
              <input
                type="text"
                name="tayang"
                value={editData.tayang}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
            {/* Lokasi (location) field */}
            <label>
              Lokasi:
              <input
                type="text"
                name="lokasi"
                value={editData.lokasi}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
            </div>
            <div className="tabel-input-product">
            {/* Status field */}
            <label>
              Status:
              <input
                type="text"
                name="status"
                value={editData.status}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
            {/* Harga field */}
            <label>
              Harga:
              <input
                type="text"
                name="harga"
                value={editData.harga}
                onChange={handleChange}
                className="input-product-admin"
              />
            </label>
           </div>
          </Form>
        )}
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={handleTutup}>Close</Button>
               {/* Save button */}
            <Button
              className="btn-save-product-admin"
              variant="light"
              type="submit"
              onClick={handleSave}
            >
              Save
            </Button>
            </Modal.Footer>
            </Modal>
          ))}



        {/* //Pop up */}
        {data.map((item) => (
          <Modal show={show} onHide={handleClose} key={item.id}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title-product">
                Menghapus product
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-product">
              Apakah anda yakin akan menghapusnya?
            </Modal.Body>
            <Modal.Footer className="modal-footer-product">
              <Button variant="secondary" onClick={handleClose}>
               Cancel
              </Button>
              <Button
                variant="primary"
                className="btn-delete-product-admin"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </div>
    </>
  );};

export default Product
