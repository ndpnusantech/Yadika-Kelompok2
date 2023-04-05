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
import Post from "./pages/postPage";
import Qris from "./pages/pembayaranQris";
import DashboardAdmin from "./pages/dashboardAdmin";
import BayarSpay from "./pages/spayPage";
import BayarSpay2 from "./pages/spayPage2";
import HalLoginGopay from "./pages/HalLoginGopay";
import LoginDana from "./pages/LoginDana";
import InputDana from "./pages/inputDana";
import KonfirmasiDana from "./pages/konfirmasiDana";
import AdminLogin from "./pages/loginAdmin";
import KonfirmasiGopay from "./pages/pembayaranGopay";
import PinGopay from "./pages/pinGopay";
import ProductAdmin from "./pages/productAdmin";
import KategoriPage from "./pages/kategori";
import LokasiPage from "./pages/lokasi";
import TayangPage from "./pages/tayang";
import TableRecaps from "./pages/tableRecapPage";
import TransaksiAdmin from "./pages/adminTransaksi";



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
        <Route path="/post" element={<Post/>} />
        <Route path="/pembayaranQris" element={<Qris/>} />        
        <Route path="/dashboardAdmin" element={<DashboardAdmin/>} />
        <Route path="/spayPage" element={<BayarSpay/>} />
        <Route path="/spayPage2" element={<BayarSpay2/>} />
        <Route path="/loginDana" element={<LoginDana/>} />
        <Route path="/inputDana" element={<InputDana/>} />
        <Route path="/konfirmasiDana" element={<KonfirmasiDana/>} />
        <Route path="/loginAdmin" element={<AdminLogin/>} />
        <Route path="/konfirmasiGopay" element={<KonfirmasiGopay/>} />
        <Route path="/pinGopay" element={<PinGopay/>} />
        <Route path="/productAdmin" element={<ProductAdmin/>} />
        <Route path="/kategori" element={<KategoriPage/>} />
        <Route path="/lokasi" element={<LokasiPage/>} />
        <Route path="/tayang" element={<TayangPage/>} />
        <Route path="/tabelRecap" element={<TableRecaps/>} />
        <Route path="/adminTransaksi" element={<TransaksiAdmin/>} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
