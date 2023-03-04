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

drinkSourceRouter.get("/", async (req, res) => {
  try {
    const allDrinkSources = await drinkSourceModel.find();

    return res.status(201).json(allDrinkSources);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Bebida não encontrada!");
  }
});

drinkSourceRouter.get("/:drinkSourceId", async (req, res) => {
  try {
    const { drinkSourceId } = req.params;

    const oneDrinkSource = await drinkSourceModel.findById({_id: drinkSourceId}).populate("drinks");

    return res.status(200).json(oneDrinkSource);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Drink não encontrado!");
  }
});

drinkSourceRouter.put("/:drinkSourceId", async (req, res) => {
  try {
    const { drinkSourceId } = req.params;

    const updatedDrinkSource = await drinkSourceModel.findByIdAndUpdate(
      {_id: drinkSourceId},
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedDrinkSource);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Drink não encontrado!");
  }
});

drinkSourceRouter.delete("/:drinkSourceId", async (req, res) => {
  try {
    const { drinkSourceId } = req.params;

    const deletedDrinkSource = await drinkSourceModel.findByIdAndDelete({_id:drinkSourceId});

    await drinkSourceModel.deleteMany({drinkType :drinkSourceId});

    return res.status(201).json(deletedDrinkSource);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Drink não encontrado!");
  }
});

export default drinkSourceRouter;
