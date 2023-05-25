import "./inputDana.css"
import  Image  from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import { Container , Button , Form} from "react-bootstrap"

const InputPakeDana = () => {
    const logoCinema = "./assets/logo/logoo 2.png"
    const logoDana = "./assets/logo/Dana.png"
    
    return(
<>
<div className="logoAtas-pin-dana ">
    
    <Col>
<Image src={logoCinema} className="logoCinemaDana-pin " /><br/>
<Image src={logoDana} className="logoDana-pin"/>
</Col>
  
</div>
<div>
<Container className="Container-pin-dana">
<h1 className="txt-dana-pin">
PIN DANA
    </h1>
    <h2 className="txt-deskripsi-dana-pin">
Masukkan PIN DANA untuk login
    </h2>
<div className="btn-input-pin" >
    <div className="input-pin-dana ">
        <Form.Control placeholder="" className="pin-dana"/>
        <Form.Control placeholder="" className="pin-dana"/>
        <Form.Control placeholder="" className="pin-dana"/>
        <Form.Control placeholder="" className="pin-dana"/>
        <Form.Control placeholder="" className="pin-dana"/>
        <Form.Control placeholder="" className="pin-dana"/>
    </div>
    <Button href="/konfirmasiDana" className="btn-DANA-pin ">BERIKUTNYA</Button>
    </div>
</Container>
</div>
</>
    )
}

export default InputPakeDana