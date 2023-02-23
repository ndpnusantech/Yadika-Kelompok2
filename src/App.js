import "./style/style.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AkunPage from "./pages/akunPage";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import Ticket from "./pages/ticket";
import NowPlaying from "./pages/nowPlaying";
import UpComing from "./pages/upComing";
import Trailer from "./pages/trailer";
import Buy from "./pages/buyTicket";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/akunPage" element={<AkunPage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/upComing" element={<UpComing />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/buyTicket" element={<Buy/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;