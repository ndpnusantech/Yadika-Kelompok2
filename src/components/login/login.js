import "./login.css";

const Login = () => {
  const logo = "/assets/logo/logoo 2.png";

  return (
    <div className="box">
      <div className="logo">
        <img
          src={logo}
          alt=""
          width="400px"
          heigt="350px"
          style={{ marginBottom: "50px", marginTop: "60px" }}
        />
      </div>
      <div className="form">
        <form action="">
          <input type="text" placeholder="Username" required id="username"/>
          <br />
          <br />
          <br />
          <input type="password" placeholder="Password" required id="password"/>
        </form>
        <div className="button">
        <button onClick={loginAkun}>Login</button>
        </div>
        <p>
          Dont have an account? <a href="/register">Register</a>
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