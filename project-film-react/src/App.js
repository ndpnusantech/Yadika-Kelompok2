<<<<<<< HEAD
import './App.css';
import NavigationBar from './components/layouts/navbar';

function App() {
  return (
   <>
   <NavigationBar/>
   </>
=======
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
>>>>>>> 70b6f10b72270a965a1772e975d2cbfaec00cb2b
  );
}

export default App;
