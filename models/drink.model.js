import { model, Schema } from "mongoose";

const drinkSchema = new Schema({
  drinkName: {
    type: String,
    names: ["Caipirinha", "Caipivodka"],
    required: true,
  },
  lime: { type: Number, min: 0.5, max: 1, required: true },
  suggarSpoon: { type: Number, required: true },
  iceMl: { type: Number, min: 200, max: 400 },
  drinkType: { type: String, drinks: ["Cachaça", "Vodka"], required: true },
});

const drinkModel = model("Drink", drinkSchema);

export default drinkModel;
