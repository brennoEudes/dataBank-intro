import express from "express";
import drinkModel from "../models/drink.model.js";

const drinkRouter = express.Router();

drinkRouter.post("/", async (req, res) => {
  try {
    const newDrink = await drinkModel.create({ ...req.body });

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

drinkRouter.get("/drinkId", async (req, res) => {
  try {
    const { id } = req.params;

    const oneDrink = await drinkModel.findById(id);

    if (!oneDrink) {
      return res.status(404).json("Drink não encontrado!");
    }

    return res.status(201).json(oneDrink);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro no preparo do drink!");
  }
});

drinkRouter.delete("/delete/id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDrink = await drinkModel.findByIdAndDelete(id);

    return res.status(201).json(deletedDrink);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro no preparo do drink!");
  }
});

drinkRouter.put("/edit/id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDrink = await drinkModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(201).json(updatedDrink);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Erro no preparo do drink!");
  }
});

export default drinkRouter;
