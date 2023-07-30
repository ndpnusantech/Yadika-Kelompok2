import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import ProdukRoute from "./routes/ProdukRoute.js";
import HargaProdukRoute from "./routes/HargaProdukRoute.js";
import LokasiRoute from "./routes/LokasiRoute.js";
import GendreRoute from "./routes/GendreRoute.js";
import JamTayang from "./routes/JamTayangRoute.js";
import HistoryTransaksi from "./routes/HistoryTransaksiRoute.js"
import Pembayaran from "./routes/PembayaranFilmRoute.js"
import pemesanan from "./routes/PemesananFilmRoute.js"
import penayangan from "./routes/PenayanganFilmRoute.js"
import TanggalPesan from "./routes/TanggalPesanRoute.js"
import TayangFilm from "./routes/TayangFilmRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProdukRoute);
app.use(HargaProdukRoute);
app.use(LokasiRoute);
app.use(GendreRoute);
app.use(JamTayang);
app.use(HistoryTransaksi);
app.use(Pembayaran);
app.use(pemesanan);
app.use(penayangan);
app.use(TanggalPesan);
app.use(TayangFilm);

app.listen(5000, () => console.log("Server Running..."));
