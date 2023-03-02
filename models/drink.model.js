import { model, Schema } from "mongoose";

const drinkSchema = new Schema({
  drink_name: {
    type: String,
    names: ["Caipirinha", "Caipivodka"],
    required: true,
  },
  lime: { type: Number, min: 0.5, max: 1, required: true },
  suggar_spoon: { type: Number, required: true },
  ice_ml: { type: Number, min: 200, max: 400 },
  drink_type: { type: String, drinks: ["Cachaça", "Vodka"], required: true },
});

const drinkModel = model("Drink", drinkSchema);

export default drinkModel;
