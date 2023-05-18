import Table from "react-bootstrap/Table"
import "./historyWatching.css"
import { data } from "../../Data/dataCards";

const Watching = () => {
    const kiko = "./Images Card Movie/kiko deep sea.jpg"
    const imgLogo = "../assets/navbar/logoo2.png";

    return(
        <>
          <div className="inHistoryWatch">
        <img className='logohistoryWatch' src={imgLogo} alt="Logo" width="300px"/>
                <h2>History Watching</h2>
                </div>
<Table className='table-historywatch'>
    {data.map((data) => (
    <tbody >
        <tr>
        <th className="text-center align-middle"><img src={data.img} alt="kiko"/></th>
        <th className='text-center align-middle'>{data.tittle}</th>
        <th className='text-center align-middle'>SUNDAY 6 FEBRUARY 2023</th>
        <th className='text-center align-middle'>CINEMA VII BANDUNG</th>
            
        </tr>
       
    </tbody>
    ))}
</Table>
</>
    )
}

export default Watching