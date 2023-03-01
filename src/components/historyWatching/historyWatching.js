import Table from "react-bootstrap/Table"
import "./historyWatching.css"

const Watching = () => {
    const kiko = "./Images Card Movie/kiko deep sea.jpg"
    return(
        <>
<Table className='table-historywatch'>
    <tbody>
        <tr>
        <th className="text-center align-middle"><img src={kiko} alt="kiko"/></th>
        <th className='text-center align-middle'>KIKO IN THE DEEP SEA</th>
        <th className='text-center align-middle'>SUNDAY 6 FEBRUARY 2023</th>
        <th className='text-center align-middle'>CINEMA VII BANDUNG</th>
        <th className='text-center align-middle th-a' href=''>Watch It Again?</th>
        </tr>
    </tbody>
</Table>
</>
    )
}

export default Watching