import "./style/style.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AkunPage from "./components/pages/akunPage";
import Home from "./components/pages/home";
import LoginPage from "./components/pages/loginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Ticket from "./components/pages/ticket";
import NowPlaying from "./components/pages/nowPlaying";
import UpComing from "./components/pages/upComing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/akunPage" element={<AkunPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/upComing" element={<UpComing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;