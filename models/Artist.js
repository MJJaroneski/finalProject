const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  city: String,
  state: String,
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
