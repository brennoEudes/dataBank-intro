import express from "express";
import drinkModel from "../models/drink.model.js";

const drinkRouter = express.Router();

drinkRouter.post("/", async (req, res) => {
    try {

        const newDrink = await drinkModel.create({...req.body})

        return res.status(201).json(newDrink);

    } catch (err) {
        console.log ("Erro no preparo do drink!");
    }
}); 

//Continuar CRUD por aqui...

export default drinkRouter;