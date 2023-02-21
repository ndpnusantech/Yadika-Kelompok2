<<<<<<< HEAD
=======
import "./style/style.css"
>>>>>>> 8bf41409c68deabf0ec0ea2e35c6a24539766bad
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AkunPage from "./components/pages/akunPage";
import Home from "./components/pages/home";
import LoginPage from "./components/pages/loginPage";
<<<<<<< HEAD
import RegisterPage from "./components/pages/RegisterPage";
import NowPlaying from "./components/pages/nowPlayingPage";
=======
import RegisterPage from "./components/pages/registerPage";
import Account from "./components/pages/account";
import Ticket from "./components/pages/ticket";
>>>>>>> 8bf41409c68deabf0ec0ea2e35c6a24539766bad

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/akun" element={<AkunPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;