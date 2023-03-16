import AdmSidebar from "../layouts/admSidebar/admSidebar";
import "./postAdmin.css"

const logo5 = "./assets/logo/logoo 2.png"
function inpImg() {
    var preview = document.querySelector('#poster');
    var file = document.querySelector('#inpPost').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }
    
}

const PostAdmin = () => {
    return (
        <>
        <AdmSidebar />
        <div className="logoPostAdmin">
            <img 
             src={logo5}
             alt="" 
             width= "400px" 
             height="120px"
             style={{ marginBottom: "30px", marginTop: "45px" }}/>
        </div>
        <div className="newAdd">
            <h1>New Add Film</h1>
        </div>
        <div className="lapisan">
        <div className="lapisan1">
            <form action="">
                <h1>Title</h1>
                <input type="text" width="600px" height="100px"/>
                <br />
                <br />
                <h1>Link Film</h1>
                <input type="text" />
                <br />
                <br />
                <h1>Contents</h1>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
        </div>
        <div className="lapisan2">
            <form action="">
            <h1>Image</h1>
            <h2></h2>
            <h1>Video</h1>
            {/* <textarea width="3px" cols="30" rows="10"></textarea> */}
            <h3>.</h3>
            <br />
            <button>New add film</button>
            </form>       
        </div>
        </div>
        
        
        </>
        
    )
}
export default PostAdmin;