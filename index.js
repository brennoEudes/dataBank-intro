import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./config/db.config.js";
import albumRouter from "./routes/album.routes.js";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/album", albumRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server up and running at port 4000 ${process.env.PORT}`);
})