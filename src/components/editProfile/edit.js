import Sidebar from "../layouts/sidebar/sidebar";
import './edit.css'
const Edit = () => {
    const logo1 = "./assets/logo/logoo 2.png";

    return (
        <>
            <Sidebar />
            <div className="gambarLogo">
                <img
                    src={logo1}
                    alt=''
                    style={{ width: "450px" }} />
            </div>

        <div className="boxEditProfile">
            <div className="formEditProfile">
                <form action="">
                <input type="file" required id="img" /><button className="btn-edit">Edit</button>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Username" required id="username" /><button className="btn-edit">Edit</button>
                    <br />
                    <br />
                    <input type="password" placeholder="Password" required id="password" /><button className="btn-edit">Edit</button>
                    <br />
                    <br />
                    <input type="email" placeholder="Email" required id="email" /><button className="btn-edit">Edit</button>
                    <br />
                    <br />
                    <input type="tel" placeholder="No. Handphone" required id="noHP" /><button className="btn-edit">Edit</button>
                </form>
                <div className="Btn-Ep">
                    <button className="save">Save</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Edit;