import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"
import ProdukRoute from "./routes/ProdukRoute.js"
import HargaProdukRoute from "./routes/HargaProdukRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProdukRoute);
app.use(HargaProdukRoute);


app.listen(5000, ()=> console.log('Server Running...'));