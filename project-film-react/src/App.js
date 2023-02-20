import "./style/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AkunPage from "./components/pages/akunPage";
import Home from "./components/pages/home";
import LoginPage from "./components/pages/loginPage";
import RegisterPage from "./components/pages/registerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/akun" element={<AkunPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;