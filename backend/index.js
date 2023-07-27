import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import ProdukRoute from "./routes/ProdukRoute.js";
import HargaProdukRoute from "./routes/HargaProdukRoute.js";
import LokasiRoute from "./routes/LokasiRoute.js";
import GendreRoute from "./routes/GendreRoute.js";
import JamTayang from "./routes/JamTayangRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProdukRoute);
app.use(HargaProdukRoute);
app.use(LokasiRoute);
app.use(GendreRoute);
app.use(JamTayang);

app.listen(5000, () => console.log("Server Running..."));
