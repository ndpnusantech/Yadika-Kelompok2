import "./admSidebar.css";
import { NavDropdown  } from "react-bootstrap" 

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
              <hr className="hr-adm"></hr>

                <a href="/dashboardAdmin" >DASHBOARD</a>
              <li>
              </li>
              <hr className="hr-adm"></hr>
              <NavDropdown title="PRODUCT" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="/productAdmin">Product</NavDropdown.Item>
              <NavDropdown.Item href="/kategori">Kategori</NavDropdown.Item>
              <NavDropdown.Item href="/lokasi">
                Lokasi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tayang">
                Jam Tayang
              </NavDropdown.Item>
            </NavDropdown>

                {/* <a href="/">DASHBOARD</a> */}
              <li>
              </li>
              {/* <hr></hr> */}
                {/* <a href="/">PRODUCT</a> */}

              </li>
              <li>
              <hr className="hr-adm"></hr>
                <a href="/post" >POST</a>
              <hr className="hr-adm"></hr>
              </li>
              <li>
              <NavDropdown title="HISTORY TRANSACTION" id="navbarScrollingDropdown" className="admSidebar-dropdown">
              <NavDropdown.Item href="/productAdmin">Recap</NavDropdown.Item>
              <NavDropdown.Item href="/productAdmin">Recap</NavDropdown.Item>
            </NavDropdown>
              </li>
              <hr className="hr-adm"></hr>
            </ul>
          </div>
        </nav>
      </div>
    
  );
};

export default AdmSidebar;