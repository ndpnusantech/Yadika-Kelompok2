import "./admSidebar.css";
import { NavDropdown , Nav } from "react-bootstrap" 

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

              <Nav.Link href="/dashboardAdmin">DASHBOARD</Nav.Link>
              <li></li>
              <hr className="hr-adm"></hr>
              <NavDropdown title="PRODUCT" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  className="judul-sidebarAdm"
                  href="/productAdmin"
                >
                  Product
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="judul-sidebarAdm" href="/kategori">
                  Kategori
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="judul-sidebarAdm" href="/lokasi">
                  Lokasi
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="judul-sidebarAdm" href="/tayang">
                  Jam Tayang
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="judul-sidebarAdm" href="/post">
                  Post
                </NavDropdown.Item>
              </NavDropdown>
              <li></li>
            </li>

            <hr className="hr-adm"></hr>

            <li>
              <NavDropdown
                title="HISTORY TRANSACTION"
                id="navbarScrollingDropdown"
                className="admSidebar-dropdown"
              >
                <NavDropdown.Item
                  className="judul-sidebarAdm"
                  href="/tabelRecap"
                >
                  Recap
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="judul-sidebarAdm"
                  href="/transAdmin"
                >
                  Transaksi
                </NavDropdown.Item>
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