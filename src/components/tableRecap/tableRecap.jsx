import "./tableRecap.css";
import Button from 'react-bootstrap/Button';
// import { Container } from "react-bootstrap";

const TableRecap = () => {
  return (
    <div className="table-recapAdm">
          {/* <button className="btn-tblExport">
            export
          </button> */}
      <table>
        <tbody>
          {/* <tr>
            <th colSpan="3" className="option-tabel">
              Pilih Lokasi :<select>{optionItems}</select>
            </th>
          </tr> */}
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
          <tr>
            <th colSpan="3" className="th">

            <Button variant="outline-primary">Export</Button>
            </th>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
};
export default TableRecap;
