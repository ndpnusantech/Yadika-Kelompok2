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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/akunPage" element={<AkunPage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/upComing" element={<UpComing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;