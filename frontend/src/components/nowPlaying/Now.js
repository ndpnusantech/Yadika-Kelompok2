
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import "./Now.css";
import CardNowPlaying from "./CardNowPlaying"

const Now = () => {
  return (
    <div>
    <div className="kiri-now">
      <NavigationBar />
      <Sidebar />
    </div>
    <div className="kanan-now">
      <h2 className="txt-nowPlaying">Now Playing</h2>
      <CardNowPlaying />
    </div>
  </div>
  );
};
export default Now;
