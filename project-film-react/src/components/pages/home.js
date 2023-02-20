import Carousels from "../carousel/carousel";
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import Cards from "../Card/card";

const Home = () => {
    return(
        <div className="home">
        <NavigationBar/>
        <Sidebar/>
        <div className="content">
            <Carousels/>
            <div className="cardss">
            <Cards/>
            
            </div>

        </div>
        </div>
    );
};
export default Home;