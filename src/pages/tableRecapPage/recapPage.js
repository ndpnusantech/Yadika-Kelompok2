import AdmSidebar from "../../components/layouts/admSidebar/admSidebar";
import TableRecap from "../../components/tableRecap/tableRecap";

import "./recapPage.css";

const RecapTablePage = () => {
  const imgLogoCi = "./assets/navbar/logoo2.png";
  const options = [
    "All",
    "Kiko in the deep Sea",
    "suzume no tojimari",
    "One Piece Red",
  ];
  const optionItems = options.map((option) => (
    <option key={option}>{option}</option>
  ));
  const options2 = [
    // "Bandung",
    // "Jakarta",
    // "Mars",
    // "Konoha",
    // "Jalan Kerang no. 3",
    "Cinema VII Bandung",
    "Cinema VII Jakarta",
    "Cinema VII Mars",
    "Cinema VII Konoha",
    "Cinema VII Jalan Kerang no. 3",
  ];
  const optionItems2 = options2.map((options2) => (
    <option key={options2}>{options2}</option>
  ));
  const options3 = [
    "1",
    "2",
    "3",
    "4",
    "5",
  ];
  const optionItems3 = options3.map((options3) => (
    <option key={options3}>{options3}</option>
  ));
  const options4 = ["Action", "Laga", "Anime", "Comedy", "Romance"];
  const optionItems4 = options4.map((options4) => (
    <option key={options4}>{options4}</option>
  ));
  return (
    <>
      <AdmSidebar />
      {/* img-logo */}
      <img
        src={imgLogoCi}
        alt="img-logo"
        style={{ width: "15rem", marginLeft: "40rem", marginTop: "2.5rem" }}
      ></img>
      <table className="tbl-recapOptions">
        <tr className="tr-option">
          <th className="option-tabel">Judul Film</th>
          <th style={{ width: "1rem" }}>:</th>
          <th>
            <select>{optionItems}</select>
          </th>
        </tr>
        <tr className="tr-option">
          <th className="option-tabel">Gendre</th>
          <th style={{ width: "1rem" }}>:</th>
          <th>
            <select>{optionItems4}</select>
          </th>
        </tr>
        <tr className="tr-option">
          <th className="option-tabel">Lokasi</th>
          <th style={{ width: "1rem" }}>:</th>
          <th>
            <select>{optionItems2}</select>
          </th>
        </tr>
        <tr className="tr-option">
          <th className="option-tabel">Studio</th>
          <th style={{ width: "1rem" }}>:</th>
          <th>
            <select>{optionItems3}</select>
          </th>
        </tr>
      </table>
      <TableRecap />
    </>
  );
};
export default RecapTablePage;
