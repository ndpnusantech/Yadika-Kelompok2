import "./side.css";


const Sidebar= () => {
  const logo = "./assets/navbar/logoo2.png";

  return (

      <div className="sidebar">
        <nav>
          <img src={logo} alt="" width="140rem" height="35rem"/>
          <div className="navbar-link">
            <ul>
              <hr className="hr-img"></hr>
              <li>
                <a href="/home">Home</a>
              <li>
              </li>
              <hr></hr>
                <a href="/ticket">Ticket</a>
              </li>
              <li>
              <hr></hr>
                <a href="/akunPage" >Account</a>
              <hr></hr>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    
  );
};

export default Sidebar;