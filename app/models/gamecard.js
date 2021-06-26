const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamecardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  image: {
    type: String,
    required: true
  },
  typeline: {
    type: String,
    required: true
  },
  setName: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  }
});

const gameCard = mongoose.model("gameCard", gamecardSchema);

module.exports = gameCard;