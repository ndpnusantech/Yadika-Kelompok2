import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { dataButton } from '../../Data/dataButton';
import { dataTime } from '../../Data/dataTime';
import Sidebar from '../layouts/sidebar/sidebar';
import './butTicket.css'

const BuyTicket = () => {
    const joker = "./images/joker.jfif";
    return (
        <>
            <Sidebar />
            <div className='image'>
                <img
                    style={{ width: '35vh', height: '55vh' }}
                    className="d-flex  img1"
                    src={joker}
                    alt="marvel"
                />
            </div>
            <table border={1} className = 'tbl-desc'>
                <tr>
                </tr>
                    <td>Joker</td>
                <tr>
                    <td>Joker adalah film cerita seru psikologis Amerika Serikat <br/>
                        tahun 2019 yang disutradarai oleh Todd Phillips dan diproduseri<br/>
                        oleh Todd Philips, Bradley Cooper, dan Emma Tillinger Koskoff.
                    </td>
                </tr>
            </table>
            <ButtonToolbar className="mb-3  btn-table" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2 btn-table2" aria-label="First group">
                    {
                        dataButton.map((data) =>

                        (

                            <Button variant="secondary">{data.hari}<br />{data.tanggal}</Button>
                        )
                        )

                    }

                </ButtonGroup>
            </ButtonToolbar>

            <ButtonToolbar className="mb-3  btn-time" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2 btn-time2" aria-label="First group">
                    <>
                        {
                            dataTime.map((data) =>
                            (
                                <>
                                    <Button variant="secondary">{data.time} </Button>
                                    {/* <h6>spasi</h6>
                                    di kasih h6 biar ada spasi coba hapus h6nya atau comment */}
                                </>
                            )
                            )
                        }
                    </>

                </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar className="mb-3  btn-time" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2 btn-time2" aria-label="First group">
                    <>
                        {
                            dataTime.map((data) =>
                            (
                                <>
                                    <Button variant="secondary">{data.time} </Button>
                                    {/* <h6>spasi</h6> */}
                                </>
                            )
                            )
                        }
                    </>

                </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar className="mb-3  btn-time" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2 btn-time2" aria-label="First group">
                    <>
                        {
                            dataTime.map((data) =>
                            (
                                <>
                                    <Button variant="secondary">{data.time} </Button>
                                    {/* <h6>spasi</h6> */}
                                </>
                            )
                            )
                        }
                    </>

                </ButtonGroup>
            </ButtonToolbar>
        </>

    );
};
export default BuyTicket;