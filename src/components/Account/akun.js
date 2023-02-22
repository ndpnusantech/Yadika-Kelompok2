import Sidebar from "../layouts/sidebar/sidebar";
import "./akun.css";

const Akun = () => {
  const logo1 = "/assets/logo/pngwing 4.png";
  const logo2 = "/assets/logo/pngwing 2.png";
  const logo3 = "/assets/logo/pngwing 3.png";

  return (
    <>
      <Sidebar />
      <div className="profileUser">
        <div className="infoUser d-flex  justify-content-around ">
          <h1 className="nama">Hi, User</h1>
          <div className="foto"></div>
        </div>
        <div className="boxUser d-flex align-items-center ">
          <div className="history item">
            <button>
              <img src={logo1} alt="" />
              <p>History</p>
            </button>
          </div>
          <div className="favourite item">
            <button>
              <img src={logo2} alt="" />
              <p>Favourite</p>
            </button>
          </div>
          <div className="edit-P item">
            <button>
              <img src={logo3} alt="" />
              <p>Edit Profile</p>
            </button>
          </div>
        </div>
        <div className="boxTransaction">
          <div className="transaction">
            <button>
              <h3>TRANSACTION HISTORY   › </h3>
            </button>
          </div>
        </div>
        <div className="logOut">
          <button >
            <a href="/">LOG OUT</a>
          </button>
        </div>
        <div className="version">
          <p>V.0.0.1</p>
        </div>
      </div>
    </>
  );
};

export default Akun;
