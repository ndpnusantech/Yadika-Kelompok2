import "./tableRecap.css";
// import { Container } from "react-bootstrap";

const TableRecap = () => {
   const options = ['Jakarta', 'Bandung', 'Surabaya'];
   const optionItems = options.map((option) =>
    <option key={option}>{option}</option>
  );
  return (
    <div className="table-recap">
      <table>
        <tbody>
          <tr>
            <th rowSpan="6" className="th">
              Recap Penayangan
            </th>
            <th colSpan="3" className="option-tabel">
              Pilih Lokasi :<select>{optionItems}</select>
            </th>
          </tr>
          <tr>
            <th colSpan="3" className="th">
              export
            </th>
          </tr>
          <tr className="th">
            <th>Judul Film</th>
            <th>Jumlah Penonton</th>
            <th>Total Pendapatan</th>
          </tr>
          <tr className="td">
            <td>One Piece Red</td>
            <td>60.000</td>
            <td>2.275.000.000</td>
          </tr>
          <tr className="td">
            <td>suzume no tojimari</td>
            <td>50.000</td>
            <td>1.750.000.000</td>
          </tr>
          <tr className="td">
            <td>Kiko in the deep Sea</td>
            <td>15.000</td>
            <td>525.000.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TableRecap;
