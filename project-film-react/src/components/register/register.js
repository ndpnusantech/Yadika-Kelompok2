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
          <input type="text" placeholder="Username" required />
          <br />
          <br />
          <br />
          <input type="password" placeholder="Password" required />
        </form>
        <div className="button">
          <a href="/"><button>Register</button></a>
        </div>
        <p>
          Dont have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

// const Register = () => {
//     const logo = "./assets/logo/logoo 2.png";

//     return(
//         <div className="box">
//         <div className="logo">
//           <img
//             src={logo}
//             alt=""
//             width="400px"
//             heigt="350px"
//             style={{ marginBottom: "50px", marginTop: "60px" }}
//           />
//         </div>
//         <div className="form">
//           <form action="">
//             <input type="text" placeholder="Username" required />
//             <br />
//             <br />
//             <br />
//             <input type="password" placeholder="Password" required />
//           </form>
//           <div className="button">
//             <button type="submit">Register</button>
//           </div>
//           <p>
//             Already have an account? <a href="/">Login</a>
//           </p>
//         </div>
//       </div>
//     )
// }

// export default Register
