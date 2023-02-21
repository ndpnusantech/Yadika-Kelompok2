import "./style/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AkunPage from "./components/pages/akunPage";
import Home from "./components/pages/home";
import LoginPage from "./components/pages/loginPage";
import RegisterPage from "./components/pages/registerPage";
import Account from "./components/pages/account";
import Ticket from "./components/pages/ticket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
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