import "./login.css";

const Login = () => {
  const logo = "./assets/logoo2.png";

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
          <input type="text" placeholder="Username" required />
          <br />
          <br />
          <br />
          <input type="password" placeholder="Password" required />
        </form>
        <div className="button">
          <a href="/home"><button>Login</button></a>
        </div>
        <p>
          Dont have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
