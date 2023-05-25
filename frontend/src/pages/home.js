import Cards from "../components/Card/card";
import Carousels from "../components/carousel/carousel";
import NavigationBar from "../components/layouts/navbar/navbar";
import Sidebar from "../components/layouts/sidebar/sidebar";


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