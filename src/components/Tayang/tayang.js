import { useState, useEffect } from "react";
import { Button, Form,Table } from "react-bootstrap";


const Tayang = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("movieData");
    return savedData ? JSON.parse(savedData) : [
      { id: 1, title: "Kiko In The Deep Sea",director: "Sally Wongso", genre: "Kartun", stok: 1050 , tayang: "6 March 2023" ,lokasi:"Cinema VII Bandung",status:"Now Playing"},
      { id: 2, title: "Suzume no Tojimari", director: "Makoto Shinkai", genre: "Kartun", stok: 950 ,tayang: "8 March 2023" ,lokasi:"Cinema VII Bandung",status:"Now Playing"},
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

  return (
    <>
    <div className="all-kategori">
    <div className="table-admin">
      <Table className="tr-admin">
        <thead>
          <tr >
            <th className="th-admin">ID</th>
            <th className="th-admin">Stok</th>
            <th className="th-admin">Penayangan</th>
            <th className="th-admin">Status</th>
            <th className="th-admin">Action</th>
          </tr>
        </thead>
        <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="td-admin">{item.id}</td>
          <td className="td-admin">{item.stok}</td>
          <td className="td-admin">{item.tayang}</td>
          <td className="td-admin">{item.status}</td>
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
        <Form onSubmit={handleSave}>
          <label>
            Stok:
            <input
              type="text"
              name="stok"
              value={editData.stok}
              onChange={handleChange}
            />
          </label>
          <label>
            Jam Tayang:
            <input
              type="text"
              name="tayang"
              value={editData.tayang}
              onChange={handleChange}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={editData.status}
              onChange={handleChange}
            />
          </label>
          <Button className="btn-save-product-admin" type="submit">
            Save
          </Button>
        </Form>
      )}
    </div>
    </div>
    </>
  );
};

export default Tayang;
