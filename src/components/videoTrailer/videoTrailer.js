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
        <embed src="https://www.youtube.com/embed/zAGVQLHvwOY" />
      </Ratio>
    </div>
        <div className="Btn">
            <Button className="btn-favorite" href="#favorite">ADD TO FAVORITE</Button>
            <Button className="btn-buy" href="#buy">BUY TICKET</Button>
        </div>
        <div className="text">
            <h1>J O K E R</h1><br/>
            <h2>Director</h2><br/>
            <h3>Todd Phillips</h3><br/>
            <h2>Synopsis</h2><br/>
            <h3>Arthur Fleck, seorang badut pesta, hidup dalam keadaan sulit bersama ibunya yang sakit-sakitan. Karena orang-orang menganggapnya aneh, ia memutuskan untuk berubah menjadi jahat dan membuat kekacauan.</h3>
        </div>
        </div>
    )
}
export default Videotrailer;
