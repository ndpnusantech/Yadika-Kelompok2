import Cards from "../Card/card"
import NavigationBar from "../layouts/navbar/navbar"
import Sidebar from "../layouts/sidebar/sidebar"
import "./tiket.css"

const Tiket = () => {
    return (
        <div>
        <div>
            <NavigationBar></NavigationBar>
            <Sidebar></Sidebar>
        </div>
        <div className="cardsss">
            <h1 className="txt-tiket">Laga</h1>
<Cards></Cards>
        </div>
        <div className="cardsss">
            <h1 className="txt-tiket">Anime</h1>
<Cards></Cards>
        </div>
        </div>
    )
}
export default Tiket