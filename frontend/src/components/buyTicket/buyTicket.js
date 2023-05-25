import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { dataButton } from "../../Data/dataButtons";
import { dataTime } from "../../Data/dataTimes";
import Sidebar from "../layouts/sidebar/sidebar";
import "./butTicket.css";

const BuyTicket = () => {
  const kiko = "./Images Card Movie/kiko deep sea.jpg";
  return (
    <>
    <>
      <Sidebar />
      <div className="image">
        <img
          style={{ width: "35vh", height: "55vh" }}
          className="d-flex  img1"
          src={kiko}
          alt="marvel"
        />
        <div className="txt-buyTicket">
          <h1 className="txt-h1">KIKO IN THE DEEP SEA</h1>
          <br />
          <h2 className="txt-h2">
          Kiko In the Deep Sea menggambarkan petualangan mereka di dasar laut akibat kerusakan ekosistem di seluruh perairan. Mereka bertualang bersama Putri Carla si Ikan Duyung dari Shell Castle, untuk mencari Lima Mutiara Pelindung, yang dapat memulihkan lingkungan yang rusak
          </h2>
        </div>
      </div>

      <ButtonToolbar
        className="mb-3  btn-table"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup className="me-2 btn-table2" aria-label="First group">
          {dataButton.map((data) => (
            <Button variant="secondary" id={data.id}>
              {data.hari}
              <br />
              {data.tanggal}
            </Button>
          ))}
        </ButtonGroup>
      </ButtonToolbar>
    
      <div className="waktu">
        <h1 className="txt-bioskop">Cinema VII Bandung</h1>
        <br />
        <div className="btn-waktu">
          {dataTime.map((data) => (
            <div id={data.id}>
              <Button variant="light" className="btn-data-waktu">
                {data.time}
              </Button>
            </div>
  
 
       


))}
</div>

        </div>
      <div className="waktu">
        <h1 className="txt-bioskop">Cinema VII Jakarta</h1>
        <br />
        <div className="btn-waktu">
          {dataTime.map((data) => (
            <div id={data.id}>
              <Button variant="light" className="btn-data-waktu">
                {data.time}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="waktu">
        <h1 className="txt-bioskop">Cinema VII Mars</h1>
        <br />
        <div className="btn-waktu">
          {dataTime.map((data) => (
            <div id={data.id}>
              <Button variant="light" className="btn-data-waktu">
                {data.time}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="confirm">
        <Button variant="light" href="/ChooseSeat" >
          CONFIRM
        </Button>
      </div>
    </>
    </>
  )
};

export default BuyTicket;
