import Cards from "../Card/card"
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import "./Now.css"

const Now = () => {
    return (
      <div>
        <div className="kiri">
          <NavigationBar />
          <Sidebar />
        </div>
        <div className="kanan">
          <h1 className="txt-nowPlaying">Now Playing</h1>
          <Cards />
        </div>
      </div>
    );
}
export default Now ;