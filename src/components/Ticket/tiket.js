import Cards from "../Card/card";
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import "./tiket.css";

const Tiket = () => {
  return (
    <div>
      <div>
        <NavigationBar></NavigationBar>
        <Sidebar></Sidebar>
      </div>
      
      <div className="cards-ticket">
      <div className="cardsLaga">
        <h1 className="txt-tiket">Laga</h1>
        <Cards></Cards>
      </div>
      </div>

      <div className="cards-ticket">
      <div className="cardsAnime">
        <h1 className="txt-tiket">Anime</h1>
        <Cards></Cards>
      </div>
      </div>
    </div>
  );
};
export default Tiket;
