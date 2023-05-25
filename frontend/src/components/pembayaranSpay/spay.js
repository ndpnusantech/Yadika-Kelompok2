import "./spay.css";
import Button from "react-bootstrap/Button"

const Spay = () => {
    const logoD = "./assets/navbar/logoo2.png";

    
    return(
   <div className="logoImg">
        <img
          src={logoD}
          alt=""
          width="300px"
          heigt="350px"
          style={{
            marginBottom: "30px",
            marginTop: "40px",
            marginLeft: "600px",
          }}
        /> <br />
        <img  class="imgspay" src="./assets/logo/spay.png" alt="" />
        <div className="kotak">
            <h1>LOG IN</h1>
            <img src="./assets/logo/keranjang.png" alt="" />

            <form action="" className="input-spay">
                <input className="input-spay-login"  type="text" placeholder="No.Handphone / Email / Username" />
                <hr />
                 <br />
                <input  className="input-spay-login" type="password" placeholder="Password" />

            <form action="" className="input">
                <input type="text" placeholder="No.Handphone / Email / Username" />
                <hr />
                 <br />
                <input type="password" placeholder="Password" />

                <hr />
                <img src="./assets/logo/logoakun.png" alt="" /> <br/> <br/> <br/>
                <img src="./assets/logo/gembok.png" alt="" /> <br/> <br/>
               <div className="abc">
                <img src="./assets/logo/abc.png" alt="" />
                </div>
            </form>
<Button href="spayPage2" className="button-spay">Konfirmasi</Button>
</form>
        </div>
      </div>
      
    )
}

export default Spay;