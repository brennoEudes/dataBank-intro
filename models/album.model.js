import {model, Schema} from "mongoose";

const albumSchema = new Schema ({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    tracks: [{type: String, minLength: 1, maxLength: 50}],
});

const albumModel = model("Album", albumSchema);

["Musica 1", "Musica 2", "Musica 3"];

export default albumModel;