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

  // var regUsername = [];
  // var regPassword = [];
  // var regEmail = [];
  // var regNoHP = [];

  // regUsername.push(username.val());
  // regPassword.push(password.val());
  // regEmail.push(email.val());
  // regNoHP.push(noHP.val());



  // username.val('')
  // password.val('')
  // email.val('')
  // noHP.val('')

  console.log(username + '',password + '',email + '',noHP + '');
  if (username && password && email && noHP) {
    localStorage.setItem("username" , username)
    localStorage.setItem("password" , password)
    localStorage.setItem("email" , email)
    localStorage.setItem("noHP" , noHP)
    alert("Register secufully");
    window.open("/");
  } else {
    alert("harus memasukan data");
    }

}