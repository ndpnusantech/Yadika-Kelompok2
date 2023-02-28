import Cards from "../Card/card"
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
          <h1 className="txt-upComing">Up Coming</h1>
          <Cards />
        </div>
      </div>
    );
}
export default Up ;