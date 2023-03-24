import { useState, useEffect } from "react";
import { Button, Form ,Table} from "react-bootstrap";
import "./kategori.css"

const Kategori = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("movieData");
    return savedData ? JSON.parse(savedData) : [
      { id: 1, title: "Kiko In The Deep Sea",director: "Sally Wongso", genre: "Kartun", stok: 1050 , tayang: "6 March 2023" ,status:"Now Playing"},
      { id: 2, title: "Suzume no Tojimari", director: "Makoto Shinkai", genre: "Kartun", stok: 950 ,tayang: "8 March 2023" ,status:"Now Playing"},
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
            <th className="th-admin">Title</th>
            <th className="th-admin">Director</th>
            <th className="th-admin">Genre</th>
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

export default Kategori;
