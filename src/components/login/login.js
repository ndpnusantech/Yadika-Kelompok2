
<<<<<<< HEAD

// import AdmSidebar from "../layouts/admSidebar/admSidebar";



=======
// import AdmSidebar from "../layouts/admSidebar/admSidebar";


>>>>>>> 390272a818e5fe3ed5cc46e20fda2e24df66349b
import "./login.css";

const Login = () => {
  const logo = "/assets/logo/logoo 2.png";

  return (
    <div className="boxLogin">


<<<<<<< HEAD


    


=======
    

>>>>>>> 390272a818e5fe3ed5cc46e20fda2e24df66349b
      <div className="logoLogin">
        <img
          src={logo}
          alt=""
          width="300px"
          heigt="350px"
          style={{ marginBottom: "50px", marginTop: "60px" }}
        />
      </div>
      <div className="formLogin">
        <form action="">
          <input type="text" placeholder="Username" required id="username"/>
          <br />
          <br />
          <input type="password" placeholder="Password" required id="password"/>
        </form>
        <div className="buttonLogin">
        <button onClick={loginAkun}>Login</button>
        </div>
        <p>
          Dont have an account? <a href="/register">Register</a><br/>
        </p>
      </div>
    </div>
  );
};

export default Login;

const loginAkun = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var username1 = localStorage.getItem("username")
  var password1 = localStorage.getItem("password")

  if (username === username1 && password === password1) {
    window.location.href = "/home";
  } else {
    alert("Username atau Password Salah")
  }
}