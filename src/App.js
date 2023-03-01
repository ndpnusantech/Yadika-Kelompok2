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
import Transaksi from "./pages/buktiTransaksipage";
import ChooseSeat from "./pages/ChooseSeat";
import HistoryWatching from "./pages/historyWatch";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/akunPage" element={<AkunPage />} />
        <Route path="/ticket" element={<Ticket/>} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/upComing" element={<UpComing />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/buyTicket" element={<Buy/>} />
        <Route path="/editProfile" element={<EditProfile/>} />
        <Route path="/pembayaranPage" element={<Bayar/>} />
        <Route path="/buyTicket" element={<Buy />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/pembayaranPage" element={<Bayar />} />
        <Route path="/buktiTransaksipage" element={<Transaksi />} />
        <Route path="/ChooseSeat" element={<ChooseSeat />} />
        <Route path="/historyWatching" element={<HistoryWatching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
