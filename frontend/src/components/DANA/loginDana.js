import "./loginDana.css"
import  Image  from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"


const LoginPakeDana = () => {
    const logoCinema = "./assets/logo/logoo 2.png"
    const logoDana = "./assets/logo/Dana.png"
    return (
        <>
<div className="logoAtas-login-dana">
    
    <Col>
<Image src={logoCinema} className="logoCinemaDana " /><br/>
<Image src={logoDana} className="logoDana"/>
</Col>
  
</div>
<div className="Container-Dana">
    <h1 className="txt-dana">
Aktifkan Akun DANA
    </h1>
    <h2 className="txt-deskripsi-dana">
Aktifkan akun dengan memasukkan <br/> nomor hp -mu sebagai ID DANA
    </h2>
    <div className="btn-input-dana mx-auto">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1 ">+ 62</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label="Username"
         className="input-pin-dana"
        />
      </InputGroup>
<Button href="/inputDana" className="btn-DANA mx-auto">BERIKUTNYA</Button>
</div>

</div>
</>
    )
    }
export default LoginPakeDana