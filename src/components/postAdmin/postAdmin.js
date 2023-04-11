import AdmSidebar from "../layouts/admSidebar/admSidebar";
import "./postAdmin.css";

const logo5 = "./assets/logo/logoo 2.png";
const PostAdmin = () => {
  const options = [
    "Cinema VII Jakarta",
    "Cinema VII Bandung",
    "Cinema VII Surabaya",
    "Cinema VII Cirebon",
    "Cinema VII Konoha",
  ];
  const optionItems = options.map((option) => (
    <option key={option}>{option}</option>
  ));
  // option baru
  const options2 = [
    "Now Playing",
    "Up Coming",
    // "Closed",
  ];
  const optionItems2 = options2.map((options2) => (
    <option key={options2}>{options2}</option>
  ));
  // option baru
  const options3 = [
    "Action",
    "Drama",
    "Fantasy",
    "Comedy",
    "Horor",
    "Anime",
    "Laga",
  ];
  const optionItems3 = options3.map((options3) => (
    <option key={options3}>{options3}</option>
  ));
  // option baru
  const options4 = ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00"];
  const optionItems4 = options4.map((options4) => (
    <option key={options4}>{options4}</option>
  ));
  // option baru
  const options5 = ["Rp. 30.000,00", "Rp. 35.000,00", "Rp. 40.000,00"];
  const optionItems5 = options5.map((options5) => (
    <option key={options5}>{options5}</option>
  ));
  // option baru
  const options6 = ["1","2","3","4","5","6"];
  const optionItems6 = options6.map((options6) => (
    <option key={options6}>{options6}</option>
  ));

  return (
    <>
      <AdmSidebar />
      <div className="logoPostAdmin">
        <img
          src={logo5}
          alt=""
          width="240px"
          height="80px"
          style={{ marginBottom: "30px", marginTop: "45px", textAlign:"center"}}
        />
      </div>
      <div className="newAdd">
        <h1>New Add Film</h1>
      </div>
      <div className="lapisan">
        <div className="lapisan1">
          <form action="">
            <h1>Title Film</h1>
            <input type="text" width="600px" height="100px" />
            <br />
            <br />
            <h1>Link Film</h1>
            <input type="text" />
            <br />
            <br />
            <h1>Director Film</h1>
            <input type="text" />
            <br />
            <br />
            <h1>Description Film</h1>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
        </div>
        <div className="lapisan2">
          <form action="">
            <table className="tbl-recap-options-post">
              {/* <div className="opt-tr-gabung" style={{ display: "flex" }}> */}
              <tr className="tr-option-post">
                <th className="option-tabel">Lokasi</th>
                <th style={{ width: "1rem" }}>:</th>
                <th>
                  <select>{optionItems}</select>
                </th>
              </tr>
              <tr
                className="tr-option-post"
                // style={{ marginLeft: "1.7rem" }}
              >
                <th className="option-tabel-post">Gendre</th>
                <th style={{ width: "1rem" }}>:</th>
                <th>
                  <select>{optionItems3}</select>
                </th>
              </tr>
              {/* </div> */}
              {/* <div className="opt-tr-gabung" style={{ display: "flex" }}> */}
              <tr className="tr-option-post">
                <th className="option-tabel">Jam tayang</th>
                <th style={{ width: "1rem" }}>:</th>
                <th>
                  <select>{optionItems4}</select>
                </th>
              </tr>
              <tr className="tr-option-post" style={{ marginLeft: "1.7rem" }}>
                <th className="option-tabel-post">Status</th>
                <th style={{ width: "1rem" }}>:</th>
                <th>
                  <select>{optionItems2}</select>
                </th>
              </tr>
              {/* </div> */}
              {/* <div className="opt-tr-gabung" style={{ display: "flex" }}> */}
              <tr className="tr-option-post">
                <th className="option-tabel">Studio</th>
                <th style={{ width: "1rem" }}>:</th>
                <th>
                  <select>{optionItems6}</select>
                </th>
              </tr>
              <tr className="tr-option-post" style={{ marginLeft: "1.7rem" }}>
                <th className="option-tabel-post">Harga</th>
                <th style={{ width: "1rem" }}>:</th>
                <th>
                  <select>{optionItems5}</select>
                </th>
              </tr>
            </table>
            <div className="lapisan3" style={{ fontSize: "20px", marginTop:"2rem" }}>
              <h1>Image</h1>
              <input type="file" />
              <h1>Video</h1>
              {/* <textarea width="3px" cols="30" rows="10"></textarea> */}
              <input type="file" />
              <br />
              <button>New add film</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostAdmin;
