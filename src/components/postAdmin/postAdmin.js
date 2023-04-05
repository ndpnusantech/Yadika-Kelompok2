import AdmSidebar from "../layouts/admSidebar/admSidebar";
import "./postAdmin.css";

const logo5 = "./assets/logo/logoo 2.png";
// function inpImg() {
//     var preview = document.querySelector('#poster');
//     var file = document.querySelector('#inpPost').files[0];
//     var reader = new FileReader();

//     reader.onloadend = function() {
//         preview.src = reader.result;
//       }

//       if (file) {
//         reader.readAsDataURL(file);
//       } else {
//         preview.src = "";
//       }

// }

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
  const options2 = [
    "Cinema VII Jakarta",
    "Cinema VII Bandung",
    "Cinema VII Surabaya",
    "Cinema VII Cirebon",
    "Cinema VII Konoha",
    "Cinema VII Solo", // opsi baru
  ];

  const optionItems2 = options2.map((option) => (
    <option key={option}>{option}</option>
  ));

  return (
    <>
      <AdmSidebar />
      <div className="logoPostAdmin">
        <img
          src={logo5}
          alt=""
          width="400px"
          height="120px"
          style={{ marginBottom: "30px", marginTop: "45px" }}
        />
      </div>
      <div className="newAdd">
        <h1>New Add Film</h1>
      </div>
      <div className="lapisan">
        <div className="lapisan1">
          <form action="">
            <h1>Title</h1>
            <input type="text" width="600px" height="100px" />
            <br />
            <br />
            <h1>Link Film</h1>
            <input type="text" />
            <br />
            <br />
            <h1>Contents</h1>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
        </div>
        <div className="lapisan2">
          <form action="">
            <th colSpan="3" className="option-tabel">
              Pilih Lokasi :<select>{optionItems}</select>
            </th>
            <th colSpan="3" className="option-tabel">
              Status :<select>{optionItems2}</select>
            </th>
            <br/>
            <th colSpan="3" className="option-tabel">
              Gendre :<select>{optionItems2}</select>
            </th>
            <h1>Image</h1>
            <input type="file" />
            <h1>Video</h1>
            {/* <textarea width="3px" cols="30" rows="10"></textarea> */}
            <input type="file" />
            <br />
            <button>New add film</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default PostAdmin;
