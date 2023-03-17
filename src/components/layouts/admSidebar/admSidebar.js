import "./admSidebar.css";


const AdmSidebar= () => {
  const logo = "./assets/navbar/logoo2.png";

  return (

      <div className="admsidebar">
        <nav>
          <img src={logo} alt="" width="150px" />
          <p className="txt-admSide">Admin</p>
          <div className="navbar-link2">
            <ul>
              <li>
              <hr></hr>

                <a href="/dashboardAdmin">DASHBOARD</a>
              <li>
              </li>
              <hr></hr>
                <a href="/productAdmin">PRODUCT</a>

                <a href="/">DASHBOARD</a>
              <li>
              </li>
              <hr></hr>
                <a href="/">PRODUCT</a>

              </li>
              <li>
              <hr></hr>
                <a href="/" >POST</a>
              <hr></hr>
              </li>
              <li>
                <a href="/" className="admHistory">HISTORY TRANSACTION</a>
              </li>
              <hr></hr>
            </ul>
          </div>
        </nav>
      </div>
    
  );
};

export default AdmSidebar;