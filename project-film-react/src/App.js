import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AkunPage from "./components/pages/akunPage";
import LoginPage from "./components/pages/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/akun" element={<AkunPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
