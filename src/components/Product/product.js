import { useState, useEffect } from "react";

import { Button, Table, Form, Modal } from "react-bootstrap";
import "./product.css";

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
            description:
              "Kiko In the Deep Sea menggambarkan petualangan mereka di dasar laut akibat kerusakan ekosistem di seluruh perairan. Mereka bertualang bersama Putri Carla si Ikan Duyung dari Shell Castle, untuk mencari Lima Mutiara Pelindung, yang dapat memulihkan lingkungan yang rusak.",
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
            description:
              "Kiko In the Deep Sea menggambarkan petualangan mereka di dasar laut akibat kerusakan ekosistem di seluruh perairan. Mereka bertualang bersama Putri Carla si Ikan Duyung dari Shell Castle, untuk mencari Lima Mutiara Pelindung, yang dapat memulihkan lingkungan yang rusak.",
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

  const handleAdd = (event) => {
    event.preventDefault();
    const newMovie = {
      id: data.length + 1,
      title: event.target.title.value,
      director: event.target.director.value,
      genre: event.target.genre.value,
      stok: parseInt(event.target.stok.value),
      harga: event.target.harga.value,
      tayang: event.target.tayang.value,
      lokasi: event.target.lokasi.value,
      status: event.target.status.value,
    };
    setData([...data, newMovie]);
    event.target.reset();
  };

  //Pop Up Add
  const [open , setOpen] = useState(false)

  const handleHide = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  //Pop up
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Pop UP Edit
  const [lihat, setLihat] = useState(false);

  const handleTutup = () => setLihat(false);
  const handleBuka = () => setLihat(true);

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
          onClick={() => {
            handleOpen();
            handleAdd();

          }}
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
                    onClick={() => {
                      handleBuka();
                      handleEdit(item.id);
                    }}
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
          <Modal
            show={lihat}
            onHide={handleTutup}
            key={item.id}
            size="lg"
            style={{ color: "black" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Detail Film</Modal.Title>
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
                  <div className="tabel-input-product-description">
                    {/* Description field */}
                    <label>
                      Description :
                      <input
                        as="textarea"
                        name="harga"
                        value={editData.description}
                        onChange={handleChange}
                        className="input-product-admin"
                      />
                    </label>
                    
                  </div>
                </Form>
              )}
            </Modal.Body>
            <Modal.Footer className="modal-footer">
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
        {/* Pop Up Add */}
        {data.map((item) => (
          <Modal
            show={open}
            onHide={handleHide}
            key={item.id}
            size="lg"
            style={{ color: "black" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
             <div>
              <Form onSubmit={handleAdd}>
              <div className="tabel-input-product">
      <label htmlFor="title">Title:
      <input type="text" id="title" name="title" placeholder="Movie Name" className="input-product-admin" required  />
      </label>
      <label htmlFor="director">Director:
      <input type="text" id="director" name="director" placeholder="Director Name" className="input-product-admin" required />
      </label>
</div>
<div className="tabel-input-product">
      <label htmlFor="genre">Genre:
      <input type="text" id="genre" name="genre" placeholder="Genre" className="input-product-admin" required />
      </label>
      <label htmlFor="stok">Stok:
      <input type="number" id="stok" name="stok" placeholder="Stok Ticket" className="input-product-admin" required />
      </label>
      </div>
      <div className="tabel-input-product">
      <label htmlFor="harga">Harga:
      <input type="text" id="harga" name="harga" placeholder="Harga" className="input-product-admin" required />
      </label>
      <label htmlFor="tayang">Penayangan:
         <input type="text" id="tayang" name="tayang"placeholder="Jadwal Penayangan"className="input-product-admin" required />
         </label>
</div>
<div className="tabel-input-product">

      <label htmlFor="lokasi">Lokasi:
      <input type="text" id="lokasi" name="lokasi" placeholder="Lokasi" className="input-product-admin" required />
      </label>
      <label htmlFor="status">Status:
      <input type="text" id="status" name="status" placeholder="Status" className="input-product-admin" required />

      </label>
</div>
      <Button type="submit" className="btn-add-movie p-2" variant="dark">Add Movie</Button>
    </Form>
             </div>
               
              
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button onClick={handleHide}>Close</Button>
              
            </Modal.Footer>
          </Modal>
        ))}

        {/* //Pop up */}
        {data.map((item) => (
          <Modal show={show} onHide={handleClose} key={item.id}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title-product">
                Delete Item
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
                className="btn-delete-product-admin-modal"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
      </div>
    </>
  );
};

export default Product;
