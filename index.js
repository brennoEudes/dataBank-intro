import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./config/db.config.js";
import drinkRouter from "./routes/drink.routes.js";
import drinkSourceRouter from "./routes/drinkSource.routes.js";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/prepair", drinkRouter);
app.use("/DrinkSource", drinkSourceRouter);

app.listen(Number(process.env.PORT), () => {
    console.log(`Server up and running at port ${process.env.PORT}`);
})