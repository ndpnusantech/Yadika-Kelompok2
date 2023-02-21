import "./side.css";

const Sidebar= () => {
  const logo = "./assets/navbar/logoo2.png";

  return (

      <div className="sidebar">
        <nav>
          <img src={logo} alt="" width="200px" />
          <div className="navbar-link">
            <ul>
              <li>
              <hr></hr>
                <a href="">Home</a>
              <li>
              </li>
              <hr></hr>
                <a href="">Ticket</a>
              </li>
              <li>
              <hr></hr>
                <a href="" className="this">Account</a>
              <hr></hr>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    
  );
};

export default Sidebar;