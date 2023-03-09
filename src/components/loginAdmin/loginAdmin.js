import "./loginAdmin.css";

const LoginAdmin = () => {
  const logo = "/assets/logo/logoo 2.png";

  return (
    <div className="boxLogin-Admin">
      <div className="logoLogin-Admin">
        <img
          src={logo}
          alt=""
          width="300px"
          heigt="350px"
          style={{ marginBottom: "50px", marginTop: "60px" }}
        />
      </div>
      <div className="formLogin-Admin">
        <form action="">
          <input type="text" placeholder="Username ( Admin )" required id="username"/>
          <br />
          <br />
          <input type="password" placeholder="Password" required id="password"/>
        </form>
        <div className="buttonLogin-Admin">
        <button onClick={loginAkun}>Login</button>
        </div>
        <p>
         Only Admin ! Not Admin? <a href="/">Login User</a>
        </p>
      </div>
    </div>
  );
};

export default LoginAdmin;

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