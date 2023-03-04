import express from "express";
import drinkModel from "../models/drink.model.js";
import drinkSourceModel from "../models/drinkSource.model.js";

const drinkRouter = express.Router();

drinkRouter.post("/:drinkSourceId", async (req, res) => {
  try {
    const { drinkSourceId } = req.params;

    const newDrink = await drinkModel.create({
      ...req.body,
      drinkType: drinkSourceId,
    });

    const updatedDrinkSource = await drinkSourceModel.findOneAndUpdate(
      { _id: drinkSourceId },
      { $push: { drinks: newDrink._id } },
      { new: true, runValidators: true }
    );

    return res.status(201).json(newDrink);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro no preparo do drink!");
  }
});

//Continuar CRUD por aqui...

drinkRouter.get("/all-drinks", async (req, res) => {
  try {
    const allDrinks = await drinkModel.find();

    return res.status(201).json(allDrinks);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro no preparo do drink!");
  }
});

drinkRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const oneDrink = await drinkModel.findById(id);

    return res.status(201).json(oneDrink);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Drink não encontrado!");
  }
});

drinkRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDrink = await drinkModel.findByIdAndDelete(id);

    return res.status(201).json(deletedDrink);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Drink não encontrado!");
  }
});

drinkRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDrink = await drinkModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedDrink);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Drink não encontrado!");
  }
});

export default drinkRouter;
