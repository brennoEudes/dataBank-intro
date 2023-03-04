import { model, Schema } from "mongoose";

const drinkSourceSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    country: {type: String},
    picture: {type: String},
    alcoholLevel: {type: Number, min: 1, max: 10},
    drinks: [{type: Schema.Types.ObjectId, ref: "Drink"}]
})

const drinkSourceModel = model("DrinkSource", drinkSourceSchema);

export default drinkSourceModel;

