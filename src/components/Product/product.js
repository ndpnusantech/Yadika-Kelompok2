import { useState, useEffect } from "react";
import { Button,  Table} from "react-bootstrap";
import "./product.css"
const Product = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("movieData");
    return savedData ? JSON.parse(savedData) : [
      { id: 1, title: "Kiko In The Deep Sea",director: "Sally Wongso", genre: "Kartun", stok: 1050 , tayang: "6 March 2023" ,lokasi:"Cinema VII Bandung",status:"Now Playing"},
      { id: 2, title: "Suzume no Tojimari", director: "Makoto Shinkai", genre: "Kartun", stok: 950 ,tayang: "8 March 2023",lokasi:"Cinema VII Bandung" ,status:"Now Playing"},
    ];
  });
 

  useEffect(() => {
    localStorage.setItem("movieData", JSON.stringify(data));
  }, [data]);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };


 const logo ="/assets/logo/logoo 2.png"

  

  




  return (
    <>
      <div className="img-product-admin">
      <img src={logo} className="image-product-admin" alt="logo"/>
    </div>
    <div className="table-admin">
      <Table className="tr-admin">
        <thead>
          <tr >
            <th className="th-admin">ID</th>
            <th className="th-admin">Title</th>
            <th className="th-admin">Director</th>
            <th className="th-admin">Genre</th>
            <th className="th-admin">Stok</th>
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
              <td className="td-admin">{item.tayang}</td>
              <td className="td-admin">{item.lokasi}</td>
              <td className="td-admin">{item.status}</td>
              <td className="td-admin">

                <Button className="btn-delete-product-admin" variant="light" onClick={() => handleDelete(item.id)}>Delete</Button>
                

                
             

              </td>
            </tr>
          ))}
        </tbody>
      </Table>


    </div>
    </>
  )
};

export default Product;
