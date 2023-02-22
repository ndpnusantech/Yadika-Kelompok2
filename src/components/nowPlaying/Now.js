import Cards from "../Card/card"
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import "./Now.css"

const Now = () => {
    return(
        <div>
        <div className="kiri">
        <NavigationBar/>
            <h1 className="txt">Now Playing</h1>
        <Sidebar/>
        </div>
        <div className="kanan">
            <Cards/>
            </div>
            </div>    
    )
}
export default Now ;