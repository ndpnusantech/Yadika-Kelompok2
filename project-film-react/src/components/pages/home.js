import Carousels from "../carousel/carousel";
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";

const Home = () => {
    return(
        <div className="home">
        <NavigationBar/>
        <Sidebar/>
        <div className="content">
            <Carousels/>



        </div>
        </div>
    );
};
export default Home;