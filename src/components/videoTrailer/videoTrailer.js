import { Button , Ratio} from "react-bootstrap";

import Sidebar from "../layouts/sidebar/sidebar";
import "./videoTrailer.css"

const Videotrailer = () => {
    return (
        <div>
        <div>
            <Sidebar/>
        </div>
        <div className="isiRatio" style={{ width: 1000, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
        <embed src="https://www.youtube.com/embed/cyAZgKBh-Wg" />
      </Ratio>
    </div>
      <div className="deskripsi-trailer">
        <h1>Kiko Deep Sea</h1>
        <h2>Sally Wongso</h2>
        <p>Kiko In the Deep Sea menggambarkan petualangan mereka di dasar laut akibat kerusakan ekosistem di seluruh perairan. Mereka bertualang bersama Putri Carla si Ikan Duyung dari Shell Castle, untuk mencari Lima Mutiara Pelindung, yang dapat memulihkan lingkungan yang rusak.</p>
      </div>
      <div className="btn-trailer">
        <Button href="#addFavorite" variant="outline-light" className="btn-add">Add To Favorite</Button>
        <Button href="/buyTicket" variant="outline-light" className="btn-buy">Buy Ticket</Button>
      </div>
        </div>
    )
}
export default Videotrailer;
