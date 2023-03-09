import "./style/style.css";
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
import Favorite from "./components/favorite/favorite";
import Buy from "./pages/buyTicket";
import EditProfile from "./pages/editProfile";
import Bayar from "./pages/pembayaranPage";
import ChooseSeat from "./pages/ChooseSeat";
import HistoryWatching from "./pages/historyWatch";
import HistoryTransaksi from "./pages/historyTransaksi";
import Pembayaran from "./pages/buktiPembayaran";

import BayarSpay from "./pages/spayPage";
import BayarSpay2 from "./pages/spayPage2";
import BayarSpay3 from "./pages/spayPage3";

import HalLoginGopay from "./pages/HalLoginGopay";
import LoginDana from "./pages/LoginDana";
import InputDana from "./pages/inputDana";
import KonfirmasiDana from "./pages/konfirmasiDana";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/upComing" element={<UpComing />} />
        <Route path="/historyWatching" element={<HistoryWatching />} />
        <Route path="/akunPage" element={<AkunPage />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/ChooseSeat" element={<ChooseSeat />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/buyTicket" element={<Buy />} />
        <Route path="/buktiPembayaran" element={<Pembayaran />} />
        <Route path="/historyTrans" element={<HistoryTransaksi />} />
        <Route path="/pembayaranPage" element={<Bayar />} />
        <Route path="/HalLoginGopay" element={<HalLoginGopay />} />
        <Route path="/pembayaranPage" element={<Bayar/>} />

        <Route path="/spayPage" element={<BayarSpay/>} />
        <Route path="/spayPage2" element={<BayarSpay2/>} />
        <Route path="/spayPage3" element={<BayarSpay3/>} />

        <Route path="/loginDana" element={<LoginDana/>} />
        <Route path="/inputDana" element={<InputDana/>} />
        <Route path="/konfirmasiDana" element={<KonfirmasiDana/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
