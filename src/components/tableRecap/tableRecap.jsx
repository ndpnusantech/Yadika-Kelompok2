import "./tableRecap.css";
// import { Container } from "react-bootstrap";

const TableRecap = () => {
  return (
    <div className="table-recapAdm">
      <table>
        <tbody>       
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
          <button className="btn-tblExport">
            export
          </button>
    </div>
  );
};
export default TableRecap;
