import express from "express";
import drinkSourceModel from "../models/drinkSource.model.js";

const drinkSourceRouter = express.Router();

drinkSourceRouter.post("/", async (req, res) => {
  try {
    const drinkSource = await drinkSourceModel.create({ ...req.body });

    return res.status(201).json(drinkSource);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export default drinkSourceRouter;
