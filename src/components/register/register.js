import "../register/register.css";

const Register = () => {
  const logo4 = "./assets/logo/logoo 2.png";

  return (
    <div className="box">
      <div className="logo">
        <img
          src={logo4}
          alt=""
          width="400px"
          heigt="350px"
          style={{ marginBottom: "50px", marginTop: "60px" }}
        />
      </div>
      <div className="form">
        <form action="">
          <input type="text" placeholder="Username" required  id="username"/>
          <br />
          <br />
          <br />
          <input type="password" placeholder="Password" required id="password"/>
          <br />
          <br />
          <br />
          <input type="email" placeholder="Email" required id="email"/>
          <br />
          <br />
          <br />
          <input type="number" placeholder="No. Handphone" required id="noHP"/>
        </form>
        <div className="button">
        <button onClick={registerAkun}>Register</button>
        </div>
        <p>
          Dont have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

const registerAkun = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var noHP = document.getElementById("noHP").value;
  
  localStorage.setItem("username" , username)
  localStorage.setItem("password" , password)
  localStorage.setItem("email" , email)
  localStorage.setItem("noHP" , noHP)

  console.log(username + '',password + '',email + '',noHP + '');
  alert("Ready")
}