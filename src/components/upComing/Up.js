import Cards from "../Card/card"
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import "./Up.css"

const Up = () => {
    return(
        <div>
        <div className="kiri-up">
        <NavigationBar/>
            {/* <h1 className="txt " >Up Coming</h1> */}
        <Sidebar/>
        </div>
        <div className="kanan-up">
            <Cards/>
            </div>
            </div>    
    )
}
export default Up ;