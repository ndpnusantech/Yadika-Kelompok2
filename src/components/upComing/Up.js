import CardUpComing from "./cardUpComing";
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import "./Up.css"

const Up = () => {
    return (
      <div>
        <div className="kiri-up">
          <NavigationBar />
          <Sidebar />
        </div>
        <div className="kanan-up">
          <h2 className="txt-upComing">Up Coming</h2>
          <CardUpComing />
        </div>
      </div>
    );
}
export default Up ;