import express from "express";
import albumModel from "../models/album.model.js";

const albumRouter = express.Router();

albumRouter.post("/", async (req, res) => {
    try {

        const newAlbum = await albumModel.create({...req.body})

        return res.status(201).json(newAlbum);

    } catch (err) {
        console.log (err);
    }
});

//Continuar CRUD por aqui...

export default albumRouter;