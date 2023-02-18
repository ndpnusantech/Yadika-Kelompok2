import "./akun.css";

const Akun = () => {
  const logo = "/assets/logo/logoo 2.png";

  return (
    <div className="profileUser">
      <div className="sidebar">
        <nav>
          <img src={logo} alt="" width="200px" />
          <div className="nav-link">
            
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Ticket</a>
              </li>
              <li>
                <a href="" className="this">Account</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="infoUser">
        <h1 className="nama">Hi, User</h1>
        <div className="foto"></div>
      </div>
    </div>
  );
};

export default Akun;
