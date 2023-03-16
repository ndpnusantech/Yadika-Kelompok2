import "./favorite.css";
import CardFavorit from "./cardFavorite";
import Sidebar from "../layouts/sidebar/sidebar";

const Favorite = () => {
  const logoF = "./assets/logo/logoo 2.png";
  return (
    <div className="favorite">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="inFav">
        <img className="logFav" src={logoF} alt="Logo" width="300px" />
        <h2>Favorite</h2>
        <div className="favFilm">
          <div className="card-favorite">
            <CardFavorit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
