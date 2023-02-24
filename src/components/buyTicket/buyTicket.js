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
                <div className='txt'>
                <h1 className='txt-h1'>
        Joker
                </h1>
                <br/>
                <h2 className='txt-h2'>
                Joker adalah film cerita seru psikologis Amerika Serikat <br/>
                        tahun 2019 yang disutradarai oleh Todd Phillips dan diproduseri<br/>
                        oleh Todd Philips, Bradley Cooper, dan Emma Tillinger Koskoff.
                </h2>
                </div>
            </div>
       
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

            <div className='waktu'>
            <h1 className='txt-bioskop'>Cinema VII Bandung</h1><br/>
                    <div className='btn-waktu'>
                        {
                            dataTime.map((data) =>
                            (
                                
                                <div id={data.id}>
                                    
                                    <Button  variant="light" className='btn-data-waktu'>{data.time}</Button>
                                </div>
                            )
                            )
                        }
                    </div>
                    </div>      
            <div className='waktu'>
            <h1 className='txt-bioskop'>Cinema VII Jakarta</h1><br/>
                    <div className='btn-waktu'>
                        {
                            dataTime.map((data) =>
                            (
                                
                                <div id={data.id}>
                                    
                                    <Button  variant="light" className='btn-data-waktu'>{data.time}</Button>
                                </div>
                            )
                            )
                        }
                    </div>
                    </div>      
            <div className='waktu'>
            <h1 className='txt-bioskop'>Cinema VII Mars</h1><br/>
                    <div className='btn-waktu'>
                        {
                            dataTime.map((data) =>
                            (
                                
                                <div id={data.id}>
                                    
                                    <Button  variant="light" className='btn-data-waktu'>{data.time}</Button>
                                </div>
                            )
                            )
                        }
                    </div>
                    </div>      
           <div className='confirm'>
                        <Button variant="light" href="#pemilihanBangku" className='p-3'>CONFIRM</Button>
           </div>
        </>

    );
};
export default BuyTicket;