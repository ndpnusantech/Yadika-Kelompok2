import Sidebar from "../layouts/sidebar/sidebar";
import './seats.css'
import Table from 'react-bootstrap/Table';

const seats = () => {
    const logo4 = "./assets/logo/logoo 2.png";
    
    return (
        <div className="Seats">
             <div className="logoSeats" >
                <img src={logo4}
                     alt="" />
                     <h3>Screen <span className="span">Seats</span></h3>
            </div>
            <div>
                <Sidebar/>
            </div>
            <div className="Seats-Chair">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
            </div>
           
        </div>
    )
}

export default seats;