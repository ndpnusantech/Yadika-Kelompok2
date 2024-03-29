import { useState, useEffect } from "react";
import { Button, Form ,Table} from "react-bootstrap";
import "./lokasi.css"

const Lokasi = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("movieData");
    return savedData ? JSON.parse(savedData) : [
      { id: 1, title: "Kiko In The Deep Sea",director: "Sally Wongso", genre: "Kartun", stok: 1050 , tayang: "6 March 2023" ,lokasi:"Cinema VII Bandung",status:"Now Playing"},
      { id: 2, title: "Suzume no Tojimari", director: "Makoto Shinkai", genre: "Kartun", stok: 950 ,tayang: "8 March 2023" ,lokasi:"Cinema VII Bandung",status:"Now Playing"},
    ];
  });
  const [editData, setEditData] = useState(null);
  const [newData, setNewData] = useState({
    id: null,
    title: "",
    director: "",
    genre: "",
    stok: "",
    tayang: "",
    lokasi: "",
    status: "",
  });

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
    const updatedData = data.map((item) => {
      if (item.id === editData.id) {
        return editData;
      }
      return item;
    });
    setData(updatedData);
    setEditData(null);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const id = Math.max(...data.map((item) => item.id)) + 1;
    const newDataWithId = { ...newData, id };
    const updatedData = [...data, newDataWithId];
    setData(updatedData);
    setNewData({
      id: null,
      title: "",
      director: "",
      genre: "",
      stok: "",
      tayang: "",
      lokasi: "",
      status: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  return (
    <>
      <div className="all-kategori">
        <div className="table-admin">
          {data.map((item) => (
          <Button
            className="btn-add-product-admin"
            variant="light"
            onClick={() => handleSave(item.id)}
          >
            Add
          </Button>
          ))}
          <Table className="tr-admin">
            <thead>
              <tr>
                <th className="th-admin">ID</th>
                <th className="th-admin">Lokasi</th>
                <th className="th-admin">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="td-admin">{item.id}</td>
                  <td className="td-admin">{item.lokasi}</td>
                  <td className="td-admin">
                    <Button
                      className="btn-edit-product-admin"
                      variant="light"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn-delete-product-admin"
                      variant="light"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {editData && (
            <Form onSubmit={handleSave} className="edit-form-admin">
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
              <Button
                className="btn-save-product-admin"
                variant="light"
                type="submit"
              >
                Save
              </Button>
            </Form>
          )}

          {editData && (
            <Form onSubmit={handleAdd} className="edit-form-admin">
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
              <Button
                className="btn-save-product-admin"
                variant="light"
                type="submit"
              >
                Save
              </Button>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

export default Lokasi;
